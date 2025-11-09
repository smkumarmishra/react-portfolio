import "./ContactForm.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const [charCount, setCharCount] = useState(1000); // total limit

  //  Character count function
  const handleTextChange = (e) => {
    const max = 1000;
    const used = e.target.value.length;
    setCharCount(max - used);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_wwyxdb2";
    const templateId = "template_6hlsqyk";
    const publicKey = "VjMzJjX6yW1uH2_Q0";


    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        toast.success("Message Sent Successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        console.log(result.text);
        form.current.reset(); // clear form after sending
      },
      (error) => {
        toast.error(" Failed to send message!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        console.error(error.text);
      }
    );
  };

  return (
    <>
      <div className="contact">
        <h3 className="heading-text">Hire Me</h3>
        <div className="contact-section">
          <form ref={form} onSubmit={sendEmail} id="form">
            <div className="form-row">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="textarea-wrapper">
              <textarea
                name="message"
                rows="6"
                maxLength="1000"
                placeholder="Write your message..."
                className="msgbox"
                required
                onChange={handleTextChange}
              ></textarea>
              <div className="char-count" id="charCount">
                {charCount}
              </div>
            </div>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default ContactForm;
