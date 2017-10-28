import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth, authProvider} from '../reducers/user'
import { Row, Input, Icon, Button } from 'react-materialize'
import {BaseApiUrl} from '../constants';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const {formName, displayName, handleSubmit, handleFacebookCallBack, handleGoogleCallBack, error} = props;

  return (
    <div className="authContainer">
      <form className="authForm" onSubmit={handleSubmit} name={formName}>
        <div className="login-fields">
          <Input type="hidden" name="formName" value={formName} ></Input>
          <Input s={6} name="email" label="Email" validate><Icon>face</Icon></Input>
          <Input s={6} name="password" label="Password" validate type='password'><Icon>fingerprint</Icon></Input>
          {error && error.message && <span className="error-text"> {error.message} </span>}
        </div>
        <br />
        <div className="submit-button-form">
          <Button waves='light'>{displayName}</Button>
        </div>
        <hr className="hr-text" data-content="OR"/>
        <div>       
          <GoogleLogin
            className="loginBtn loginBtn--google"
            clientId="24226133302-5fc4bvbhask2opc4ie5f8jdruqp6g5m0.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={handleGoogleCallBack}>
          </GoogleLogin>
          <FacebookLogin
            cssClass="loginBtn loginBtn--facebook"
            appId="1689194981299375"
            autoLoad={false}
            fields="name,email,picture"
            callback={handleFacebookCallBack}>
          </FacebookLogin>         
        </div>
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    formName: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    formName: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.formName.value
      const email = evt.target.email.value
      const password = evt.target.password.value

      dispatch(auth(email, password, formName))
    },
    handleFacebookCallBack(response){
      dispatch(authProvider('facebook', response.accessToken));
    },
    handleGoogleCallBack(response){
      dispatch(authProvider('google', response.accessToken));
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  formName: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
