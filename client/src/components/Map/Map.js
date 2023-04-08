import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import styles from './Map.module.css';
import * as itemService from "../../services/itemService";
import useFetcher from "../../hooks/useFetcher";
import { useState } from "react";
import simpleStyles from '../commonStyles/simpleButton.module.css';
import { Link } from "react-router-dom";
import { useAuthContext } from '../../contexts/AuthContext';
export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <CreateMap />;
}

function CreateMap() {
  const [fears] = useFetcher(itemService.getAllFears(), [])
  const [selectedMarker, setSelectedMarker] = useState('')
  const center = useMemo(() => ({ lat: 42.69682798958126, lng: 23.317752732287403 }), []);
  const { user } = useAuthContext();

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName={styles.mapContainer}>
      {fears.map((fear) => {
        let coordinate = ({ lat: fear.latitude, lng: fear.longitude });
        fear.coordinate = coordinate
        return (
          <Marker
            key={fear.id}
            position={coordinate}
            title={fear.title}
            onClick={() => { setSelectedMarker(fear) }}
          ></Marker>
        );
      })}
      {selectedMarker &&
        <InfoWindow
          pixelOffset={"0"}
          position={selectedMarker.coordinate}
          onCloseClick={() => { setSelectedMarker('') }}
        >
          <div className={styles.info}>
            <h1>{selectedMarker.title}</h1>
            <p>Description: {selectedMarker.description.split(' ').slice(0, 10).join(" ") + "..."}</p>
            {user ? <Link className={simpleStyles.simple} to={`/fears/${selectedMarker.id}`} >Details</Link> : <Link className={simpleStyles.simple} to={`/login`} >Details</Link>}
          </div>
        </InfoWindow>}
    </GoogleMap>
  );
}