import React from "react";
import QRCode from "qrcode.react"; // Install 'qrcode' package

const ChatButton = ({ phoneNumber, prefilledMessage }) => {
  const chatUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;
  const QRSize = 200; // You can adjust the size

  return (
    <div>
      <button onClick={() => window.open(chatUrl)}>Chat on WhatsApp</button>
      <QRCode value={chatUrl} size={QRSize} />
    </div>
  );
};

export default ChatButton;
