// dependency imports
import React, { Fragment, useEffect, useState } from "react";
import PropTypes from 'prop-types';

// component imports
import LandingSlider from "@components/UI/LandingUI/LandingSlider/LandingSlider";
import LandingTeamCard from "@components/UI/LandingUI/LanldingTeamCard/LandingTeamCard";

// Sense landing: Our team section
const OurTeam = ({id}) => {
  // local created states
  const [sliderItems, setSliderItems] = useState([
    [
      <LandingTeamCard imageLink='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>, 
      <LandingTeamCard imageLink='http://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'/>, 
      <LandingTeamCard imageLink='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>,
    ],
    [
      <LandingTeamCard imageLink='http://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'/>, 
      <LandingTeamCard imageLink='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>, 
      <LandingTeamCard imageLink='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
    ],
    [
      <LandingTeamCard imageLink='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>,
      <LandingTeamCard imageLink='http://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'/>, 
      <LandingTeamCard imageLink='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>, 
    ],
  ]);

  // side effects
  useEffect(() => {
    decideScreenSlideAppearencr();
  }, []);

  // slider item appearence chage based on screen size
  const decideScreenSlideAppearencr = () => {
    let temp = sliderItems;
    if(screen.width < 900){
      const smallScreenSliderObject = [];
      /**
       *  outer loop
       *  travers through outer loop
       */
      sliderItems.map((item) => {
        item.map(i => {
          smallScreenSliderObject.push(i);
        });
      });
      setSliderItems(smallScreenSliderObject);
    }else{
      setSliderItems(temp);
    }
  }

  // jsx content
  return (
    <Fragment>
      <div id={id} className="sense-main--teams">
        {/* Section header */}
        <div className="section-header">
          <h3 className="main-heading"> Meet Our Team</h3>
          <p className="sub-heading">
            Et harum quidem rerum facilis est et expedita distinctio nam libero
            tempore cum soluta nobis eligendi cumque.
          </p>
        </div>

        {/* Teams slider */}
        <div className="teams-slider-area">
          <LandingSlider sliderItems={sliderItems} />
        </div>
      </div>
    </Fragment>
  );
};


// props validation
OurTeam.propTypes = {
  id: PropTypes.string.isRequired
}

export default OurTeam;
