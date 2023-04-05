import React from "react";
import styles from "./Layout.module.scss";
const Layout = ({ children }) => {

  return (
      <div className={styles.layout}><div className={styles.container}>{children}</div></div>
  );
};

export default Layout;