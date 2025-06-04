import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Contact = () => {
 const {t} = useTranslation();
   const [formData, setFormData] = useState({
      subject: '',
      email: '',
      text: ''
    });
  
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value} = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = async () => {
      setIsSubmitting(true);
      setSubmitMessage('');
  
      try {
        // Send email notification
        const emailResponse = await fetch('https://email-api-gilt-one.vercel.app/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to:"singharti7648@gmail.com",
            from: formData.email, // Send to the artist's email
            subject: formData.subject,
            text: formData.text,
          })
        });
  
        const emailResult = await emailResponse.json();
  
        if (emailResponse.ok) {
          setSubmitMessage('email sent successfully!');
          
          // Reset the form
          setFormData({
            subject: '',
            email: '',
            text: '',
          });
          
          
        } else {
          setSubmitMessage(`Error: ${emailResult.error || 'Failed to send email'}`);
        }
  
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitMessage('Error: Failed to submit form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative mx-8"
    >   
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className=" text-xl font-bold  my-2">{t('contact.lets')}</h5>
        <p className=" mb-4 max-w-md text-lg font-serif ">
         {t('contact.des')}
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
        <form className="flex flex-col">
          {/* Email input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium"
            >
              {t('contact.email')}
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#d2d4dc] border border-[#33353F] placeholder-[#141414] text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          {/* Subject input */}
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-sm mb-2 font-medium">
              {t('contact.sub')}
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              className="bg-[#d2d4dc] border border-[#33353F] placeholder-[#141414] text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              value={formData.subject}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          {/* Message input */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm mb-2 font-medium"
            >
              {t('contact.msg')}
            </label>
            <textarea
              name="text"
              id="text"
              type="text"
              className="bg-[#d2d4dc] border border-[#33353F] placeholder-[#141414] text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
               value={formData.text}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          {/* Submit button */}
          <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          isSubmitting 
            ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
            : 'bg-amber-600 text-white hover:bg-amber-200'
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Form'}
      </button>
        </form>
         {submitMessage && (
        <div className={` p-4 rounded-lg text-center w-96 my-3 ${
          submitMessage.includes('Error') 
            ? 'bg-red-100 text-red-700 border border-red-300' 
            : 'bg-green-100 text-green-700 border border-green-300'
        }`}>
          {submitMessage}
        </div>
      )}
      </div>
    </section>
  );
};

export default Contact;
