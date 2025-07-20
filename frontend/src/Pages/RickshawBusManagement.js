import React, { useState } from 'react';
import { useEffect } from 'react';

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
      route: "Delhi - Manali - Shimla",
      facilities: ["AC", "WiFi", "Reclining Seats", "Entertainment System"],
      contactNumber: "9876543240",
      fareRange: "₹1500 - ₹2500"
    },
    {
      id: 2,
      name: "Golden Triangle Tours",
      capacity: 35,
      route: "Delhi - Agra - Jaipur",
      facilities: ["AC", "GPS Tracking", "First Aid", "Comfortable Seating"],
      contactNumber: "9876543241",
      fareRange: "₹1200 - ₹2000"
    }
  ]);

  const RickshawTable = ({ title, rickshaws, bgColor }) => (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: '1rem',
        textAlign: 'center',
        textShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }}>
        {title}
      </h2>
      <div style={{
        overflowX: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '1rem'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          
        }}>
          <thead>
            <tr style={{ backgroundColor: bgColor }}>
              <th style={headerStyle}>Rickshaw Number</th>
              <th style={headerStyle}>Driver Name</th>
              <th style={headerStyle}>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {rickshaws.map((rickshaw, index) => (
              <tr key={rickshaw.id} style={{
                backgroundColor: index % 2 === 0 ? 'rgba(248, 250, 252, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                transition: 'all 0.2s ease'
              }}>
                <td style={cellStyle}>{rickshaw.number}</td>
                <td style={cellStyle}>{rickshaw.driverName}</td>
                <td style={cellStyle}>
                  <a href={`tel:${rickshaw.phone}`} style={{
                    color: '#3b82f6',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}>
                    {rickshaw.phone}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const headerStyle = {
    padding: '0.75rem',
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#1f2937',
    borderBottom: '2px solid rgba(31, 41, 55, 0.1)',
    fontSize: '0.875rem'
  };

  const cellStyle = {
    padding: '0.75rem',
    borderBottom: '1px solid rgba(229, 231, 235, 0.8)',
    fontSize: '0.875rem',
    color: '#374151'
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgb(243, 231, 255) 0%, rgb(224, 242, 254) 50%, rgb(252, 228, 236) 100%)',
      minHeight: '100vh',
      padding: '1rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Rickshaw Tables */}
        <div style={{ marginBottom: '3rem' , marginTop: '100px'}}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            textAlign: 'center',
            marginBottom: '2rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Rickshaw Management System
          </h1>
          
          <RickshawTable 
            title="Stand 1 - ಕೆಳಪೇಟೆ ಆಟೋ ನಿಲ್ದಾಣ"
            rickshaws={stand1Rickshaws}
            bgColor="rgba(59, 130, 246, 0.1)"
          />
          
          <RickshawTable 
            title="Stand 2 - Railway Station"
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
        <div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            textAlign: 'center',
            marginBottom: '2rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Tourist Bus Services
          </h1>
          
          <div style={{
            display: 'grid',
           
            gap: '1.5rem'
          }}>
            {touristBuses.map((bus) => (
              <div key={bus.id} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                padding: '1.5rem',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '1rem',
                  borderBottom: '2px solid rgba(59, 130, 246, 0.3)',
                  paddingBottom: '0.5rem'
                }}>
                  {bus.name}
                </h3>
                
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{
                      fontWeight: 'bold',
                      color: '#374151',
                      minWidth: '80px',
                      fontSize: '0.875rem'
                    }}>
                      Capacity:
                    </span>
                    <span style={{
                      color: '#1f2937',
                      fontSize: '0.875rem'
                    }}>
                      {bus.capacity} passengers
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{
                      fontWeight: 'bold',
                      color: '#374151',
                      minWidth: '80px',
                      fontSize: '0.875rem'
                    }}>
                      Route:
                    </span>
                    <span style={{
                      color: '#1f2937',
                      fontSize: '0.875rem'
                    }}>
                      {bus.route}
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{
                      fontWeight: 'bold',
                      color: '#374151',
                      minWidth: '80px',
                      fontSize: '0.875rem'
                    }}>
                      Fare:
                    </span>
                    <span style={{
                      color: '#059669',
                      fontWeight: 'bold',
                      fontSize: '0.875rem'
                    }}>
                      {bus.fareRange}
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <span style={{
                      fontWeight: 'bold',
                      color: '#374151',
                      minWidth: '80px',
                      fontSize: '0.875rem'
                    }}>
                      Contact:
                    </span>
                    <a href={`tel:${bus.contactNumber}`} style={{
                      color: '#3b82f6',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '0.875rem'
                    }}>
                      {bus.contactNumber}
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 style={{
                    fontWeight: 'bold',
                    color: '#374151',
                    marginBottom: '0.5rem',
                    fontSize: '0.875rem'
                  }}>
                    Facilities:
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {bus.facilities.map((facility, index) => (
                      <span key={index} style={{
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        color: '#1e40af',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>
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
