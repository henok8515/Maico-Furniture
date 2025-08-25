import emailjs from "emailjs-com";

export const sendEmail = (cartItems) => {
  const templateParams = {
    cartItems: JSON.stringify(cartItems, null, 2), // Format cart items as a string
  };

  emailjs
    .send(
      "service_2o25hpq",
      "template_46y1enb",
      templateParams,
      "bIAsAM7oU7p4dGHia"
    )
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
    });
};
