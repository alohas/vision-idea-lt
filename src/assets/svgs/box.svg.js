import React from "react";

const BoxSvg = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path d="M32,2a1,1,0,0,0-.07-.34.36.36,0,0,0,0-.09.86.86,0,0,0-.15-.22.15.15,0,0,0-.05-.06.92.92,0,0,0-.25-.19h0l-.07,0A1.27,1.27,0,0,0,31,1H8.06a1,1,0,0,0-.57.19l-7.06,5-.06.06a1,1,0,0,0-.14.15l-.1.15a1.34,1.34,0,0,0-.07.18,1.18,1.18,0,0,0,0,.2S0,6.94,0,7V30a1,1,0,0,0,1,1H24.83a.92.92,0,0,0,.36-.07l.12-.07a.83.83,0,0,0,.16-.09l6.18-5.2a1,1,0,0,0,.35-.77ZM24.48,6H15.32l4.34-3h8.48ZM8.38,3h7.74L11.78,6H4.15ZM23.84,29H2V8H23.84Zm2-1.14V7.45L30,4.09,30,24.31Z" />
      <path d="M8.06,14H18a1,1,0,0,0,0-2H8.06a1,1,0,0,0,0,2Z" />
    </svg>
  );
};

export default BoxSvg;
