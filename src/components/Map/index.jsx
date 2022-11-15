import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const position = [56.1304, -106.3468];
var myIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  // specify the path here
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png",
});
const markers = {
  features: [
    {
      type: "Feature",
      properties: {
        PARK_ID: 960,
        NAME: "Bearbrook Skateboard Park",
        DESCRIPTIO: "Flat asphalt surface, 5 components",
      },
      geometry: {
        type: "Point",
        coordinates: [49.1904, -75.3372987731628],
      },
    },
    {
      type: "Feature",
      properties: {
        PARK_ID: 1219,
        NAME: "Bob MacQuarrie Skateboard Park (SK8 Extreme Park)",
        DESCRIPTIO:
          "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer",
      },
      geometry: {
        type: "Point",
        coordinates: [45.467134581917357, -75.546518086577947],
      },
    },
  ],
};
const Map = () => {
  const [activePark, setActivePark] = useState(null);
  return (
    <>
      <MapContainer
        className="markercluster-map"
        center={position}
        zoom={4}
        maxZoom={18}
      >
        {markers.features.map((el) => (
          <Marker position={el.geometry.coordinates} icon={myIcon}>
            <Popup>{el.properties.NAME}</Popup>
          </Marker>
        ))}

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </>
  );
};

export default Map;
