import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_wx9rt9o', 'template_br9qfev', form.current, {
          publicKey: 'KmrpDOrH6czSND86J',
        })
        .then(
          () => {
            console.log('MESSAGE SUCCESS!');
            alert('Message sent successfully.');
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('There was an error sending the message. Please try again.');
          },
        );
    }
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg mb-4">Feel free to get in touch with me through the form below:</p>
        <form
          ref={form}
          className="max-w-lg mx-auto"
          onSubmit={sendEmail}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg text-black" name="user_name" placeholder="Steve Jobs" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg text-black" name="user_email" placeholder="example@example.com" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-lg text-black" name="message" placeholder="Hi..." required></textarea>
          </div>
          <button type="submit" className="bg-blue-800 text-white px-6 py-3 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
