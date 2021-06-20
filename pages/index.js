// @ts-nocheck
import React, { Fragment, useEffect } from "react";

// component imports
import SenseMainLayout from "@layouts/SenseMainLayout";
import Showcase from "@components/Application/Landing/Showcase/Showcase";
import Services from "@components/Application/Landing/Services/Services";
import CreativeFeature1 from "@components/Application/Landing/CreativeFeature/CreativeFeature1";
import LatestNews from "@components/Application/Landing/LatestNews/LatestNews";
import OurTeam from "@components/Application/Landing/OurTeam/OurTeam";
import ContactUs from "@components/Application/Landing/ContactUs/ContactUs";

// Sense landing page
const Home = () => {
  // local states
  const navItemsCenter = [
    {label :"About us", isDropdown:false, href:'#'},
    {label :"Services", isDropdown:false, href:'#services'},
    {label :"Features", isDropdown:false, href:'#creativeFeature'},
    {label :"Blogs", isDropdown:false, href:'#blogs'},
    {label :"Teams", isDropdown:false, href:'#teams'},
    {label :"Contact", isDropdown:false, href:'#contact'},
  ];
  const navItemsRight = [
    {label :"Therapist?", isDropdown:true, href:'#', menuItems:[
      {menuLabel: 'Sign in', menuLink: '/therapist/auth/identity?page=sign-in'},
      {menuLabel: 'Join us', menuLink: '/therapist/auth/identity?page=sign-up'},
    ]}
  ];

  // jsx contents
  return (
    <Fragment>
      {/* Main sense landing page layout */}
      <SenseMainLayout pageTitle="Sense" navItemsCenter={navItemsCenter} navItemsRight={navItemsRight}>
        {/* Landing showcase */}
        <Showcase/>
         
        {/* Services / features */}
        <Services id='services'/>

        {/* Creative feature section 1 */}
        <CreativeFeature1 id='creativeFeature'/>
        
        {/* Blog carousel */}
        <LatestNews id='blogs'/>

        {/* Our team */}
        <OurTeam id='teams'/>

        {/* Contact */}
        <ContactUs id='contact'/>

      </SenseMainLayout>
    </Fragment>
  );
};

export default Home;
