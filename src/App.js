import logo from './logo.svg';
import './App.css';
import Home from './Files/home';
import { Routes, Route } from 'react-router-dom';
import Trophy from './Files/trophy';
import NavBar from './Navbar';
import Team from './Files/Team';
import Ranking from './Files/Ranking';
import Champion from './Files/Champion';
import OdiBat from './Files/OdiBat';
import Classic from './Files/Classic';
import Test from './Files/Test';
import T20 from './Files/T20';
import OdiBowl from './Files/OdiBowl';
import OdiAllrounder from './Files/OdiAllrounder';
import News from './Files/News';
import CNews from './Files/CwcNews';
import Shop from './Files/Shop';
import Globalshop from './Files/GlobalShop';
import Caps from './Files/Caps';
import Hoodies from './Files/Pulloverhoodies';
import Longsleeve from './Files/longsleeves';
import Polos from './Files/Polos';
import GlobalTshirt from './Files/tshirtsglobal';
import RankMain from './Files/RankMain';
import Footer from './Files/Footer';
import RankTest from './Files/RankTest';
import TestBowl from './Files/TestBowl';
import TestBat from './Files/TestBat';
import TestAllrounder from './Files/TestAllrounder';
import T20Bat from './Files/T20Bat';
import RankT20 from './Files/RankT20';
import T20Bowl from './Files/T20Bowl';
import T20all from './Files/T20allrounder';

function App() {
  return (
    <>
    <NavBar />
     <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/News" element={<News />} />
            <Route path="/CNews" element={<CNews />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Caps" element={<Caps />} />
            <Route path="/Longsleeve" element={<Longsleeve />} />
            <Route path="/Hoodies" element={<Hoodies />} />
            <Route path="/Polos" element={<Polos />} />
            <Route path="/GlobalTshirt" element={<GlobalTshirt />} />
            <Route path="/Globalshop" element={<Globalshop />} />
            <Route path='/Ranking' element={<Ranking />} />
            <Route path='/RankTest' element={<RankTest />} />
            <Route path='/RankMain' element={<RankMain />} />
            <Route path='/OdiBat' element={<OdiBat />} />
            <Route path='/Test' element={<Test />} />
            <Route path='/T20' element={<T20 />} />
            <Route path='/OdiBowl' element={<OdiBowl />} />
            <Route path='/OdiAllrounder' element={<OdiAllrounder />} />
            <Route path='/Champion' element={<Champion />} />
            <Route path='/Classic' element={<Classic />}   />
            <Route path='/Trophy' element={<Trophy />} />
            <Route path='/Team' element={<Team />} />
            <Route path='/TestBowl' element={<TestBowl />} />
            <Route path='/TestBat' element={<TestBat />} />
            <Route path='/RankT20' element={<RankT20 />} />
            <Route path='/T20Bat' element={<T20Bat />} />
            <Route path='/T20Bowl' element={<T20Bowl />} />
            <Route path="/T20all" element={<T20all />} />
            <Route path='/TestAllrounder' element={<TestAllrounder />} />
            <Route path='/Footer' element={<Footer />}/>
         </Routes>

    
    </>
    
  );
}

export default App;
