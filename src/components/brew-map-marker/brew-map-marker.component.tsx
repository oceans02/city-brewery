import { FC } from "react";
import './brew-map-marker.styles.scss';

interface IBrewMapProps {
    markerText: string,
    lat?: number,
    lng?: number
}

// Display the marker text on the map
export const BrewMapMarker:FC<IBrewMapProps>= ({markerText}) => {
    return(
    <div className="brew-map-marker">{markerText}</div>
)}