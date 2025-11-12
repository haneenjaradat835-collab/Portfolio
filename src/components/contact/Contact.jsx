import React from "react";
import "./contact.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup
  .object({
    firstName: yup.string().required(),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    message: yup.string().required(),
  })
  .required();

function Contact() {
  const [result, setResult] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "22f55eea-885b-4a3f-9ff1-6e01ab4e78ca");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div className="contact">
      <div className="text-container">
        <h3> لا تتردد في التواصل! </h3>
        <p>أتطلع لسماع أفكارك والتعاون معك!!</p>
        <ul class="contact-list">
          <li>
            <i class="fas fa-map-marker-alt"></i>
            <span>الأردن - اربد </span>
          </li>
          <li>
            <i class="fa-brands fa-whatsapp"></i>
            <a href="https://wa.me/+962787556101" target="_blank">
              الإنتقال إلى واتساب
            </a>
          </li>
          <li>
            <i class="fas fa-envelope"></i>
            <a href="mailto:haneenjaradat835@gmail.com" target="_blank">
              haneenjaradat835@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name here..."
          />
          <p>{errors.name?.message}</p>

          <input type="email" name="email" placeholder="Your email here..." />
          <p>{errors.email?.message}</p>

          <textarea
            name="message"
            required
            placeholder="Your message here..."
            rows={6}
          />
          <p>{errors.message?.message}</p>

          <button type="submit"> إرسال الرسالة </button>
          <p>{result}</p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
