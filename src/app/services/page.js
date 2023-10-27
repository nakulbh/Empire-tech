"use client"
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const MyForm = () => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  
  const handleCaptchaVerification = (response) => {
    if (response) {
      setIsCaptchaVerified(true);
    }
  }

  const handleSubmit = () => {
    // Submit form only if reCAPTCHA is verified
    if (isCaptchaVerified) {
      // Form submission logic
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Other form fields */}
      <ReCAPTCHA sitekey="6Lc27NAoAAAAADtvayMceBuxyjb8_oP3gJRrh7uq" onChange={handleCaptchaVerification} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
