import React, { useState } from "react";

function Input({ handleText, text }) {
  return (
    <textarea
      name=""
      cols="30"
      rows="9"
      className="shadow-lg rounded-lg  p-2 text-xl outline-none"
      placeholder="Enter Text.."
      onChange={(e) => handleText(e.target.value)}
      value={text}
    ></textarea>
  );
}

export default Input;
