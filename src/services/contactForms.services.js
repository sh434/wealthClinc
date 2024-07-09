import axios from "axios";
import { EMPTY_OBJECT } from "../../../assets/constants";

export const submitForm = async (formField) => {
  const { name, phone, budget, propertyType } = formField;
  console.log({ name, phone, budget, propertyType });
  const KEY = "658161d6-53f4-45d1-997c-5723ba05be71";
  // 658161d6-53f4-45d1-997c-5723ba05be71

  console.log(name, phone, budget, propertyType);

  try {
    const response = await axios.post("https://api.web3forms.com/submit", {
      access_key: KEY,
      ...formField,
      //   redirect: "https://web3forms.com/success",
    });

    if (response.status === 200) {
      alert("form Submitted Successfully");
    } else {
      alert("form Submission Failed");
    }
  } catch (error) {
    alert("Form submission failed");
    console.error("Error:", error);
  }
};

// !-------

export const sendEmail = ({ name, phone, email }) => {
  window.Email.send({
    SecureToken: "1b5fb98a-9fef-4a08-b986-4322e07b3030",
    To: "garganuj@yopmail.com",
    From: "anu8005dh@gmail.com",
    Subject: `New callback request from ${name}`,
    Body: `Name: ${name}<br/>Phone: ${phone}<br/>Email: ${email}`,
  })
    .then((message) => {
      alert("Message sent successfully: " + message);
    })
    .catch((error) => {
      console.error("Failed to send message:", error);
      alert("Failed to send message: " + error);
    });
};

export const sendWhatsApp = (formField) => {
  const { name, phone, email } = formField || EMPTY_OBJECT;
  const encodedMessage = encodeURIComponent(name + phone + email);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};
