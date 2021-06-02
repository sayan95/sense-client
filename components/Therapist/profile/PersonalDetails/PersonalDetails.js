// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// component imports
import TextField from '../../../UI/TextField/TextField';
import SelectInput from '../../../UI/SelectInput/SelectInput';
import Button from '../../../UI/Button/Button';

// input fields
const inputs = [
    {label: 'Username', name:'username', placeholder:'Select a username', inputType: 'textField'},
    {label: 'First name', name:'firstname', placeholder:'Enter firstname', inputType: 'textField'},
    {label: 'Last name', name:'lastname', placeholder:'Enter lastname', inputType: 'textField'},
    {label: 'Phone', name:'phone', placeholder:'Enter phone number', inputType: 'textField'},
    {label: 'Gender', name:'gender', placeholder:'Select gender', inputType: 'select', options: [{label:'Male', value: 'Male'}, {label:'Female', value: 'Female'}]},
];

// Personal details component
const PersonalDetails = ({inputAction, selectAction}) => {
    // state from store
    const error = useSelector(state => state.therapistAuth.error);

    // jsx content
    return (
        <Fragment>
            <div className='personal-details--header'>
                <h3>Personal details</h3>
                <hr/>
            </div>
            <div className='personal-details--form-container'>
                <div className='form-container-row'>
                    {inputs && inputs.map( (input, index) => {
                        return (
                        input.inputType === 'textField'?
                            <TextField key={index} type='text' name={input.name} label={input.label} placeholder={input.placeholder} event={inputAction} error={error && error[input.name]}/>:
                            <SelectInput key={index} name={input.name} id={index} label={input.label} options={input.options} placeholder={input.placeholder} error={error && error[input.name]} onChange={selectAction}/>
                        ); 
                    })}
                </div>
            </div>
        </Fragment>
    )
}

// props validation
PersonalDetails.propTypes = {
    selectAction: PropTypes.func.isRequired,
    inputAction: PropTypes.func.isRequired,
}

export default PersonalDetails;
