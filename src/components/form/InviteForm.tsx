/** @format */

import * as React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase.config";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = {
        name: nameValue,
        quantity,
        gender,
        arrive,
        createdAt: new Date(),
      };

      await addDoc(collection(db, "users"), formData);
      setNameValue("");
      setQuantity("");
      setArrive(OK);
      setGender(PESA);

      // toast.success("Տվյալները հաջողությամբ գրանցվեցին");
      toast.success("Շնորհակալություն 😊");
    } catch (error) {
      toast.error("Error saving data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
              // min={1}
              max={30}
              step={1}
              inputMode="numeric"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className={styles.input}
              required
            />
          </label>

          <p className={styles.title_text}>Ու՞մ կողմից եք հրավիրված</p>

          <div className={styles.radioGroup}>
            <label className={styles.label}>
              <input
                type="radio"
                name="gender"
                value={PESA}
                checked={gender === PESA}
                onChange={() => setGender(PESA)}
              />
              <span className={styles.radioText}>{PESA}</span>
            </label>
            <label className={styles.label}>
              <input
                type="radio"
                name="gender"
                value={HARS}
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
                name="category"
                value={OK}
                checked={arrive === OK}
                onChange={() => setArrive(OK)}
              />
              <span className={styles.radioText}>{OK}</span>
            </label>
            <label className={styles.label}>
              <input
                type="radio"
                name="category"
                value={NO}
                checked={arrive === NO}
                onChange={() => setArrive(NO)}
              />
              <span className={styles.radioText}>{NO}</span>
            </label>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Ուղարկվում..." : "Ուղարկել"}
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className={styles.toast_message}
      />
    </>
  );
};

export default InviteForm;
