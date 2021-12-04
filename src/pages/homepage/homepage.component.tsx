import './homepage.styles.scss';
import { BreweryOverview } from '../../components/brewery-overview/brewery-overview.component';

// Display the Brewery Overview component on homepage
export const HomePage = () => (
    <div className="homepage">
        <BreweryOverview />
    </div>
)