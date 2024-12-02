import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  phoneNumber: string;
  lastName: string;
  message: string;
  subject?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  phoneNumber,
  lastName,
  message,
  subject,
}) => (
  <div className="w-full flex items-center justify-center">
    <div className="w-full max-w-[500px] mx-auto bg-gray-50 rounded-sm ">
      <h1 className="text-center text-lg text-black-100">
        Good Morning 3lwa 😀💻
      </h1>
      <br />
      <h2>{firstName} Wants to Contact you.</h2>
      <hr />
      <h2>Details:</h2>
      <p>
        <strong>First Name:</strong> {firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone Number:</strong> {phoneNumber}
      </p>
      <hr />
      {subject && (
        <>
          <h2>Subject:</h2>
          <p>{subject}</p>
        </>
      )}
      <p>Message:</p>
      <p>{message}</p>
    </div>
  </div>
);
