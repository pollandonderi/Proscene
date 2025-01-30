import React from "react";

function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <p style={{fontSize:'15px'}}>{currentYear} © Procene. All rights reserved.</p>
  );
}

export default Copyright;