import React from "react";

import styles from "./baseLoading.module.css";

type TBaseLoading = {
  isLoading?: boolean
  width?: number
  height?: number
}

const BaseLoading: React.FC<TBaseLoading> = ({ isLoading }) => {
  return (
    <div className={styles.loading}>
      {isLoading && <div className={styles.spin}></div>}
    </div>
  );
};

export default BaseLoading;
