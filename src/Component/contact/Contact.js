import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form fields
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = "Invalid email format.";
      isValid = false;
    }
    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        "service_ewt9nwd", // Replace with your EmailJS Service ID
        "template_rozbnvg", // Replace with your EmailJS Template ID
        formData,
        "1iKmxJIKcvH0-u-YR" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          // Clear form only on successful submission
          setFormData({ name: "", email: "", subject: "", message: "" });
          setStatus('');
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      <div className="heading" id="contact">
        <h5>CONTACT</h5>
        <h2>
          <span className="heading-border"></span>CONTACT ME
          <span className="heading-border"></span>
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-left">
                <h3>Email</h3>
                <a href="mailto: meet0508@hotmail.com">meet0508@hotmail.com</a>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="contact-form">
              <h3>Get In Touch</h3>
              <form onSubmit={handleSubmit}>
                <div className="row mt-4">
                  {/* Name Field */}
                  <div className="col-md-6 col-12 mt-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div className="col-md-6 col-12 mt-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && (
                      <p className="error-text">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="col-md-12 col-12 mt-4">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject *"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    {errors.subject && (
                      <p className="error-text">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="col-md-12 col-12 mt-4">
                    <textarea
                      name="message"
                      placeholder="Your Message *"
                      className="form-control"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {errors.message && (
                      <p className="error-text">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="col-md-12 col-12 mt-4">
                    <button className="contact-btn" type="submit">
                      Contact Me
                    </button>
                  </div>
                </div>
              </form>

              {/* Status Message */}
              {status && <p className="status-text">{status}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 footer-right">
              <p>Copyright © 2024 All Rights Reserved MEET SHAH</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
