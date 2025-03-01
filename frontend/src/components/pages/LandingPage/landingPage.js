import React from 'react';
import './LandingPage.css'

import { Navbar ,Footer} from '../../layout';

import IntoScreen from "./IntroScreen/IntroScreen";
import AboutUs from './aboutus/aboutus';
import Companies from './companies/companies';
import UserType from "./UserType/UserType";

function LandingPage() {
  return (
    <div>
      <div className="landing-page">
      <Navbar />
      <IntoScreen />
      <UserType />
      <Companies />
      <AboutUs />
      <Footer />
    </div>
    </div>
  )
}

export default LandingPage
