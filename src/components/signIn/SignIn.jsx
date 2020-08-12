import React, {Component} from  'react';
import {connect} from 'react-redux';
import './signIn.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../button/CustomButton';
import {googleSignInStart, emailSignInStart} from '../../redux/user/userActions';

class SignIn extends Component {
constructor(props){
    super(props);

    this.state = {
        email: '',
        password: ''
    }
};

handleSubmit = async event => {
    event.preventDefault();
    const {emailSignInStart} = this.props;
    const {email, password} = this.state;

    emailSignInStart(email, password);

};

handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value})
};

render () {
    const {googleSignInStart} = this.props;
    const {email, password} = this.state;

    return(
        <div className="sign-in">
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    onChange={this.handleChange}
                    value={email} 
                    label='Email'
                    required />
               
                <FormInput 
                    name="password" 
                    type="password" 
                    value={password} 
                    onChange={this.handleChange}
                    label='Password'
                    required />
               

                <div className="buttons">
                    <CustomButton type="submit">log in</CustomButton>
                    <CustomButton onClick={googleSignInStart} type="button" isGoogleSignIn >log in with Google</CustomButton>
                </div>
            </form>
        </div>
    )}
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)