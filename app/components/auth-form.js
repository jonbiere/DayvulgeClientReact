import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../reducers/user'
import { Row, Input, Icon, Button } from 'react-materialize'
import {BaseApiUrl} from '../constants';
/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="welcome-log-in">
      <form onSubmit={handleSubmit} name={name}>
        <div className="login-fields">
          <input type="hidden" name="hidden" value={name}/>
          <Input s={6} name="name" label="Name" validate><Icon>face</Icon></Input>
          <Input s={6} name="email" label="Email" validate><Icon>computer</Icon></Input>
          <Input s={6} name="password" label="Password" validate type='tel'><Icon>fingerprint</Icon></Input>
        </div>
        <br />
        <div className="submit-button-form">
          <Button waves='light'>{displayName}</Button>
        </div>
        <br />
        <div>
          <h5> Or log in with one of these guys</h5>
          <Button
            className="submit-button-form"
            waves='light'
            node='a'
            href={`${BaseApiUrl}/auth/google`}>
            Google
          </Button>
          <br />
          <Button
            className="submit-button-form"
            waves='light'
            node='a'
            disabled={true}
            href={`${BaseApiUrl}/auth/facebook`}>
            Facebook
          </Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
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
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.hidden.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      const name = evt.target.name.value

      dispatch(auth(name, email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
