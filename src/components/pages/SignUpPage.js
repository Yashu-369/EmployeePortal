import React from 'react';
import Nameinfo from '../Userdetails/Nameinfo';
import USaddress from '../Userdetails/USaddress';
import CountryAddress from '../Userdetails/CountryAddress';
import USemergency from '../Userdetails/USemergency';
import Homecounty from '../Userdetails/USemergency';
import Worksite from '../Userdetails/Worksite';
import { Button, Grid } from 'semantic-ui-react';
import { connect } from "react-redux";
import { signupUser} from "../../redux/actions/index";
import "../../App.css";


class SignUpPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isUserSignedIn){
                console.log("sign up success")
                console.log(nextProps.username + " - username ");
                console.log(nextProps.email + " - email ");
                console.log(this.props.state.data);
        }
    }
    submit = data => {
        this.props.dispatch(signupUser("firstname","middlename", "lastname","email",
        "phone","address","apt","city","state","zipcode","fullname","clientname","address1"));
    };

    render() {
        return (
            <div> 
                <h1>Employee Registration</h1>
                
                <Nameinfo/>
                <USaddress/>
                <CountryAddress/>
                <USemergency/>
                <Homecounty/>
                <Worksite/>
                   
          <Button primary onClick={this.submit}> Register </Button>
            </div>
        );
    }
}


  const mapStateToProps = state => {
    return {
        isUserSignedIn: state.Signup.isUserSignedIn,
      userObject: state.Signup.userObject,
      firstname: state.Signup.firstname,
      middlename: state.Signup.middlename,
      lastname:  state.Signup.lastname,
      email:  state.Signup.email,
      phone: state.Signup.phone,
      address: state.Signup.address,
      address1: state.Signup.address1,
      place: state.Signup.place,
      state: state.Signup.state,
      city: state.Signup.city,
      zipcode: state.Signup.zipcode,
      fullname: state.Signup.fullname,
      clientname: state.Signup.clientname,



    };
  };



export default connect(mapStateToProps)( SignUpPage);