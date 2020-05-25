import React, {Component} from  "react";
import './signIn.scss';
import FormInput from "../formInput/FormInput";
import CustomButton from "../button/CustomButton";

import {auth, signInWithGoogle} from "../../firebase/firebase.utils"

class SignIn extends Component {
constructor(props){
    super(props);

    this.state={
        email: '',
        password: ''
    }


}


handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({email:'', password:''})

    } catch (error) {
        console.log(error)
    }

    
}

handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value})
}

render () {

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
                    <CustomButton type="submit">sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}


}

export default SignIn