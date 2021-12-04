import { useState, useEffect, FC } from 'react';
import './brewery-overview.styles.scss';

import axios from 'axios';
import { BreweryList } from '../brewery-list/brewery-list.component';

export interface IBrewery {
    address_2?: string | null,
    address_3?: string | null,
    brewery_type?: string,
    city?: string,
    country?: string,
    county_province?: string | null,
    created_at?: string,
    id?: string,
    latitude?: string | null,
    longitude?: string | null,
    name?: string,
    phone?: string,
    postal_code?: string,
    state?: string,
    street?: string,
    updated_at?: string,
    website_url?: string
}

export const BreweryOverview:FC<IBrewery> = () => {
    const [brewery, setBrewery] = useState<IBrewery[]>([]);

    // Fetch data from API and add to the state.
    useEffect(() => {
        axios.get('https://api.openbrewerydb.org/breweries?by_city=harrisburg')
        .then(res => setBrewery(res.data))
        .catch(err => console.log(err))
    },[]);

    return (
        // Loop through the breweries to list them
        <div className="brewery-overview">
            {brewery.map((brewery) => (
                <BreweryList key={brewery.id} {...brewery} />
            ))}
        </div>
    )
}