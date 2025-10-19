import React, { useState } from 'react';
import { useEffect } from 'react';
import './RickshawBusManagement.css';

const RickshawBusManagement = () => {

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  // Sample data for 3 different stands
  const [stand1Rickshaws] = useState([
    { id: 1, number: "KA20 AC 7097", driverName: "ವಿಜಯ", phone: "9686424495" },
    
  ]);

  const [stand2Rickshaws] = useState([
   
  ]);

  const [stand3Rickshaws] = useState([
    { id: 1, number: "UNKNOWN", driverName: "ಅನಿಲ್ ಕುಮಾರ್", phone: "8747887655" },
    
  ]);

  const [touristBuses] = useState([
    {
      id: 1,
      name: "Himalayan Express",
      capacity: 45,
      route: "",
      facilities: ["AC", "WiFi", "Reclining Seats", "Entertainment System"],
      contactNumber: "",
      fareRange: "₹1500 - ₹2500"
    },
    {
      id: 2,
      name: "Golden Triangle Tours",
      capacity: 35,
      route: "",
      facilities: ["AC", "GPS Tracking", "First Aid", "Comfortable Seating"],
      contactNumber: "",
      fareRange: "₹1200 - ₹2000"
    }
  ]);

  const RickshawTable = ({ title, rickshaws, bgColor }) => (
    <div className="rickshaw-stand-card">
      <h2 className="stand-title">{title}</h2>
      <div className="table-container">
        <table className="rickshaw-table">
          <thead>
            <tr>
              <th>Rickshaw Number</th>
              <th>Driver Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {rickshaws.length === 0 ? (
              <tr>
                <td colSpan="3" className="no-data">No rickshaws available at this stand</td>
              </tr>
            ) : (
              rickshaws.map((rickshaw, index) => (
                <tr key={rickshaw.id}>
                  <td>{rickshaw.number}</td>
                  <td>{rickshaw.driverName}</td>
                  <td>
                    <a href={`tel:${rickshaw.phone}`} className="phone-link">
                      📞 {rickshaw.phone}
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="rickshaw-management-page">
      <div className="page-container">
        {/* Hero Header */}
        <div className="hero-header">
          <h1 className="page-title">🚖 Rickshaw Management System</h1>
          <p className="page-subtitle">Find rickshaw drivers and tourist bus services in Perdoor</p>
       
 <br/>
          
          <p className="submit-description">
            <h3 className="submit-title">
            🚖 Are you a rickshaw driver, taxi owner, or tourist bus operator?
          </h3>
            Help us add new vehicles by submitting this form.
          </p>
          <button
            type="button"
            onClick={() => window.open('https://forms.gle/5KUnkXEG5QnZfPot6', '_blank')}
            className="submit-button"
          >
            📌 Submit Your Vehicle Info
          </button>
        
        </div>

        {/* Submit Form Card */}
        

        {/* Rickshaw Tables */}
        <div className="section-container">
          <h2 className="section-heading">Rickshaw Stands</h2>
          
          <RickshawTable 
            title="Stand 1 - ಕೆಳಪೇಟೆ ಆಟೋ ನಿಲ್ದಾಣ"
            rickshaws={stand1Rickshaws}
            bgColor="rgba(59, 130, 246, 0.1)"
          />
          
          <RickshawTable 
            title="Stand 2 - ಮಲ್ಪೇಟೆ ಆಟೋ ನಿಲ್ದಾಣ"
            rickshaws={stand2Rickshaws}
            bgColor="rgba(16, 185, 129, 0.1)"
          />
          
          <RickshawTable 
            title="Stand 3 - ದೇವಾಲಯದ ಬಳಿ"
            rickshaws={stand3Rickshaws}
            bgColor="rgba(245, 158, 11, 0.1)"
          />
        </div>

        {/* Tourist Bus Section */}
        <div className="section-container">
          <h2 className="section-heading">🚌 Tourist Bus Services</h2>
          
          <div className="bus-grid">
            {touristBuses.map((bus) => (
              <div key={bus.id} className="bus-card">
                <h3 className="bus-name">{bus.name}</h3>
                
                <div className="bus-details">
                  <div className="detail-row">
                    <span className="detail-label">Capacity:</span>
                    <span className="detail-value">{bus.capacity} passengers</span>
                  </div>
                  
                  <div className="detail-row">
                    <span className="detail-label">Route:</span>
                    <span className="detail-value">{bus.route || 'On Request'}</span>
                  </div>
                  
                  <div className="detail-row">
                    <span className="detail-label">Fare:</span>
                    <span className="detail-value fare">{bus.fareRange}</span>
                  </div>
                  
                  <div className="detail-row">
                    <span className="detail-label">Contact:</span>
                    {bus.contactNumber ? (
                      <a href={`tel:${bus.contactNumber}`} className="phone-link">
                        📞 {bus.contactNumber}
                      </a>
                    ) : (
                      <span className="detail-value">Call for details</span>
                    )}
                  </div>
                </div>
                
                <div className="facilities-section">
                  <h4 className="facilities-title">Facilities:</h4>
                  <div className="facilities-tags">
                    {bus.facilities.map((facility, index) => (
                      <span key={index} className="facility-tag">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RickshawBusManagement;
