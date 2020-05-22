import React from 'react';
import { Link } from 'react-router-dom';

import './register.styles.scss';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class Register extends React.Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
            parentsName: '',
            password: '',
            userName: '',
            formerSchool: '',
            basic: '',
            address: ''
        }
    }



    handleSubmit = async e => {
        e.preventDefault();

        const { firstName, lastName, email, dob, parentsName, userName, password, formerSchool, basic, address } = this.state

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, password
            );

            await createUserProfileDocument(user, {
                firstName, lastName, dob, parentsName, userName, formerSchool, basic, address,
            });

            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                dob: '',
                parentsName: '',
                password: '',
                userName: '',
                formerSchool: '',
                basic: '',
                address: ''
            });

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

    render() {

        const { firstName, lastName, email, dob, parentsName, userName, password, formerSchool, basic, address } = this.state

        return (
            <div className='sign_up'>
                <form onSubmit={this.handleSubmit} className='form' >

                    <FormInput
                        name='firstName'
                        type='firstName'
                        label='First Name'
                        maxLength='15'
                        value={firstName}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='lastName'
                        type='lastName'
                        label='Last Name'
                        maxLength='15'
                        value={lastName}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='dob'
                        type='text'
                        label='Date of Birth'
                        value={dob}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        maxLength='30'
                        value={email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={password}
                        minLength='8'
                        maxLength='15'
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name='basic'
                        type='text'
                        label='Basic'
                        value={basic}
                        maxLength='15'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='parentsName'
                        type='text'
                        label='Parents Name'
                        value={parentsName}
                        maxLength='30'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='formerSchool'
                        type='text'
                        label='Former School Name'
                        value={formerSchool}
                        maxLength='30'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='address'
                        type='text'
                        label='Address'
                        value={address}
                        maxLength='50'
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type="checkbox"
                        value=""
                        label='View'
                        style={{ width: '2vw', position: 'absolute', top: '-65px' }}
                    />
                    <FormInput
                        name='userName'
                        type='userName'
                        label='UserName'
                        maxLength='15'
                        value={userName}
                        handleChange={this.handleChange}
                    />

                    <div className='buttons'>

                        {/* <Link to='/sign-in'> */}
                        <Button>Submit</Button>
                        {/* </Link> */}

                        <span><p>Already A Student?</p> <Link to='sign-in'><Button className='login_button' >Log in</Button></Link> </span>
                    </div>


                </form>
            </div>
        )
    }
}

export default Register