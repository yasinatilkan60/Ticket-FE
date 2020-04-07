import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Badge } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";


class Auth extends Component {
    constructor(props){
        super(props);
        localStorage.clear();
        this.state={
          email:'',
          password:''
        }
    }
    handleClick(){
        let payload={
        "email":this.state.email,
        "password":this.state.password
        }
        this.props.actions.registerUser(payload);
    }
    handleClick2(){
      let payload={
      "email":this.state.email,
      "password":this.state.password
      }
      this.props.actions.loginUser(payload);
      
    }
  render() {
    return (
      <Form className="mt-5 mr-auto ml-auto w-50">
        <h1><Badge color="warning">Bilet Uygulamasına Hoş Geldiniz</Badge></h1>
        <h3><Badge color="light">Email ve şifre ile kayıt olduktan sonra giriş yapabilirsiniz.</Badge></h3>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
            onChange = {(e) => this.setState({email : e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label>Şifre</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Şifre"
            onChange = {(e) => this.setState({password : e.target.value})}
          />
        </FormGroup>
        <Button color="secondary" onClick={(event) => this.handleClick(event)}>KAYIT OL</Button> <Button className="ml-3" color="success" onClick={(event) => this.handleClick2(event)}>GİRİŞ YAP</Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
    return {
      registerUser: state.registerUserReducer
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            registerUser : bindActionCreators(authActions.registerUser, dispatch),
            loginUser : bindActionCreators(authActions.loginUser, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);