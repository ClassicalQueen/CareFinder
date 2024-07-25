import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Hospital {
  name: string;
  location: string;
}

const HospitalList: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [selectedState, setSelectedState] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    try {
      const response = await axios.get('https://www.communitybenefitinsight.org/?page=info.data_api');
      setHospitals(response.data);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  };

  const filteredHospitals = hospitals
    .filter(hospital => 
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'location') return a.location.localeCompare(b.location);
      return 0;
    });

  return (
    <div className="hospital-list">
      <h1>Hospital List</h1>
      <div className="filters">
        <select 
          value={selectedState} 
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select State</option>
          {/* Add state options here */}
        </select>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="location">Location</option>
        </select>
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="hospital-grid">
        {filteredHospitals.map((hospital, index) => (
          <div key={index} className="hospital-item">
            <h3>{hospital.name}</h3>
            <p>{hospital.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalList;