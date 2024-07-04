import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const defaultPosition = [40.1431, 47.5769];
    const [markers, setMarkers] = useState(null)
    let getMarkers = () => {
        axios.get(
            "http://localhost:8000/markers/"
        ).then((res) => {
            console.log(res.data.features)
            setMarkers(res.data.features)
        })
    }

    useEffect(() => {
        getMarkers()
    }, []);
  return (
      <>
          <MapContainer center={defaultPosition} zoom={9} scrollWheelZoom={true}>
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {markers?.map((marker) => {
                  const point = [marker.geometry.coordinates[1], marker.geometry.coordinates[0]];
                  return (
                      <Marker position={point} key={marker.id} >
                          <Popup>
                              <span>Name:<br /> {marker?.properties?.name}</span>
                          </Popup>
                      </Marker>
                  );
              })}
          </MapContainer>
      </>
  )
}

export default App
