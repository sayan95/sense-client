// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// component imports
import Select from 'react-select/creatable';



// Select input component
const SelectInput =({
    isMulti, isSearchable, options, onChange, onChangeInput,
    placeholder, borderColor, bgColor, label,
    name, error, id, value
}) => {

    // custom style object
    const customStyles = {
        menu : (style) => ({
            ...style,
            zIndex:999
        }),
        control: (styles, { isFocused }) => {
            return {
                ...styles,
                border: isFocused && error ? 
                '1px solid #EF4444' 
                : isFocused && !error 
                ? `1px solid ${borderColor}`
                : !isFocused && error 
                ? '1px solid #EF4444'
                : '1px solid #D1D5DB',
                boxShadow: 'none',
                transition: 'all 0.5s',
                ":hover": {
                    ...styles[":hover"],
                    border: error ? '1px solid #EF4444' 
                    : isFocused ? `1px solid ${borderColor}`
                    :'1px solid #D1D5DB',
                    cursor: 'pointer'
                },
            };
        },

        option: (styles, { isDisabled, isFocused }) => {
            return {
                ...styles,
                cursor:'pointer',
                backgroundColor: isDisabled ? null : isFocused ? bgColor : null,
                color : isFocused && '#fff'
            };
        },
        placeholder: (styles) => {
            return {
                ...styles,
               color:'#9CA3AF',
               fontFamily:'lato-regular'
            }
        },
    };

    // jsx content
    return (
        <Fragment>
            <div className='form-group-container'>
                <div className='form-group'>
                    {label && <label className='form-label'>{label}</label>}
                    <Select
                        instanceId={id}
                        name={name}
                        isMulti={isMulti}
                        isSearchable={isSearchable}
                        options={options}
                        onChange={onChange}
                        onChangeInput={onChangeInput}
                        styles={customStyles}
                        placeholder={placeholder}
                        menuPlacement="auto"
                    />
                </div>
                {error && <span className='form-error'><p>{error}</p></span>}
            </div>
        </Fragment>
    )
}

// default props
SelectInput.defaultProps = {
    borderColor: '#60A5FA',
    bgColor: '#2563EB',
    isMulti: false,
    isSearchable: true
}

// props validation
SelectInput.propTypes = {

}

export default SelectInput
