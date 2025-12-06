import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Gamechangers from "./Pages/Gamechangers/Gamechangers";
import JoinUs from "./Pages/JoinUs/JoinUs";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import RaiseIt from "./components/Raiseit/Raiseit";
import ImpactStories from "./Pages/ImpactStories/ImpactStories";
import Missions from "./components/About/Missions/Missions";
import AgricultureSupport from "./components/Stripbar/Striplinks/AgricultureSupport/AgricultureSupport";
import CommunityNews from "./components/Stripbar/Striplinks/CommunityNews/CommunityNews"; 
import CulturalActivities from "./components/Stripbar/Striplinks/CulturalActivities/CulturalActivities";
import DisasterRelief from "./components/Stripbar/Striplinks/DisasterRelief/DisasterRelief";
import Donations from "./components/Stripbar/Striplinks/Donations/Donations";
import Education from "./components/Stripbar/Striplinks/Education/Education";
import EmergencyServices from "./components/Stripbar/Striplinks/EmergencyServices/EmergencyServices";
import Environment from "./components/Stripbar/Striplinks/Environment/Environment";
import EventsCamps from "./components/Stripbar/Striplinks/EventsCamps/EventsCamps";
import FAQS from "./components/Stripbar/Striplinks/FAQs/FAQs";
import FinancialServices from "./components/Stripbar/Striplinks/FinancialServices/FinancialServices";
import GovernmentSchemes from "./components/Stripbar/Striplinks/GovernmentSchemes/GovernmentSchemes";
import HealthCare from "./components/Stripbar/Striplinks/Healthcare/Healthcare";
import HousingShelter from "./components/Stripbar/Striplinks/HousingShelter/HousingShelter";
import JobOpportunities from "./components/Stripbar/Striplinks/JobOpportunities/JobOpportunities";
import LegalAid from "./components/Stripbar/Striplinks/LegalAid/LegalAid";
import LocalBusiness from "./components/Stripbar/Striplinks/LocalBusiness/LocalBusiness";
import LocalNews from "./components/Stripbar/Striplinks/LocalNews/LocalNews";
import PublicTransport from "./components/Stripbar/Striplinks/PublicTransport/PublicTransport";
import RoadInfrastructure from "./components/Stripbar/Striplinks/RoadInfrastructure/RoadInfrastructure";
import SafetySecurity from "./components/Stripbar/Striplinks/SafetySecurity/SafetySecurity";
import SkillTraining from "./components/Stripbar/Striplinks/SkillTraining/SkillTraining";
import SportsRecreation from "./components/Stripbar/Striplinks/SportsRecreation/SportsRecreation";
import Volunteer from "./components/Stripbar/Striplinks/Volunteer/Volunteer";
import WaterSanitation from "./components/Stripbar/Striplinks/Watersanitation/Watersanitation";
import WomenEmpowerment from "./components/Stripbar/Striplinks/Womenempowerment/Womenempowerment";
import YouthPrograms from "./components/Stripbar/Striplinks/Youthprograms/YouthPrograms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gamechangers" element={<Gamechangers />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/raiseit" element={<RaiseIt />} />
        <Route path="/impact-stories" element={<ImpactStories />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/agriculture support" element={<AgricultureSupport />} />
        <Route path="/community news" element={<CommunityNews />} />
        <Route path="/cultural activities" element={<CulturalActivities />} />
        <Route path="/disaster relief" element={<DisasterRelief />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/education" element={<Education />} />
        <Route path="/emergency services" element={<EmergencyServices />} />
        <Route path="/environment" element={<Environment />} />
        <Route path="/events & camps" element={<EventsCamps />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/financial services" element={<FinancialServices />} /> 
        <Route path="/government schemes" element={<GovernmentSchemes />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/housing & shelter" element={<HousingShelter />} />
        <Route path="/job opportunities" element={<JobOpportunities />} />
        <Route path="/legal aid" element={<LegalAid />} />
        <Route path="/local business" element={<LocalBusiness />} />
        <Route path="/local news" element={<LocalNews />} />
        <Route path="/public transport" element={<PublicTransport />} />
        <Route path="/road & infrastructure" element={<RoadInfrastructure />} />
        <Route path="/safety & security" element={<SafetySecurity />} />
        <Route path="/skill training" element={<SkillTraining />} />
        <Route path="/sports & recreation" element={<SportsRecreation />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/water & sanitation" element={<WaterSanitation />} />
        <Route path="/women empowerment" element={<WomenEmpowerment />} />
        <Route path="/youth programs" element={<YouthPrograms />} />
      </Routes>
    </Router>
  );
}

export default App;
