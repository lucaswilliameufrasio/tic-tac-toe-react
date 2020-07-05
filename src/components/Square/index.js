import React from "react";

import "./styles.css";

function Square({ onClick, value }) {
  return <button className="button" onClick={onClick}>{value}</button>;
}

export default Square;
