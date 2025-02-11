import * as React from "react";

import styles from "./Title.module.css";

const Title = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.text_box}>
          <h1 className={styles.title}>ԳՈՌ ԵՎ ՄԱՆԵ</h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
