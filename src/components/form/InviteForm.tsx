/** @format */

import * as React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import { ToastContainer, toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

import { getMessaging, getToken } from "firebase/messaging";

import "react-toastify/dist/ReactToastify.css";
import styles from "./InviteForm.module.css";

const OK = "Այո";
const NO = "Չեմ կարող գալ";

const PESA = "Փեսա";
const HARS = "Հարս";

const InviteForm: React.FC = () => {
  const [nameValue, setNameValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const [gender, setGender] = useState(PESA);
  const [arrive, setArrive] = useState(OK);
  const [loading, setLoading] = useState(false);

  const [showFullscreenNotification, setShowFullscreenNotification] =
    useState(false);
  const [notificationData, setNotificationData] = useState({
    title: "",
    body: "",
    tableNumber: "",
  });

  const messaging = getMessaging();

  useEffect(() => {
    // Обработка сообщений от Service Worker
    const handleServiceWorkerMessage = (event: MessageEvent) => {
      console.log("Сообщение от Service Worker:", event.data);

      if (event.data && event.data.type === "TABLE_NUMBER") {
        const tableNumber = event.data.tableNumber;

        // Показываем полноэкранное уведомление
        if (tableNumber) {
          setNotificationData({
            title: "Սեղան է նշանակվել",
            body: `Ձեր սեղանի համարն է ${tableNumber}`,
            tableNumber: tableNumber,
          });
          setShowFullscreenNotification(true);
        }
      }
    };

    // Регистрируем обработчик сообщений
    navigator.serviceWorker.addEventListener(
      "message",
      handleServiceWorkerMessage
    );

    // Проверяем, есть ли уже активный Service Worker
    if (navigator.serviceWorker.controller) {
      console.log("Service Worker контролирует страницу");
    }

    return () => {
      navigator.serviceWorker.removeEventListener(
        "message",
        handleServiceWorkerMessage
      );
    };
  }, []);

  // Обработка уведомлений в foreground (когда приложение открыто)
  // useEffect(() => {
  //   const unsubscribe = onMessage(messaging, (payload) => {
  //     console.log("Foreground notification received:", payload);

  //     // Получаем данные из уведомления
  //     const title = payload.notification?.title || "Նոր ծանուցում";
  //     const body = payload.notification?.body || "";

  //     // Извлекаем номер стола из body или из data
  //     let tableNumber = "";
  //     if (payload.data?.tableNumber) {
  //       tableNumber = payload.data.tableNumber;
  //     } else {
  //       // Ищем цифры в тексте уведомления
  //       const numbers = body.match(/\d+/);
  //       if (numbers) {
  //         tableNumber = numbers[0];
  //       }
  //     }

  //     // Показываем полноэкранное уведомление с N и номером стола
  //     setNotificationData({
  //       title: title,
  //       body: body,
  //       tableNumber: tableNumber,
  //     });
  //     setShowFullscreenNotification(true);
  //   });

  //   return () => unsubscribe();
  // }, [messaging]);

  // const messaging = getMessaging();

  // Обработка уведомлений в foreground (когда приложение открыто)
  // useEffect(() => {
  //   const unsubscribe = onMessage(messaging, (payload) => {
  //     console.log("Foreground notification received:", payload);

  //     // Показываем через toast
  //     if (payload.notification) {
  //       toast.info(payload.notification.body || "Новое уведомление", {
  //         position: "top-center",
  //         autoClose: 5000,
  //       });
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [messaging]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const registration = await navigator.serviceWorker.register(
        "/firebase-messaging-sw.js"
      );

      let token = null;
      try {
        token = await getToken(messaging, {
          vapidKey: process.env.REACT_APP_Vapid_Key,
          serviceWorkerRegistration: registration,
        });
        console.log("FCM Token:", token);
      } catch (tokenError) {
        console.error("Error getting token:", tokenError);
      }

      const id = `${nameValue}_${quantity}_${nanoid(4)}`;

      const formData = {
        name: nameValue,
        quantity,
        gender,
        arrive,
        createdAt: new Date(),
        fcmToken: token || null,
        tableNumber: null,
      };

      await setDoc(doc(db, "users", id), formData);

      setNameValue("");
      setQuantity("");
      setArrive(OK);
      setGender(PESA);

      toast.success("Շնորհակալություն 😊");
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Error saving data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Полноэкранное уведомление с буквой N и номером стола
  if (showFullscreenNotification) {
    return (
      <>
        <div className={styles.fullscreenOverlay}>
          <div className={styles.notificationCard}>
            <div className={styles.nLetterContainer}>
              <div className={styles.nLetter}>N</div>
              {notificationData.tableNumber && (
                <div className={styles.tableNumberBadge}>
                  {notificationData.tableNumber}
                </div>
              )}
            </div>

            <h2 className={styles.notificationTitle}>
              {notificationData.title}
            </h2>

            <p className={styles.notificationBody}>{notificationData.body}</p>

            {notificationData.tableNumber && (
              <div className={styles.tableInfo}>
                <span className={styles.tableLabel}>ՍԵՂԱՆԻ ՀԱՄԱՐ</span>
                <div className={styles.tableNumberDisplay}>
                  {notificationData.tableNumber}
                </div>
              </div>
            )}

            <button
              className={styles.closeButton}
              onClick={() => setShowFullscreenNotification(false)}
            >
              ՓԱԿԵԼ
            </button>
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={7000} />
      </>
    );
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerForm}>
          <label className={styles.quantity}>
            Անուն Ազգանուն
            <input
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              className={styles.input}
              autoComplete="name"
              required
            />
          </label>

          <label className={styles.quantity}>
            Հյուրերի քանակը
            <input
              type="number"
              max={30}
              step={1}
              inputMode="numeric"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className={styles.input}
              required
            />
          </label>

          <p className={styles.title_text}>Ո՞ւմ կողմից եք հրավիրված</p>

          <div className={styles.radioGroup}>
            <label className={styles.label}>
              <input
                type="radio"
                checked={gender === PESA}
                onChange={() => setGender(PESA)}
              />
              <span className={styles.radioText}>{PESA}</span>
            </label>
            <label className={styles.label}>
              <input
                type="radio"
                checked={gender === HARS}
                onChange={() => setGender(HARS)}
              />
              <span className={styles.radioText}>{HARS}</span>
            </label>
          </div>

          <p className={styles.title_text}>Մասնակցելու եք՞</p>
          <div className={styles.radioGroup}>
            <label className={styles.label}>
              <input
                type="radio"
                checked={arrive === OK}
                onChange={() => setArrive(OK)}
              />
              <span className={styles.radioText}>{OK}</span>
            </label>
            <label className={styles.label}>
              <input
                type="radio"
                checked={arrive === NO}
                onChange={() => setArrive(NO)}
              />
              <span className={styles.radioText}>{NO}</span>
            </label>
          </div>

          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? "Ուղարկվում..." : "Ուղարկել"}
            </button>
          </div>
        </div>
      </form>

      <ToastContainer position="top-center" autoClose={7000} />
    </>
  );
};

export default InviteForm;
