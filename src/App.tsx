import './App.css';
import {  Route, Routes} from 'react-router-dom';
import { Header } from './components/header/header.component';
import { HomePage } from './pages/homepage/homepage.component';
import {Footer} from './components/footer/footer.component';
import { BreweryDetail } from './components/brewery-detail/brewery-detail.component';

// Display Header, Footer and Homepage. Routes for Homepage and Details pages
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
            <Route path='/*' element={<HomePage/>} />
            <Route path='/detail/:id' element={<BreweryDetail  />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
