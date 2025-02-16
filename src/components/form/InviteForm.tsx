import * as React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase.config";

import "react-toastify/dist/ReactToastify.css";

import styles from "./InviteForm.module.css";

const OK = "Այո, կգամ";
const NO = "Ցավոք, չեմ կարողանա";

const PESA = "Փեսա";
const HARS = "Հարս";

const InviteForm: React.FC = () => {
  const [nameValue, setNameValue] = useState("");
  const [quantity, setQuantity] = useState("1");
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

      setQuantity("1");
      setArrive(OK);
      setGender(PESA);

      toast.success("Տվյալները հաջողությամբ գրանցվեցին, Շնորհակալություն 😊");
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
          <input
            placeholder="Անուն Ազգանուն"
            type="text"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            className={styles.input}
            required
          />

          <label className={styles.quantity}>
            Հյուրերի քանակը
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className={styles.input}
              required
            >
              <option value="" disabled hidden>
                Քանակը ընտրեք
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </label>

          <p className={styles.title_text}>Կկարողանա՞ք մասնակցել միջոցառմանը</p>
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
        </div>

        <div className={styles.buttonWrapper}>
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Ուղարկվում..." : "Ուղարկել"}
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={6000} // Auto-close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default InviteForm;
