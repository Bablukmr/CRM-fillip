import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl text-blue-500 mb-2">Fillip Technologies</h1>
        <h2 className="text-2xl text-gray-700">
          Transforming Vision into Reality
        </h2>
      </header>
      <div className="flex md:flex-row flex-col-reverse items-center justify-center">
        <div className="grid grid-cols-1 gap-8 md:w-[50%] mt-4 max-w-6xl">
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Patna</h3>
            <p>
              Next India Business Center, S.S Tower, 3rd Floor, Opp IDBI Bank,
              Lohiya Nagar, Kankarbagh, 800020, Patna
            </p>
            <p className="mt-4">
              <strong>Call us:</strong> +91-7545999990
            </p>
            <p>
              <strong>Email:</strong> info@filliptechnologies.com
            </p>
          </div>
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Ranchi</h3>
            <p>
              Ispat Residency, 1st Floor, A-block-104, Kathal More – Argora –
              Ranchi Rd, Harmu, Ranchi, Jharkhand 834002
            </p>
            <p className="mt-4">
              <strong>Call us:</strong> +91-7545999996
            </p>
            <p>
              <strong>Email:</strong> ranchi@filliptechnologies.com
            </p>
          </div>
        </div>
        <div className="md:w-[50%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
