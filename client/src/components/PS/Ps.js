import React from 'react'; 
import Particles from 'react-particles-js';
import './Ps.css';

function Test(){
  return (
        
    <Particles className='particlesStyle'
    
      params={{
        particles: {
          color: {
            value: '#F0F8FF'
          },
          line_linked: {
            color: {
              value: '#F5FFFA'
            }
          },
          number: {
            value: 70
          },
          size: {
            value: 8
          }
        }
      }}
    />
  );
}

export default Test;