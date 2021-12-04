import { FC } from 'react';
import './brewery-list.styles.scss';

import { IBrewery as IBrewProps } from '../brewery-overview/brewery-overview.component';
import { useNavigate } from 'react-router';

// Display each brewery
export const BreweryList:FC<IBrewProps> = (brewery) =>{
    let navigate = useNavigate();
    const {id, name, brewery_type,street, city, state, postal_code ,website_url} = brewery;

    return(
        <div className="brewery-list-overview">
            <div className="brewery-list"
                onClick={() => navigate(`/detail/${id}`, {state:brewery})}
                title="Click for Brewery Detail Page">
                <div className="title">{name}</div>
                <div className="address">
                        <span>{street} {city}</span>
                        <p>{state}, {postal_code}</p>
                </div>
                <div className="brew-type">{brewery_type}</div>
            </div>
            <div className="website">
                <a href={`${website_url}`} title="Go to website">
                    <small className="web-url">{website_url}</small>
                </a>
            </div>
            <button className="custom-button" onClick={() => navigate(`/detail/${id}`, {state:brewery})} title="Go to Brewery Detail Page">Detail</button>
        </div>
    )
}