import React from "react";

import style from "./Footer.module.css";
import Clock from "../layout/Clock";

function Footer(props) {
  return (
    <>
      <footer className={style.footerbottom}>
      {process.env.REACT_APP_BEGNAPP_NAME} ___ React version: {React.version} ___ {navigator.platform}{" "}
        ___ <Clock />
      </footer>
    </>
  );
}

export default Footer;
