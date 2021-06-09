// dependency imports
import React, { Fragment, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {arrayResolver, appendCommas} from '../../../lib/formatter';
import * as appRedux from '../../../redux/application/index';
import * as therpistAuthRedux from '../../../redux/therapist/index';

// component imports
import {withAuth} from '../../../components/Therapist/identity/HOC/withAuth';
import TherapistLayout from '../../../layouts/TherapistLayout';
import Navbar from '../../../components/UI/Navbar/Navbar';
import PersonalDetails  from '../../../components/Therapist/profile/PersonalDetails/PersonalDetails';
import Button from '../../../components/UI/Button/Button';
import {ModalFooter, ModalBody} from '../../../components/UI/Modal/Modal';

// dynamic component imports
const Loader = dynamic(() => import('../../../components/UI/Loader/Loader'));
const Progressbar = dynamic(() => import('../../../components/UI/Progressbar/Progressbar'));
const ProfessionalDetails = dynamic(() => import('../../../components/Therapist/profile/ProfessionalDetails/ProfessionalDetails'));
const Modal = dynamic(() => import('../../../components/UI/Modal/Modal'));

// create therapist profile page
const Create = () => {
    // dependencies
    const dispatch = useDispatch();
    const router = useRouter();
    const {email} = router.query;

    // local states
    const [openModal, setOpenModal] = useState(false);                 
    const [personalValid, setPersonalValid] = useState(false);    
    const [professionalValid, setProfessionalValid] = useState(false);
    const [form, setForm] = useState({
        personal:{
            username: '',
            firstname: '',
            lastname: '',
            phone: '',
            gender: '',
        },
        professional:{
            language_proficiency : '',
            education: '',
            therapist_profile: '',
            experties: '',
            spectrum_specialization: '',
            age_group: ''
        }
    });
    
    // state from store
    const pageLoading = useSelector(state => state.app.pageLoading);
    const isLoading = useSelector(state => state.therapistAuth.loading);
    const isLoggedIn = useSelector(state => state.therapistAuth.isLoggedIn);
    const therapistServiceData  = useSelector(state => state.therapistService);
    const authAlertType = useSelector(state => state.therapistAuth.alertType);

    // sideEffcets
    useEffect(() => {
        // load therpist service data
        loadTherapistServiceData();
        //check loggedin status
        if(!isLoggedIn){
            dispatch(appRedux.actions.setPageLoading(true));
            router.push('/therapist/auth/identity?page=sign-in');
        }else{
            dispatch(appRedux.actions.setPageLoading(false));
        }
        // indicate if form filling is complete
        const personalIsValid = Object.values(form.personal).every(x => x!='' );
        const professionalIsValid = Object.values(form.professional).every(x => x!='');
        setPersonalValid(personalIsValid);
        setProfessionalValid(professionalIsValid);

        // performs different action based on different auth alert type
        if(authAlertType){
            switch(authAlertType){
                case 'profile-created':
                    dispatch(appRedux.actions.setPageLoading(true));
                    router.push('/therapist/profile/success');
                    break;
                default:
                    break;
            }
        }

    }, [form, isLoggedIn, authAlertType]);

    // load therapistServiceData
    const loadTherapistServiceData = async () => {
        const isLoaded = Object.values(therapistServiceData).every(x => x == ''); 
        if(isLoaded){
            await dispatch(appRedux.therapistServiceDataDispatcher.therapistServiceDataDispatcher());
        }
    }
    // input handler
    const inputHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            personal:{
                ...form.personal,
                [e.target.name]: e.target.value
            },
            // professional:{
            //     ...form.professional,
            //     [e.target.name]: e.target.value
            // }
        });
    }
    // select input handler
    const selecthandler = (value, action) => {
        if(action.name === 'gender'){
            setForm({
                ...form,
                personal: {
                    ...form.personal,
                    [action.name]: arrayResolver(value)
                }
            });
        }else{
            setForm({
                ...form,
                professional:{
                    ...form.professional,
                    [action.name] : arrayResolver(value)
                }
            });
        }
    }
    // toggle modal 
    const toggleModal = () => {
        setOpenModal(!openModal);
    }
    // confirm frm changes handler 
    const confirmChanges = (e) => {
        e.preventDefault();
        toggleModal();
    }
    // create profile handler 
    const createProfile = async (e) => {
        e.preventDefault();
        await dispatch(therpistAuthRedux.dispatchers.completeProfile(email, form));
        setOpenModal(false);
    }
    // logout handler for auth user
    const logoutHandler = () => {
        dispatch(therpistAuthRedux.dispatchers.logoutTherapist());
    }
    //nav items
    const navItems = [                     
        {label:'Logout', href:'#', action: logoutHandler}
    ];
    // jsx content
    return (
        pageLoading 
        ? <Loader/>
        :<Fragment>
            <TherapistLayout pageTitle='create profile'> 
                <section className='therapist-profile-create--container'>
                    {/* navbar */}
                    <Navbar navItems={navItems} page='therapist-create-profile'/>
                    {isLoading && <Progressbar/>}

                    {/* main content */}
                    <div className='main-content'>
                        {/* Progress bar */}
                        <div className='container'>
                            <div className='left-pane'>
                                <div className='box'>
                                    <div className='box-item'>
                                        {    personalValid
                                        ?   <span><i className='las la-check-circle text-green-300 animate__animated animate__flipInX animate__faster'></i></span>
                                        :   <span><i className='las la-info-circle text-red-300 animate__animated animate__flipInY animate__faster'></i></span>
                                        }
                                        <span>Personal details</span>
                                    </div>
                                    <div className='box-item'>
                                        {   professionalValid
                                        ?   <span><i className='las la-check-circle text-green-300 animate__animated animate__flipInX animate__faster'></i></span>
                                        :   <span><i className='las la-info-circle text-red-300 animate__animated animate__flipInY animate__faster'></i></span>
                                        }
                                        <span>Professional details</span>
                                    </div>
                                </div>
                                <div className='image-container'>
                                    <Image src='/assets/svgs/unlock.svg' alt='sense-therapist-profile-create' width='' height='300' layout='responsive' quality='100' priority={true}/>
                                </div>
                            </div>
                            <div className='right-pane'>  
                                <div>
                                    <div className='welcome-note'>
                                        <h3>Welcome, sharthakmallik@gmail.com</h3>
                                        <p>Please complete your profile</p>
                                    </div>
                                    <form onSubmit={confirmChanges} method='POST'>
                                        <PersonalDetails form={form} inputAction={inputHandler} selectAction={selecthandler}/>
                                        <ProfessionalDetails inputAction={inputHandler} selectAction={selecthandler}/>
                                        <Button type='submit' color='primary'>Create profile</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Modal */}
                <Modal close={toggleModal} visibility={openModal}>
                   <ModalBody>
                        <div className='modal-personal-details'>
                            <h3 className='modal-personal-details-heading'>Personal details <hr/></h3>
                            <div className='modal-personal-details-body'>
                                <div className='box'>
                                    {Object.keys(form.personal).map(key => {
                                        return (
                                            <div className='box-item'>
                                                <h4>{key}</h4>
                                                <p> {form.personal[key]} </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='modal-professional-details'>
                            <h3 className='modal-professional-details-heading'>Professional details<hr/></h3>
                            <div className='modal-personal-details-body'>
                                <div className='box'>
                                    {Object.keys(form.professional).map(key => {
                                        return (
                                            <div className='box-item'>
                                                <h4>{key.replace('_' ,' ')}</h4>
                                                <p> {appendCommas(form.professional[key])} </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div style={{ textAlign:'center' }}>
                            <Button type='button' event={createProfile} color='primary'>Submit</Button>
                        </div>
                    </ModalFooter>
                </Modal>
            </TherapistLayout>
        </Fragment>
    )
}

export default withAuth(Create);
