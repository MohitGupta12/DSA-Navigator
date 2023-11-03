import React from "react";
import myGif from "./assets/gif.gif";

const AboutPageSenku = () => {
  return (
    <div className="h-[300px] w-[300px] bg-white fixed bottom-14 right-6 flex-c">
      <img src={myGif} alt="gif" />
    </div>
  );
};

export default AboutPageSenku;
