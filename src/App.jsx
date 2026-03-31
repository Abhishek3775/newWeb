// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';
// import BlogSingle from './pages/BlogSingle';
// import './App.css';
// // import Home from './pages/Home';
// import SouthAfrica from './pages/South Africa/SouthAfrica';
// import RahinoDetails from './pages/RahinoDetails';
// import JapanHome from './pages/Japan/Japan';
// import JapanGuide from './pages/Japan/JapanGuide';
// import SumoExperience from './pages/Japan/SumoExperience';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import Services from './pages/serviice/Services';
// import ExpenditionCruising from './pages/ServiceExpendition/ExpenditionCruising';
// import ImperialOdysseyHome from './pages/Japan-Quarter/ImperialOdysseyHome';
// import PrivateAviation from './pages/ServicePrivantAviation/PrivateAviation';
// import Itinerary from './pages/Itinerary/Itinerary';
// import IndividualItenary from './pages/IndividualItenary/IndividualItenary';
// import About from './pages/About/About';

// import Experience from './pages/Experience/Experience';

// import Calender from './pages/Calender/Calender';
// import MarchCalender from './pages/Calender/MarchCalender';
// import Accommodation from './pages/Accommodation/Accommodation';
// import NewHome from './pages/NewHome/NewHome';
// import ImperialOdyssey from './pages/Japan-Quarter/ImperialOdyssey';
// import IndividualBlog from './pages/IndividualBlog/individualblog';
// import EGCSignature from './pages/EGC/EGCSignature';
// import Luxury from './pages/EGC/Luxury';
// import ReviewsPage from './pages/Reviews/ReviewsPage';
// import JetExpeditions from './pages/Service Jet Expeditions/JetExpeditions';
// // import Accomodation from './pages/gaurav-accomodation/Accomodation';
// import Destionation from './pages/Destionation/NewDestionation';
// import DiscoverAsia from './pages/DiscoverAsia/DiscoverAsia';
// import NewContact from './pages/NewContact';




// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />

//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />

//         <main>
//           <ScrollToTop />
//           <Routes>
//             {/* <Route path="/" element={<Home />} /> */}
//             <Route path="/" element={<NewHome/>} />
//             {/* <Route path="/" element={<Contact />} /> */}
//             {/* <Route path="/contact" element={<Contact />} /> */}
//             <Route path="/contact" element={<NewContact/>} />
//             <Route path="/blog/:slug" element={<BlogSingle />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/individualblog" element={<IndividualBlog />} />
//             {/* Add more routes as needed */}

//             {/* routes for the south africa home */}
//             <Route path="/destinations" element={<Destionation />} /> {/*this is new */}
//             <Route path="/south-africa" element={<SouthAfrica />} />
//             <Route path="/south-africa/rhino-tracking" element={<RahinoDetails />} />
//             <Route path="/japan" element={<JapanHome />} />
//             <Route path="/japan-guide" element={<JapanGuide />} />
//             <Route path="/sumo-guide" element={<SumoExperience />} />
//             <Route path="/discover-asia" element={<DiscoverAsia />} /> {/*this is new */}

        

//             {/* routes for the  services */}
//             <Route path="/services" element={<Services/>} />
//             <Route path="/private-aviation" element={<PrivateAviation/>} />
//             <Route path="/cruises" element={<ExpenditionCruising/>} />
//             <Route path="/jet-expendation" element={<JetExpeditions/>} />

//             {/* routes for the  imperial-odyssey */}
//             {/* <Route path="/imperial-odyssey" element={<ImperialOdysseyHome/>} /> */}
//             <Route path="/imperial-odyssey" element={<ImperialOdyssey/>} />

//             {/* routes for the  itinerary */}
//             <Route path="/itinerary" element={<Itinerary/>} />
//             <Route path="/itinerary/:id" element={<IndividualItenary/>} />  {/*this is new*/}

//             {/* routes for the  about */}
//             <Route path="/about" element={<About/>} />

//             {/* routes for the  about */}
//             <Route path="/experiences" element={<Experience/>} />


//             <Route path="/calender" element={<Calender/>} />
//             <Route path="/calender/march" element={<MarchCalender/>} />

//             {/* <Route path="/accommodation" element={<Accomodation/>} /> */}
//             <Route path="/accommodation" element={<Accommodation/>} />

//             <Route path="/egc-signature" element={<EGCSignature/>} />
//             <Route path="/luxury-group-holiday" element={<Luxury/>} />

//             <Route path="/reviews" element={<ReviewsPage/>} />
            
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Loader from './components/Loader/Loader';
import './App.css';

// ─── Lazy-loaded pages ────────────────────────────────────────────────────────
const NewHome             = lazy(() => import('./pages/NewHome/NewHome'));
const NewContact          = lazy(() => import('./pages/NewContact'));
const Blog                = lazy(() => import('./pages/Blog'));
const BlogSingle          = lazy(() => import('./pages/BlogSingle'));
const IndividualBlog      = lazy(() => import('./pages/IndividualBlog/individualblog'));

const Destionation        = lazy(() => import('./pages/Destionation/NewDestionation'));
const SouthAfrica         = lazy(() => import('./pages/South Africa/SouthAfrica'));
const RahinoDetails       = lazy(() => import('./pages/RahinoDetails'));
const JapanHome           = lazy(() => import('./pages/Japan/Japan'));
const JapanGuide          = lazy(() => import('./pages/Japan/JapanGuide'));
const SumoExperience      = lazy(() => import('./pages/Japan/SumoExperience'));
const DiscoverAsia        = lazy(() => import('./pages/DiscoverAsia/DiscoverAsia'));

const Services            = lazy(() => import('./pages/serviice/Services'));
const PrivateAviation     = lazy(() => import('./pages/ServicePrivantAviation/PrivateAviation'));
const ExpenditionCruising = lazy(() => import('./pages/ServiceExpendition/ExpenditionCruising'));
const JetExpeditions      = lazy(() => import('./pages/Service Jet Expeditions/JetExpeditions'));

const ImperialOdyssey     = lazy(() => import('./pages/Japan-Quarter/ImperialOdyssey'));

const Itinerary           = lazy(() => import('./pages/Itinerary/Itinerary'));
const IndividualItenary   = lazy(() => import('./pages/IndividualItenary/IndividualItenary'));

const About               = lazy(() => import('./pages/About/About'));
const Experience          = lazy(() => import('./pages/Experience/Experience'));

const Calender            = lazy(() => import('./pages/Calender/Calender'));
const MarchCalender       = lazy(() => import('./pages/Calender/MarchCalender'));

const Accommodation       = lazy(() => import('./pages/Accommodation/Accommodation'));

const EGCSignature        = lazy(() => import('./pages/EGC/EGCSignature'));
const Luxury              = lazy(() => import('./pages/EGC/Luxury'));

const ReviewsPage         = lazy(() => import('./pages/Reviews/ReviewsPage'));
// ─────────────────────────────────────────────────────────────────────────────

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Minimum display time so the loader doesn't flash too briefly
    const MIN_DISPLAY_MS = 2000;
    const startTime = Date.now();

    const hide = () => {
      const elapsed = Date.now() - startTime;
      const remaining = MIN_DISPLAY_MS - elapsed;

      if (remaining > 0) {
        setTimeout(() => setIsLoaded(true), remaining);
      } else {
        setIsLoaded(true);
      }
    };

    // document.readyState === 'complete' means window.load already fired
    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
      // Safety net: force-hide after 6s no matter what
      const fallback = setTimeout(() => setIsLoaded(true), 6000);

      return () => {
        window.removeEventListener('load', hide);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <Router>
      <Loader isLoaded={isLoaded} />

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

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/"                            element={<NewHome />} />
              <Route path="/contact"                     element={<NewContact />} />
              <Route path="/blog/:slug"                  element={<BlogSingle />} />
              <Route path="/blog"                        element={<Blog />} />
              <Route path="/individualblog"              element={<IndividualBlog />} />

              <Route path="/destinations"                element={<Destionation />} />
              <Route path="/south-africa"                element={<SouthAfrica />} />
              <Route path="/south-africa/rhino-tracking" element={<RahinoDetails />} />
              <Route path="/japan"                       element={<JapanHome />} />
              <Route path="/japan-guide"                 element={<JapanGuide />} />
              <Route path="/sumo-guide"                  element={<SumoExperience />} />
              <Route path="/discover-asia"               element={<DiscoverAsia />} />

              <Route path="/services"                    element={<Services />} />
              <Route path="/private-aviation"            element={<PrivateAviation />} />
              <Route path="/cruises"                     element={<ExpenditionCruising />} />
              <Route path="/jet-expendations"             element={<JetExpeditions />} />

              <Route path="/imperial-odyssey"            element={<ImperialOdyssey />} />

              <Route path="/itinerary"                   element={<Itinerary />} />
              <Route path="/itinerary/:id"               element={<IndividualItenary />} />

              <Route path="/about"                       element={<About />} />
              <Route path="/experiences"                 element={<Experience />} />

              <Route path="/calender"                    element={<Calender />} />
              <Route path="/calender/march"              element={<MarchCalender />} />

              <Route path="/accommodation"               element={<Accommodation />} />

              <Route path="/egc-signature"               element={<EGCSignature />} />
              <Route path="/luxury-group-holiday"        element={<Luxury />} />

              <Route path="/reviews"                     element={<ReviewsPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;