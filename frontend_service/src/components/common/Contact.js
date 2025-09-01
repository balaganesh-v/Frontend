import Input from "@/components/common/Input";
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h3>
        <p className="text-gray-600 mb-8">
          Have questions? Reach out and our team will get back to you shortly.
        </p>
        <form className="grid gap-4 text-left">
          <Input label="Name" type="text" placeholder="Your Name" />
          <Input label="Email" type="email" placeholder="Your Email" />
          <textarea className="w-full p-3 border rounded-lg" rows="4" placeholder="Your Message"></textarea>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
