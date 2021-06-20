// dependency imports
import React, { Fragment, useEffect, useState } from 'react';

// Landing page slider component : Global component
const LandingSlider = ({sliderItems}) => {
    // local states
    const [x, setX] = useState(0);

    // on page load effect (side effects)
    useEffect(() => {
        displayNavActions();
    }, [x])

    // move slider left
    const moveLeft = () => {
        x === 0 ? null : setX(x + 100);
    }
    // move slider right
    const moveRight = () => {
        x === -100 * (sliderItems.length - 1) ? null : setX(x - 100);
    }

    // display nav buttons depending on current x position
    const displayNavActions = () => {
        let navToLeft = document.getElementById('navToLeft');
        let navToRight = document.getElementById('navToRight');
        if(x === 0){
            navToLeft.style.visibility = 'hidden';
        }else if(x === -100 * (sliderItems.length - 1)){
            navToRight.style.visibility = 'hidden';
        }else{
            navToLeft.style.visibility = 'visible';
            navToRight.style.visibility = 'visible';
        }
    }

    return (
        <Fragment>
            <div className='landing-slider'>
                {
                    sliderItems.map((item, index) => {
                        return (
                            <div key={index} className='landing-slider-item'style={{ transform:`translateX(${x}%)` }}>
                                <div className='slider-item-grid'>
                                    {   
                                        Array.isArray(item) 
                                        ?   item.map((element, i) => {
                                                return(
                                                    <div key={i} className='slider-item-grid-element'>
                                                        {element}
                                                    </div>
                                                );
                                            })
                                        :<div key={index} className='slider-item-grid-element'>
                                            {item}
                                        </div> 
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div id='navToLeft'><i className='las la-angle-left' onClick={moveLeft}></i></div>
                <div id='navToRight'><i className='las la-angle-right' onClick={moveRight}></i></div>
            </div>
        </Fragment>
    )
}

export default LandingSlider
