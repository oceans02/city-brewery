import { FC } from 'react';
import './brewery-list.styles.scss';

import { IBrewery as IBrewProps } from '../brewery-overview/brewery-overview.component';
import { useNavigate } from 'react-router';

// Display each brewery
export const BreweryList:FC<IBrewProps> = (brewery) =>{
    let navigate = useNavigate();
    const {id, name, brewery_type,street, city, state, postal_code ,website_url} = brewery;

    return(
        <div className="brewery-list"
                onClick={() => navigate(`/detail/${id}`, {state:brewery})} >
            <div className="title">{name}</div>
            <div className="address">
                    <span>{street} {city}</span>
                <p>{state}, {postal_code}</p>
            </div>
            <small className="web-url">{website_url}</small>
            <div className="brew-type">{brewery_type}</div>
        </div>
    )
}