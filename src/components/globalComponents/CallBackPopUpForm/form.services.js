import axios from "axios";
import { ENCRYPTED } from "../../../assets/constants/encrypted";
import { EMPTY_OBJECT } from "../../../assets/constants";

export const submitForm = async (formField) => {
  try {
    for (const ele of ENCRYPTED) {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: ele,
        ...formField,
        //   redirect: "https://web3forms.com/success",
      });

      if (response.status === 200) {
        console.log("Form submitted successfully");
      } else {
        console.log(`Form submission failed `);
      }
    }
    alert("Form Submitted Successfully");
  } catch (error) {
    alert("Form submission failed");
    console.error("Error:", error);
  }
};
// !-------

export const sendEmail = ({ name, phone, email }) => {
  window.Email.send({
    SecureToken: "",
    To: "garganuj@yopmail.com",
    From: "anu8005dh@gmail.com",
    Subject: `New callback request from ${name}`,
    Body: `Name: ${name}<br/>Phone: ${phone}<br/>Email: ${email}`,
  })
    .then((message) => {
      console.log("Email sent successfully:", message);
      alert("Message sent successfully: " + message);
    })
    .catch((error) => {
      console.error("Failed to send message:", error);
      alert("Failed to send message: " + error);
    });
};

export const sendWhatsApp = (formField) => {
  const { name, phone, email } = formField || EMPTY_OBJECT;
  const encodedMessage = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?phone=9711611652&text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};
