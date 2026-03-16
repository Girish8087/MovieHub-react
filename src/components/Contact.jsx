import React, { useState } from "react";
import { Form } from "react-router";


export const getFormData = async ({request}) => {
  try {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    console.log(data)
    return null
  } catch (error) {
    console.log(error)
  }
}


const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 2xl:px-32 py-16 flex flex-col gap-16">

      {/* Hero */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-red-500 tracking-widest">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          Have questions or feedback? Reach out to us and we’ll get back to you
          as soon as possible.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto w-full">
        <Form method="post" action='/contact'
          className="flex flex-col gap-6 bg-zinc-900 p-8 rounded-xl shadow-lg"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </Form>
      </section>
    </div>
  );
};

export default Contact;