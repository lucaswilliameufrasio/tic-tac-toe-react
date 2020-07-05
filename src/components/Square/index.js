import React from "react";
import styles from "./styles";

function Square({ onClick, value }) {
  return <button style={styles.button} onClick={onClick}>{value}</button>;
}

export default Square;
