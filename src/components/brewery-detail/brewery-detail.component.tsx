import { FC, useEffect, useState } from 'react';
import './brewery-detail.styles.scss';

import GoogleMapReact from 'google-map-react';
import { useLocation } from 'react-router';

import { IBrewery as IBrewProps } from '../brewery-overview/brewery-overview.component';
import { BrewMapMarker } from '../brew-map-marker/brew-map-marker.component';


export const BreweryDetail:FC<IBrewProps> = () => {
    let location = useLocation();
    const {name, street, city, state, postal_code,latitude,longitude } = location.state;
    const [breweryLocation, setBreweryLocation] = useState<IBrewProps>(name);

    // store name of the brewery in state to render maps based on the brewery clicked
    useEffect(() => {
        setBreweryLocation(name);
    },[name])

    return(
        <div className="brewery-detail">
            <div className="panel-left">
                <div className="brew-name">{name}</div>
                <div className="brew-address">
                    <span>{street}</span>
                    <p>{city} {state}, {postal_code}</p>
                </div>
            </div>
            <div className="panel-right" >
                <div className="b-map">
                <GoogleMapReact 
                    bootstrapURLKeys={{ key:`${process.env.REACT_APP_API_KEY}` }}
                    defaultCenter={{lat: 40.259590, lng: -76.8818663}} 
                    defaultZoom={11}>
                        {breweryLocation && <BrewMapMarker markerText="BREW" lat={latitude} lng={longitude} />}
                </GoogleMapReact>
                </div>
            </div>         
        </div>
        )
    }