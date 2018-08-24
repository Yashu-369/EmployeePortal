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

                <div class="ui three column grid">
        <div class="row">
        <div class="column">
    <div>
    <label htmlFor="firstname">FirstName</label>
                <input
                    required
                    type="firstname"
                    id="firstname"
                    name="firstname"
                    placeholder="Enter a valid name"
                    value={data.firstname}
                    onChange={this.onChange}
                    errorText={this.state.firstnameError}
                />
</div>
</div>

<div class="column">
<label htmlFor="middlename">MiddleName</label>
                <input
                    type="middlename"
                    id="middlename"
                    name="middlename"
                    placeholder="optional"
                    value={data.middlename}
                    onChange={this.onChange}
                />
</div>
<div class="column">
<label htmlFor="lastname">LastName</label>
                <input
                    type="lastname"
                    id="lastname"
                    name="lastname"
                    placeholder="Mandatory"
                    value={data.lastname}
                    onChange={this.onChange}
                />
</div>
</div>

<div class="three wide column"></div>
<div class="three wide column"></div>
<div class="three wide column"></div>

</div>

<div class="ui three column grid">
<div>
<h5> *Please provide US address below</h5>
</div>

<div class="row">
<div class="column">
<label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter a valid name"
                    value={data.email}
                    onChange={this.onChange}
                />

</div>
<div class="column">
<label htmlFor="phone">Phone</label>
                 <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="Enter a valid name"
                    value={data.phone}
                    onChange={this.onChange}
                />
</div>
</div>
<div class="row">
<div class="column">
<label htmlFor="address">Address</label>
                 <input
                    type="address"
                    id="address"
                    name="address"
                    placeholder="Enter a valid address"
                    value={data.address}
                    onChange={this.onChange}
                />
</div>
<div class="column">
<label htmlFor="apt">Apt</label>
                 <input
                    type="apt"
                    id="apt"
                    name="apt"
                    placeholder="Enter apt#"
                    value={data.apt}
                    onChange={this.onChange}
                />
</div>
</div>
<div class="column">
<label htmlFor="city">City</label>
                 <input
                    type="city"
                    id="city"
                    name="city"
                    placeholder="Enter cty name"
                    value={data.city}
                    onChange={this.onChange}
                />
</div>
<div class="column">
<label htmlFor="state">State</label>
                 <input
                    type="state"
                    id="state"
                    name="state"
                    placeholder="Enter state name"
                    value={data.state}
                    onChange={this.onChange}
                />
</div>
<div class="column">
<label htmlFor="zipcode">Zipcode</label>
                 <input
                    type="zipcode"
                    id="zipcode"
                    name="zipcode"
                    placeholder="Enter zipcode"
                    value={data.zipcode}
                    onChange={this.onChange}
                />
</div>

<div class="three wide column"></div>
<div class="three wide column"></div>
<div class="three wide column"></div>
<div class="three wide column"></div>
<div class="three wide column"></div>
<div class="three wide column"></div>
<div class="three wide column"></div>

</div>

<div class="ui three column grid">
<div>
<h5> *Please provide address from your home country</h5>
</div>

<div class="row">
<div class="column">
<label htmlFor="address">Address</label>
                 <input
                    type="address"
                    id="address"
                    name="address"
                    placeholder="Enter a valid address"
                    value={data.address}
                    onChange={this.onChange}
                />
</div>
<div class="column">
<label htmlFor="apt">Apt</label>
                 <input
                    type="apt"
                    id="apt"
                    name="apt"
                    placeholder="Enter apt#"
                    value={data.apt}
                    onChange={this.onChange}
                />
</div>
</div>
<div class="column">
<label htmlFor="city">City</label>
                 <input
                    type="city"
                    id="city"
                    name="city"
                    placeholder="Enter cty name"
                    value={data.city}
                    onChange={this.onChange}
                />
</div>
<div class="column">
<label htmlFor="state">State</label>
                 <input
                    type="state"
                    id="state"
                    name="state"
                    placeholder="Enter state name"
                    value={data.state}
                    onChange={this.onChange}
                />
</div>
<div class="column">
<label htmlFor="zipcode">Zipcode</label>
                 <input
                    type="zipcode"
                    id="zipcode"
                    name="zipcode"
                    placeholder="Enter zipcode"
                    value={data.zipcode}
                    onChange={this.onChange}
                />
</div>


<div class="three wide column"></div>
<div class="three wide column"></div>
<div class="three wide column"></div>
<div class="three wide column"></div>
<div class="three wide column"></div>

</div>

<div class="ui two column grid">
<div>
<h5> *Please provide US emergency contact number</h5>
</div>

<div class="row">
<div class="column">
<label htmlFor="fullname">FullName</label>
                <input
                    type="fullname"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter a valid name"
                    value={data.fullname}
                    onChange={this.onChange}
                />

</div>

<div class="column">
<label htmlFor="phone">Phone</label>
                 <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="Enter a valid name"
                    value={data.phone}
                    onChange={this.onChange}
                />
</div>
</div>

<div class="row">
<div class="column">
<label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter a valid name"
                    value={data.email}
                    onChange={this.onChange}
                />

</div>
<div class="column">
<label htmlFor="place">Place</label>
                 <input
                    type="place"
                    id="place"
                    name="place"
                    placeholder="Enter your place name"
                    value={data.place}
                    onChange={this.onChange}
                />
</div>

</div>
<div class="two wide column"></div>
<div class="two wide column"></div>
<div class="two wide column"></div>
<div class="two wide column"></div>


</div>

<div class="ui two column grid">
<div>
<h5> *Please provide emergency contact number from your home country</h5>
</div>

<div class="row">
<div class="column">
<label htmlFor="fullname">FullName</label>
                <input
                    type="fullname"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter a valid name"
                    value={data.fullname}
                    onChange={this.onChange}
                />

</div>

<div class="column">
<label htmlFor="phone">Phone</label>
                 <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="Enter a valid name"
                    value={data.phone}
                    onChange={this.onChange}
                />
</div>
</div>

<div class="row">
<div class="column">
<label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter a valid name"
                    value={data.email}
                    onChange={this.onChange}
                />

</div>
<div class="column">
<label htmlFor="place">Place</label>
                 <input
                    type="place"
                    id="place"
                    name="place"
                    placeholder="Enter your place name"
                    value={data.place}
                    onChange={this.onChange}
                />
</div>

</div>
<div class="two wide column"></div>
<div class="two wide column"></div>
<div class="two wide column"></div>
<div class="two wide column"></div>


</div>

<div class="ui three column grid">
<div>
<h5> *Please provide work site information</h5>
</div>

<div class="row">
<div class="column">
<label htmlFor="clientname">Current Client Name</label>
                 <input
                    type="clientname"
                    id="clientname"
                    name="clientname"
                    placeholder="Enter your crrent client"
                    value={data.clientname}
                    onChange={this.onChange}
                />
</div>
</div>

<div class="row">
<div class="column">
<label htmlFor="address">Address</label>
                 <input
                    type="address"
                    id="address"
                    name="address"
                    placeholder="Enter a valid address"
                    value={data.address}
                    onChange={this.onChange}
                />
</div>
<div class="column">
<label htmlFor="address1">Address1</label>
                 <input
                    type="address1"
                    id="address1"
                    name="address1"
                    placeholder="Enter a valid address"
                    value={data.address1}
                    onChange={this.onChange}
                />
</div>
</div>
<div class="row">
<div class="column">
<label htmlFor="city">City</label>
                 <input
                    type="city"
                    id="city"
                    name="city"
                    placeholder="Enter cty name"
                    value={data.city}
                    onChange={this.onChange}
                />
</div>
<div class="column">
<label htmlFor="state">State</label>
                 <input
                    type="state"
                    id="state"
                    name="state"
                    placeholder="Enter state name"
                    value={data.state}
                    onChange={this.onChange}
                />
</div>
<div class="column">
<label htmlFor="zipcode">Zipcode</label>
                 <input
                    type="zipcode"
                    id="zipcode"
                    name="zipcode"
                    placeholder="Enter zipcode"
                    value={data.zipcode}
                    onChange={this.onChange}
                />
</div>
</div>


<div class="three wide column"></div>
<div class="three wide column"></div>
<div class="three wide column"></div>
<div class="three wide column"></div>
<div class="three wide column"></div>

</div>               
{/* <Button  className="App"   primary  > Save</Button> */}
</div>
 
       
    
        );
    }
}

export default Signupform;