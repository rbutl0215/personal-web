import React from "react";

interface Message {
  id: number;
  speaker: "A" | "B";
  text: string;
}

export interface DialogueProps {
  messages: Message[];
}

const Dialogue: React.FC<DialogueProps> = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.speaker === "A" ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`max-w-xs px-4 py-2 rounded-lg shadow ${
              message.speaker === "A" ? "bg-slate-700" : "bg-blue-700"
            }`}
          >
            <p className="text-sm">{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dialogue;
