import React, { Component } from 'react';
import { Button,Grid, Form } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';

class Signupform extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                firstname:"",middlename: "",lastname: "", email: "", 
                phone: "", address:"",apt:"",city:"", state:"",
                zipcode:"",fullname:"", clientname:"",address1:"",
            },
            loading: false,
            errors: {}
        };
    }
    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

     onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        }
    };

    validate = data => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        if (!data.phone) errors.phone = "Can't be empty";
        if (!data.firstname) errors.firstname = "Can't be empty";
        if (!data.middlename) errors.middlename = "optional";
        if (!data.address) errors.address = "please enter your address";
        if (!data.apt) errors.apt = "plesase enter your apt number";
        if (!data.city) errors.city = "Please enter the city name";
        if (!data.place) errors.place = "Please enter the place name";
        if (!data.state) errors.state = "please enter the state name";
        if (!data.zipcode) errors.zipcode = "zipcode required";
        if (!data.fullname) errors.fullname = "fullname please";
        if (!data.clientname) errors.clientname = "clientname required";
        if (!data.address1) errors.address1 = "address1 is required";
       

        
        
        return errors;
    }
    render() {
        const { data, errors } = this.state;
        return (

            <div>

               
                
                </div>
 
       
    
        );
    }
}

export default Signupform;