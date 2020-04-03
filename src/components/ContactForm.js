import React, { useState } from "react";
import "./contact-form.scss";

// Why the fuck is this not a language feature
const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});

const ContactFrom = ({ action }) => {
  const [contactMethod, setContactMethod] = useState("twitter");
  const [handle, setHandle] = useState("");

  const makeContact = (value, label, message, input) => ({
    value,
    label,
    message,
    input
  });
  const contactMethods = [
    makeContact(
      "twitter",
      "Twitter",
      "Please give us your Twitter handle",
      "text"
    ),
    makeContact(
      "whatsapp",
      "Whatsapp",
      "Please give us your Whatsapp number",
      "text"
    ),
    makeContact(
      "instagram",
      "Instagram",
      "Please give us your Instagram handle",
      "text"
    ),
    makeContact(
      "facebook",
      "Facebook",
      "Please give us your Facebook handle",
      "text"
    ),
    makeContact("email", "Email", "Please give us your email address", "email"),
    makeContact("sms", "SMS", "Please give us your phone number", "tel")
  ];
  const contactMethodMap = arrayToObject(contactMethods, "value");

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action={action || "thanks"}
      className={`contact-form 
                  is-size-5-mobile 
                  is-size-4-tablet 
                  is-size-4-widescreen`}
    >
      <div>
        <label>How would you like us to contact you?</label>
        <select
          name="contactMethod"
          value={contactMethod}
          onChange={evt => setContactMethod(evt.target.value)}
        >
          {contactMethods.map(({ value, label }) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div>
        <label>{contactMethodMap[contactMethod].message}</label>
        <input
          name="handle"
          value={handle}
          onChange={evt => setHandle(evt.target.value)}
          type={contactMethodMap[contactMethod].input}
          required
        ></input>
      </div>
      <div>
        <button type="submit">Get Contacted</button>
      </div>
      <p className="is-size-7">
        * We will not spam you nor will we share your details. By clicking on
        submit you agree to receive weekly doses of positive information and new
        facts that have emerged regarding the Corona Covid-19 emergency.
      </p>
    </form>
  );
};

export default ContactFrom;
