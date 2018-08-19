import React from 'react';
import LoginForm from '../forms/LoginForm';
import {  Button } from 'semantic-ui-react';
import { connect } from "react-redux";
import { loginUser} from "../../redux/actions/index";

class LoginPage extends React.Component {
    constructor(props){
        super(props);
    }
    submit = data => {
        this.props.dispatch(loginUser(data.email, data.password));
    };
    componentWillReceiveProps(nextProps){
        if(nextProps.isUserLoggedIn){
                console.log("login success")
        }
    }
/*
    static getDerivedStateFromProps(props, state) {
        if (props.isUserLoggedIn) {
          //props.history.push("/home");
          console.log("login success")
        }
    }*/

    onSingupClicked = () => {
        //const errors = this.validate(this.state.data);
        //this.setState({ errors });
        //if (Object.keys(errors).length === 0) {
            //this.props.click(this.state.data);
            this.props.history.push("/signup");
     //   }
    };
    render() {
        return (
            <div>
                <h1>Login Page</h1>
          <LoginForm {...this.props} submit={this.submit}></LoginForm>
          <br/>

          <Button className="App" primary onClick={this.onSingupClicked}> SignUp</Button>
            </div>
        );
    }
}


  const mapStateToProps = state => {
    return {
      isUserLoggedIn: state.Auth.isUserLoggedIn,
      userObject: state.Auth.userObject
    };
  };



export default connect(mapStateToProps)( LoginPage);