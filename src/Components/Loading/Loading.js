import React from "react";
import logo from "../../Assets/Images/logo.gif";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <img src={logo} alt="Loading..." className={styles.logoAnim} />
      <span>Loading...</span>
    </div>
  );
}

export default Loading;