"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function ExplorePage() {

  // India boundaries
  const indiaBounds = [
    [6.4627, 68.1097],   // Southwest
    [35.5133, 97.3954],  // Northeast
  ];

  return (

    <div style={{ height: "100vh", width: "100%" }}>

      <MapContainer
        center={[22.5937, 78.9629]}
        zoom={5}
        minZoom={5}
        maxBounds={indiaBounds}
        maxBoundsViscosity={1.0}
        style={{ height: "100%", width: "100%" }}
      >

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Taj Mahal */}

        <Marker position={[27.1751, 78.0421]}>

          <Popup>
            Taj Mahal - Uttar Pradesh
          </Popup>

        </Marker>

        {/* Hampi */}

        <Marker position={[15.3350, 76.4600]}>

          <Popup>
            Hampi Ruins - Karnataka
          </Popup>

        </Marker>

        {/* Konark Temple */}

        <Marker position={[19.8876, 86.0945]}>

          <Popup>
            Konark Sun Temple - Odisha
          </Popup>

        </Marker>

      </MapContainer>

    </div>
  );
}