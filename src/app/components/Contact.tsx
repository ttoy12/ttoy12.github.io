import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <p className="text-lg mb-4">Feel free to get in touch with me through the form below:</p>
      <form 
        className="max-w-lg mx-auto"
        action="https://docs.google.com/forms/u/2/d/14LxY3O-IcrsCyobt81pzNw3DHpM2u-609Yh2cmbqIks/prefill"
        method="POST"
        target="_blank"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg text-black" name="entry.1913529574" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg text-black" name="entry.498883965" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-lg text-black" name="entry.811883332" required></textarea>
        </div>
        <button type="submit" className="bg-blue-800 text-white px-6 py-3 rounded-lg">Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact