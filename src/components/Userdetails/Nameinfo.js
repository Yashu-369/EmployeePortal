import React from 'react';

class Nameinfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                   firstname:"",middlename: "",lastname: "",    
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
        // if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        // if (!data.phone) errors.phone = "Can't be empty";
        if (!data.firstname) errors.firstname = "Can't be empty";
        if (!data.middlename) errors.middlename = "optional";
        if (!data.lastname) errors.lastname = "can't br empty";
       /* if (!data.apt) errors.apt = "plesase enter your apt number";
        if (!data.city) errors.city = "Please enter the city name";
        if (!data.place) errors.place = "Please enter the place name";
        if (!data.state) errors.state = "please enter the state name";
        if (!data.zipcode) errors.zipcode = "zipcode required";
        if (!data.fullname) errors.fullname = "fullname please";
        if (!data.clientname) errors.clientname = "clientname required";
        if (!data.address1) errors.address1 = "address1 is required";
       */

        return errors;
    }
    render() {
        const { data, errors } = this.state;
        return (
    <div class="ui three column grid">
        <div class="row">
        <div class="column">
    <div>
    <label htmlFor="firstname">FirstName</label>
                <input
                    type="firstname"
                    id="firstname"
                    name="firstname"
                    placeholder="Enter a valid name"
                    value={data.firstname}
                    onChange={this.onChange}
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
        );
    }
}

export default Nameinfo;