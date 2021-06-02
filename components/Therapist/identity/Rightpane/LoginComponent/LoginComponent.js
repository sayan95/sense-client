// dependency imports
import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useToasts } from "react-toast-notifications";
import Image from 'next/image';

// components imports
import CardHeader from "../../../../UI/Card/CardHeader";
import CardBody from "../../../../UI/Card/CardBody";
import CardFooter from "../../../../UI/Card/CardFooter";
import TextField from "../../../../UI/TextField/TextField";
import Button from "../../../../UI/Button/Button";
import CheckBox from "../../../../UI/CheckBox/CheckBox";


// Therapist login component
const LoginComponent = ({loginAction, pageToggle, inputChangeAction}) => {
  // dependency
  const { addToast } = useToasts();

  // state from store
  const alertType = useSelector(state => state.therapistAuth.alertType); 
  const error = useSelector(state => state.therapistAuth.error);
  const isLoading = useSelector(state => state.therapistAuth.loading);
  
  // side effects
  useEffect(() => {
    if(alertType && alertType === 'invalid-attempter'){
      addToast(error, {appearance : 'info'});
    }
  }, [alertType]);

  // jsx content
  return (
    <Fragment>
      <div className="therapist-auth--login animate__animated animate__fadeInLeft animate__faster">
        {/** Headings  */}
        <CardHeader>
            <h3 className="therapist-auth--login-heading">
                <span>Sign in</span>
                <Image src='/assets/svgs/leaf.svg' alt='sens-login' height='30' width='30' priority='1' quality='100' />
            </h3>
        </CardHeader>
        
        {/** Body */} 
        <CardBody>
            {/** Login form  */}
            <form method='POST' onSubmit={loginAction}>
                <TextField name='email' event={inputChangeAction} type='text' placeholder='Enter email' iconClass='las la-envelope' error={error && error.email ? error.email: ''}/>
                <TextField name='password' event={inputChangeAction} type='password' placeholder='Enter password' iconClass='las la-key' error={error && error.password ? error.password : ''}/>
                <CheckBox name='remember_me' event={inputChangeAction} label='Remember me'/>
                <Button disabled={isLoading} type='submit' isBlock={true} color='primary'>Sign in</Button>
            </form>
        </CardBody>

        {/** Footer */}
        <CardFooter>
          <p className='therapist-auth--login-footer-item-1'>Forget password ? <a href='#'>Click here</a></p>
          <p className='therapist-auth--login-footer-item-2'>Don't have any account? <a href='#' onClick={pageToggle}>Sign up</a></p>
        </CardFooter>
      </div>
    </Fragment>
  );
};

// props validation
LoginComponent.propTypes = {
  loginAction: PropTypes.func.isRequired,
  pageToggle: PropTypes.func.isRequired,
  inputChangeAction: PropTypes.func.isRequired
};

export default LoginComponent;
