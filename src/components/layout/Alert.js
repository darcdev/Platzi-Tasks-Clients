/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React from "react";

const Alert = ({ alert }) => {
  if (!alert) return null;

  return (
    <div data-cy="alerta" className={`alerta ${alert.categoria}`}>
      {alert.msg}
    </div>
  );
};

export default Alert;
