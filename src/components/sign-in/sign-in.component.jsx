import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils'
import { auth } from 'firebase';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''

        }
    };


    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '', });
        } catch (error) {
            console.log(error);

        }


    }



    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    render = () => (
        <div className='sign_in'>
            <form
                onSubmit={this.handleSubmit}
                className='form' >

                <FormInput
                    name='email'
                    type='email'
                    label='Enter Your Email'
                    value={this.state.email}
                    handleChange={this.handleChange}
                />
                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                />

                <div className='buttonDiv'>
                    <Button onClick={this.handleSubmit} >Log In</Button>
                    <Button onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</Button>
                </div>
                <span style={{ float: 'right' }}>
                    Are You A New Student?
                    <Link to='register' className='register_link'>Register</Link>
                </span>

            </form>
        </div>
    )
}

export default withRouter(SignIn)