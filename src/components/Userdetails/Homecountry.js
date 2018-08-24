import React from 'react';
import Validator from 'validator';
import { Divider } from '../../../node_modules/semantic-ui-react';


class Homecountry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                email: "", 
                phone: "", place:"",fullname:"",
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
      //  if (!data.firstname) errors.firstname = "Can't be empty";
        //if (!data.middlename) errors.middlename = "optional";
        //if (!data.lastname) errors.lastname = "can't br empty";
        // if (!data.apt) errors.apt = "plesase enter your apt number";
        // if (!data.city) errors.city = "Please enter the city name";
        if (!data.place) errors.place = "Please enter the place name";
        // if (!data.state) errors.state = "please enter the state name";
        // if (!data.zipcode) errors.zipcode = "zipcode required";
        // if (!data.address) errors.address = "address is required";
        if (!data.fullname) errors.fullname = "fullname please";
        //if (!data.clientname) errors.clientname = "clientname required";
        //if (!data.address1) errors.address1 = "address1 is required";
       

        
        
        return errors;
    }
    render() {
        const { data, errors } = this.state;
        return (


{/* <div class="ui two column grid">
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


</div> */}
        );
    }
}

export default Homecountry;