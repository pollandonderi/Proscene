import Navbar from "./components/Navbar";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import About from  './pages/About';
import Services from './pages/Services';
import Sectors from './pages/Sectors';
import Casestudies from './pages/Casestudies';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Solutions from './pages/Solutions';
import AVIntegrations from "./pages/AVIntegration";
import CollaborationSolutions from "./pages/CollaborationSolutions";
import DigitalMedia from "./pages/DigitalMedia";
import AutomationSolutions from "./pages/AutomationSolutions";
import Interactivetechnology from "./pages/InteractiveTechnology";
import Corporate from "./pages/Corporate";
import Education from "./pages/Education";
import PublicSector from "./pages/PublicSector";
import Healthcare from "./pages/HealthCare";
import LegalCollaboration from "./pages/LegalCollaboration";
import UnifiedCommunications from "./pages/UnifiedCommunications";
import TrainingAndSupport from "./pages/Training&Support";
import OnSiteSupport from "./pages/onsiteSuopprt";
import EquipmentRepair from "./pages/EquipmentRepair";
import Leasing from "./pages/Leasing";
import VideoConferenceRental from "./pages/VideoConf";
import Panasonic from "./pages/Panasonic";
import Crestron from "./pages/Crestron";
import Optoma from "./pages/Optoma";
import Lifesize from "./pages/Lifesize";
import Barco from "./pages/Barco";
import Samsung from "./pages/Samsung";
import LG from "./pages/LG";
import Epson from "./pages/Epson";
import Avaya from "./pages/Avaya";
import Kramer from "./pages/Kramer";
import Vogel from "./pages/Vogel";
import Extron from "./pages/Extron";
import BookDemoPage from "./pages/BookDemoPage";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
    <Navbar />    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/sectors" element={<Sectors />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/case-studies" element={<Casestudies />} />      
      <Route path="/partners" element={<Partners />} />
      <Route path="/contact" element={<Contact />} />
      {/* Submenus pages */}
      <Route path="/avIntegration" element={<AVIntegrations />} />
      <Route path="/collaborationSolutions" element={<CollaborationSolutions />} />
      <Route path="/digitalMedia" element={<DigitalMedia />} />
      <Route path ="/automationSolutions" element ={<AutomationSolutions/>} />
      <Route path = "/interactiveTechnology" element = {<Interactivetechnology/>} />
      <Route path="/corporate" element = {<Corporate/>} />
      <Route path="/education" element = {<Education />} />
      <Route path="/publicSector" element = {<PublicSector />} />
      <Route path="/healthcare" element = {<Healthcare />} />
      <Route path="/legalCollaboration" element ={ <LegalCollaboration />} />
      <Route path ="/unifiedCommunications" element ={<UnifiedCommunications/>} />
      <Route path="/trainingAndSupport" element ={ <TrainingAndSupport/>} />
      <Route path="/onSiteSupport" element = {<OnSiteSupport/>} />
      <Route path="/equipmentRepair" element = {<EquipmentRepair/>} />
      <Route path="/leasing" element = {<Leasing/>} />
      <Route path="/videoConferenceRental" element = {<VideoConferenceRental/>} />
      <Route path="/panasonic" element = {<Panasonic/>} />
      <Route path="/crestron" element = {<Crestron/>} />
      <Route path="/optoma" element = {<Optoma/>} />
      <Route path="/lifesize" element = {<Lifesize/>} />
      <Route path="/barco" element = {<Barco/>} />
      <Route path="/samsung" element = {<Samsung/>} />
      <Route path="/lg" element = {<LG/>} />
      <Route path="/epson" element ={<Epson/>} />
      <Route path="/avaya" element = {<Avaya/>} />
      <Route path="/kramer" element = {<Kramer/>} />
      <Route path="/vogel" element = {<Vogel/>} />
      <Route path="/extron" element = {<Extron/>} />
      <Route path="/bookDemo" element = {<BookDemoPage/>} /> 
      <Route path = "/support" element = {<Support/>} />
    </Routes>
    {/* <Footer /> */}
    </Router>        
  );
}

export default App;
