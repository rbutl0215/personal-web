import React, { useState } from "react";
import "./BlueButton.css";

interface Props {
  text: string;
  onClick: (input: string) => void;
}

const BlueButton: React.FC<Props> = ({ text, onClick }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    onClick(input);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="blue-button" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default BlueButton;
