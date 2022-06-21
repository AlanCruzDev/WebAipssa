import React from 'react';
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
import './map.css';

const containerStyle = {
  width: '100%',
  height: '500px'
};

export const Map = () => {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC_LYtMcEyNc1wBmdpUcYiFUPRkCa7jM9o"
  });

  return (
    <div className='map'>
        {
          isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{
                lat:19.461849,
                lng:-99.040641
              }}
              zoom={20}
            >
              <Marker
                position={
                  {
                    lat:19.461849,
                    lng:-99.040641
                  }
                }
              />
            </GoogleMap>
        ) : (<></>)
        }
    </div>
  )
};
