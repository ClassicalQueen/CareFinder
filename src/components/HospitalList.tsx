import React from "react";
import HospitalCard from "./HospitalCard";

interface Provider {
  name: string;
  address: string;
  phone_number: number;
  // Add other properties based on the API response
}

interface HospitalListProps {
  providers: Provider[];
}




const HospitalList: React.FC<HospitalListProps> = ({ providers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {providers.map((provider, index) => (
        <HospitalCard
          key={index}
          name={provider.name}
          address={provider.address}
          phone_number={provider.phone_number}  />
      ))}
    </div>
  );
};

export default HospitalList;