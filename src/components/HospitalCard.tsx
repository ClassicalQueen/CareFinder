import React, { useState } from "react";
import "./hospital.css";

interface HospitalCardProps {
  name: string;
  address: string;
  phone_number: number;
}

const HospitalCard: React.FC<HospitalCardProps> = ({
  name,
  address,
  phone_number,
}) => {
  const handleOpenGoogleMaps = () => {
    const formattedAddress = address.replace(/\s/g, "+");
    const url = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
    window.open(url, "_blank");
  };

  const handleOpenPhoneNumbers = () => {
    const number = phone_number.toString().slice(0, 10);
    const call = `tel:${number}`;
    window.open(call);
  };

  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    const textToCopy = `${name}\n${address}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the "copied" state after 2 seconds
      })
      .catch((error) => console.error("Copy failed:", error));
  };

  return (
    // border-gray-200
    <div className="card-container max-w-sm p-4 bg-white flex flex-col justify-between border rounded-lg">
      <div className="header-card flex items-start justify-between w-full ">
        <h5 className="hospital-name mb-2 text-lg font-medium tracking-tight text-gray-900">
          {name}
        </h5>
        <div className="g-location">
          <button onClick={handleOpenGoogleMaps}>
            <img
              className="w-8 h-8 cursor-pointer"
              src="./assets/google-maps.svg"
              alt="Google Maps"
            />
          </button>
        </div>
      </div>

      <a
        onClick={handleOpenGoogleMaps}
        className="font-normal text-gray-700 pointer"
      >
        {address}
      </a>

      <a onClick={handleOpenPhoneNumbers} className="pointer">
        {phone_number.toString().slice(0, 12)}
      </a>

      <div className="flex items-center justify-between">
        <button
          className="inline-flex items-center text-gray-900 hover:text-white btn btn-minimal focus:ring-2 focus:outline-none focus:ring-Secondary font-medium rounded-lg text-sm text-center mr-2 mb-2"
          onClick={handleOpenGoogleMaps}
        >
          Visit
        </button>
        <button
          className="inline-flex items-center text-gray-900 hover:text-white btn btn-minimal focus:ring-2 focus:outline-none focus:ring-Secondary font-medium rounded-lg text-sm text-center mr-2 mb-2"
          onClick={copyToClipboard}
        >
          {copied ? "Copied" : "Copy address"}
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;
