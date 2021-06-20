// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// component imports
import LandingNewsCard from '@components/UI/LandingUI/LandingNewsCard/LandingNewsCard';
import LandingNewsCardHeader from '@components/UI/LandingUI/LandingNewsCard/LandingNewsCardHeader';
import LandingNewsCardBody from '@components/UI/LandingUI/LandingNewsCard/LandingNewsCardBody';
import LandingNewsCardFooter from '@components/UI/LandingUI/LandingNewsCard/LandingNewsCardFooter';
import LandingButton from '@components/UI/LandingUI/LandingButton/LandingButton';

// Sense landing : Latest news component
const LatestNews = ({id}) => {
    return (
        <Fragment>
            <div id={id} className='sense-main--latest-news'>
                {/* Section header */}
                <div className='section-header'>
                    <h3 className='main-heading'>Latest News</h3>
                    <p className='sub-heading'>Et harum quidem rerum facilis est et expedita distinctio 
                        nam libero tempore cum soluta nobis eligendi cumque.
                    </p>
                </div>

                {/* LatestNews container */}
                <div className='news-grid'>
                    <div className='news-item item-1'>
                        <LandingNewsCard>
                            <LandingNewsCardHeader imageLink='https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'/>
                            <LandingNewsCardBody>
                                <div className='basic-info-panel'>
                                    <span><i className="las la-calendar"></i> April 10 2021</span>
                                    <span><i className='las la-user'></i> Admin</span>
                                </div>
                                <div className='news-description'>
                                    <p>Integer ante arcu accumsan a consectetuer eget posuere mauris 
                                        praesent adipiscing phasellus ullamcorper ipsum rutrum punc...
                                    </p>
                                </div>
                            </LandingNewsCardBody>
                            <LandingNewsCardFooter>
                                <div className='news-details-link'>
                                    <Link href='#'>
                                        <h5>
                                            <span>Learn More</span> 
                                            <i className="las la-long-arrow-alt-right"></i>
                                        </h5>   
                                    </Link>
                                </div>
                            </LandingNewsCardFooter>
                        </LandingNewsCard>
                    </div>
                    <div className='news-item item-1'>
                        <LandingNewsCard>
                            <LandingNewsCardHeader imageLink='https://www.traveloffpath.com/wp-content/uploads/2021/05/12-Most-Instagram-Worthy-Destinations-for-2021.jpg'/>
                            <LandingNewsCardBody>
                                <div className='basic-info-panel'>
                                    <span><i className="las la-calendar"></i> April 10 2021</span>
                                    <span><i className='las la-user'></i> Admin</span>
                                </div>
                                <div className='news-description'>
                                    <p>Integer ante arcu accumsan a consectetuer eget posuere mauris 
                                        praesent adipiscing phasellus ullamcorper ipsum rutrum punc...
                                    </p>
                                </div>
                            </LandingNewsCardBody>
                            <LandingNewsCardFooter>
                                <div className='news-details-link'>
                                    <Link href='#'>
                                        <h5>
                                            <span>Learn More</span> 
                                            <i className="las la-long-arrow-alt-right"></i>
                                        </h5>   
                                    </Link>
                                </div>
                            </LandingNewsCardFooter>
                        </LandingNewsCard>
                    </div>
                    <div className='news-item item-1'>
                        <LandingNewsCard>
                            <LandingNewsCardHeader imageLink='https://images.hdqwalls.com/download/travel-hd-1366x768.jpg'/>
                            <LandingNewsCardBody>
                                <div className='basic-info-panel'>
                                    <span><i className="las la-calendar"></i> April 10 2021</span>
                                    <span><i className='las la-user'></i> Admin</span>
                                </div>
                                <div className='news-description'>
                                    <p>Integer ante arcu accumsan a consectetuer eget posuere mauris 
                                        praesent adipiscing phasellus ullamcorper ipsum rutrum punc...
                                    </p>
                                </div>
                            </LandingNewsCardBody>
                            <LandingNewsCardFooter>
                                <div className='news-details-link'>
                                    <Link href='#'>
                                        <h5>
                                            <span>Learn More</span> 
                                            <i className="las la-long-arrow-alt-right"></i>
                                        </h5>   
                                    </Link>
                                </div>
                            </LandingNewsCardFooter>
                        </LandingNewsCard>
                    </div>  
                </div> 
            
                {/* show more button group */}
                <div className='button-group'>
                    <LandingButton className='landing-button'>
                        Show More
                    </LandingButton>
                </div>
            </div>
        </Fragment>
    )
}

// props validation
LatestNews.propTypes = {
    id: PropTypes.string.isRequired
}

export default LatestNews
