import React, {useState} from  'react';
import {connect} from 'react-redux';
import './signIn.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../button/CustomButton';
import {googleSignInStart, emailSignInStart} from '../../redux/user/userActions';

const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const {email, password} = userCredentials;

const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
};

const handleChange = (e) => {
    const {value, name} = e.target;
    setCredentials({...userCredentials, [name]: value})
};

    return(
        <div className="sign-in">
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    onChange={handleChange}
                    value={email} 
                    label='Email'
                    required />
               
                <FormInput 
                    name="password" 
                    type="password" 
                    value={password} 
                    onChange={handleChange}
                    label='Password'
                    required />
               

                <div className="buttons">
                    <CustomButton type="submit">log in</CustomButton>
                    <CustomButton onClick={googleSignInStart} type="button" isGoogleSignIn >log in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)