import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import './App.css';
// import Home from './pages/Home';
import SouthAfrica from './pages/South Africa/SouthAfrica';
import RahinoDetails from './pages/RahinoDetails';
import JapanHome from './pages/Japan/Japan';
import JapanGuide from './pages/Japan/JapanGuide';
import SumoExperience from './pages/Japan/SumoExperience';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Services from './pages/serviice/Services';
import ExpenditionCruising from './pages/ServiceExpendition/ExpenditionCruising';
import ImperialOdysseyHome from './pages/Japan-Quarter/ImperialOdysseyHome';
import PrivateAviation from './pages/ServicePrivantAviation/PrivateAviation';
import Itinerary from './pages/Itinerary/Itinerary';
import IndividualItenary from './pages/IndividualItenary/IndividualItenary';
import About from './pages/About/About';

import Experience from './pages/Experience/Experience';

import Calender from './pages/Calender/Calender';
import MarchCalender from './pages/Calender/MarchCalender';
import Accommodation from './pages/Accommodation/Accommodation';
import NewHome from './pages/NewHome/NewHome';
import ImperialOdyssey from './pages/Japan-Quarter/ImperialOdyssey';
import IndividualBlog from './pages/IndividualBlog/individualblog';
import EGCSignature from './pages/EGC/EGCSignature';
import Luxury from './pages/EGC/Luxury';
import ReviewsPage from './pages/Reviews/ReviewsPage';
import JetExpeditions from './pages/Service Jet Expeditions/JetExpeditions';
// import Accomodation from './pages/gaurav-accomodation/Accomodation';
import Destionation from './pages/Destionation/NewDestionation';
import DiscoverAsia from './pages/DiscoverAsia/DiscoverAsia';




function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <main>
          <ScrollToTop />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<NewHome/>} />
            {/* <Route path="/" element={<Contact />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:slug" element={<BlogSingle />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/individualblog" element={<IndividualBlog />} />
            {/* Add more routes as needed */}

            {/* routes for the south africa home */}
            <Route path="/destinations" element={<Destionation />} /> {/*this is new */}
            <Route path="/south-africa" element={<SouthAfrica />} />
            <Route path="/south-africa/rhino-tracking" element={<RahinoDetails />} />
            <Route path="/japan" element={<JapanHome />} />
            <Route path="/japan-guide" element={<JapanGuide />} />
            <Route path="/sumo-guide" element={<SumoExperience />} />
            <Route path="/discover-asia" element={<DiscoverAsia />} /> {/*this is new */}

        

            {/* routes for the  services */}
            <Route path="/services" element={<Services/>} />
            <Route path="/private-aviation" element={<PrivateAviation/>} />
            <Route path="/cruises" element={<ExpenditionCruising/>} />
            <Route path="/jet-expendation" element={<JetExpeditions/>} />

            {/* routes for the  imperial-odyssey */}
            {/* <Route path="/imperial-odyssey" element={<ImperialOdysseyHome/>} /> */}
            <Route path="/imperial-odyssey" element={<ImperialOdyssey/>} />

            {/* routes for the  itinerary */}
            <Route path="/itinerary" element={<Itinerary/>} />
            <Route path="/itinerary/:id" element={<IndividualItenary/>} />  {/*this is new*/}

            {/* routes for the  about */}
            <Route path="/about" element={<About/>} />

            {/* routes for the  about */}
            <Route path="/experiences" element={<Experience/>} />


            <Route path="/calender" element={<Calender/>} />
            <Route path="/calender/march" element={<MarchCalender/>} />

            {/* <Route path="/accommodation" element={<Accomodation/>} /> */}
            <Route path="/accommodation" element={<Accommodation/>} />

            <Route path="/egc-signature" element={<EGCSignature/>} />
            <Route path="/luxury-group-holiday" element={<Luxury/>} />

            <Route path="/reviews" element={<ReviewsPage/>} />
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
