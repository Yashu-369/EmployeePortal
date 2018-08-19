import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';





class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                email: "",
                password: "",
                username:"",
                nickname: "",
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
        if (!data.password) errors.password = "Can't be empty";
        if (!data.username) errors.username = "Can't be empty";
        if (!data.nickname) errors.nickname = "";
        
        return errors;
    }
    render() {
        const { data, errors } = this.state;
        return (
            <div>
            <Form onSubmit={this.onSubmit}>
            <Form.Field error={!!errors.email}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@example.com"
                    value={data.email}
                    onChange={this.onChange}
                />
                {/* {errors.email && <InlineError text={errors.email} />} */}
            </Form.Field>

            <Form.Field>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Make it Secure"
                    value={data.password}
                    onChange={this.onChange}
                />
              {/*   {errors.password && <InlineError text={errors.password} />} */}
            </Form.Field>

 <Form.Field>
                <label htmlFor="username">UserName</label>
                <input
                    type="username"
                    id="username"
                    name="username"
                    placeholder="Enter a valid name"
                    value={data.username}
                    onChange={this.onChange}
                />
                            </Form.Field>

            <Form.Field>
                <label htmlFor="nickname">NickName</label>
                <input
                    type="nickname"
                    id="nickname"
                    name="nickname"
                    placeholder="optional"
                    value={data.nickname}
                    onChange={this.onChange}
                />
                
            </Form.Field>


            <Button primary > Login</Button>
           
        </Form>



        </div>
      );
    }
}

export default LoginForm;