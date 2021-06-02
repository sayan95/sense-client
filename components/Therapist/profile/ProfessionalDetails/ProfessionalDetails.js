// dependency imports 
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// component imports
import TextField from '../../../UI/TextField/TextField';
import SelectInput from '../../../UI/SelectInput/SelectInput';
import Button from '../../../UI/Button/Button';

// professional details component
const ProfessionalDetails = ({inputAction, selectAction}) => {
    // states from store
    const therapistServiceData = useSelector(state => state.therapistService);
    const error = useSelector(state => state.therapistAuth.error);

    // input fields' list
    const inputs = [
        {
            inputType: 'select',
            name: 'age_group',
            label: "Age group",
            isMulti: true ,
            options: therapistServiceData.ageGroups,
            placeholder: "Select age group",
        },
        {
            inputType : 'select',
            name:"language_proficiency",
            label:"Language proficiency",
            isMulti:true,
            options:therapistServiceData.languages,
            placeholder:"Select language",
        },
        {
            inputType:'select',
            name:'education', 
            label:"Education",
            isMulti:true ,
            options: therapistServiceData.degrees,
            placeholder:"Select education",
        },
        {
            inputType: 'select',
            name: 'therapist_profile',
            label:"Profile",
            isMulti:true ,
            options: therapistServiceData.therapyProfiles,
            placeholder:"Select profile",
        },
        {
            inputType: 'select',
            name: 'experties',
            label:"Experties",
            isMulti:true ,
            options: therapistServiceData.experties,
            placeholder:"Select your experties",
        },
        {
            inputType: 'select',
            name: 'spectrum_specialization',
            label:"Spectrum specialization",
            isMulti:true ,
            options: therapistServiceData.specializations,
            placeholder:"Select spectrum...",
        },
    ];

    return (
        <Fragment>
            <div className='personal-details--header'>
                <h3>Professional details</h3>
                <hr/>
            </div>
            <div className='personal-details--form-container'>
                <div className='form-container-row'>
                    {inputs && inputs.map( (input, index) => {
                        return (
                            input.inputType === 'textField'
                            ?<TextField key={index} type='text' name={input.name} label={input.label} placeholder={input.placeholder} event={inputAction} error={error && error[input.name]}/>
                            :<SelectInput key={index} name={input.name} id={index} isMulti={input.isMulti} label={input.label} options={input.options} placeholder={input.placeholder} error={error && error[input.name]} onChange={selectAction}/>
                        ); 
                    })}
                </div>
            </div>
        </Fragment>
    )
}


// props validation
ProfessionalDetails.propTypes = {
    inputAction: PropTypes.func,
    selectAction: PropTypes.func,
}

export default ProfessionalDetails;
