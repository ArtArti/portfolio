import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "axios";
const Contact = () => {
  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios({
        method: "POST",
        url:"https://gmail-system.vercel.app/api/send",
        body: JSON.stringify({ from, subject, message }),
        headers: {'Content-Type': 'application/json',}
      });
      if (response.ok) {
        alert('Email sent successfully!');
        setFrom('');
        setSubject('');
        setMessage('');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative mx-8"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className=" text-xl font-bold  my-2">Let&apos;s Connect</h5>
        <p className=" mb-4 max-w-md text-lg font-serif ">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com" className=" text-5xl">
            <FaGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/arti-singh0212/"
            className=" text-5xl"
          >
            <CiLinkedin className="" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#d2d4dc] border border-[#33353F] placeholder-[#141414] text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
              value={from}
        onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          {/* Subject input */}
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-sm mb-2 font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#d2d4dc] border border-[#33353F] placeholder-[#141414] text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              value={subject}
             onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          {/* Message input */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#d2d4dc] border border-[#33353F] placeholder-[#141414] text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="bg-red-400 hover:bg-gradient-to-br from-purple-500 to-pink-600 font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
