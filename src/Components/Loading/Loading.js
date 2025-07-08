import React from "react";
import styles from "./Loading.module.css";
import { Tailspin } from 'ldrs/react'
import 'ldrs/react/Tailspin.css'

// Default values shown

function Loading() {
  return (
    <div className={styles.loading}>
      <Tailspin
        size="30"
        stroke="4"
        speed="1"
        color="var(--primary-default)"
      />
    </div>
  );
}

export default Loading;