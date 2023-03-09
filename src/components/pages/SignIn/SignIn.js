import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AutoComplete, Card, Form, Select, Input, Button, Space} from 'antd';
import classes from "./signin.module.scss";
import PhoneInput from "../../ui/inputs/PhoneInput";
import PasswordInput from "../../ui/inputs/PasswordInput";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import {Link} from "react-router-dom";
import signIn from "../../../store/actions/authorization";



class SignIn extends Component {

  state = {
    phone: {
      value: "",
      error: null
    },
    password: {
      value: "",
      error: null
    },
    isValid: false
  }

  render() {

    const validateInput = (name, val) => {
      if (name === "phone" && val.length !== 10) {
        return {message: "Поле должно содержать 10 символов"}
      } else if (name === "password" && val.length < 7){
        return {message: "Поле должно быть больше 6-ти символов"}
      } else return null
    }

    const validateForm = () => {
      const prevState = this.state;
      this.setState({
        phone: {
          value: prevState.phone.value,
          error: validateInput("phone", prevState.phone.value)
        },
        password: {
          value: prevState.password.value,
          error: validateInput("password", prevState.password.value)
        },
        isValid: true
      });

      if (this.state.phone.error === null && this.state.password.error === null && this.state.isValid !== false) {
        console.log("TRUE =>", )
        return true
      } else {
        console.log("FALSE =>", )
        return false
      }
    }

    const fieldChange = (field, value) => {
      this.setState({
        [field]: {value, error: validateInput(field, value)}
      });
    }

    const loginHandler =  () => {
      if(validateForm()){
        console.log("!!!!!! =>", )
        this.props.signIn(this.state.phone, this.state.password, false)
      }
    };

    return (
      <div  className={classes.wrapper}>
        <Card
          style={{borderRadius: 11}}
          bodyStyle={{padding: "24px 16px 32px 16px", }}
        >
          <h2 style={{marginBottom: 40}}>
            Войти<br/>
            в&nbsp;личный кабинет
          </h2>
          <Form
            initialValues={{
              prefix: '7',
            }}
          >
            <Form.Item
              name="phone"
              validateStatus={this.state.isValid && this.state.phone?.error ? "error" : ""}
              help={this.state.isValid && this.state.phone.error?.message}
            >
              <PhoneInput name="phone" data={this.state.phone.value} onChange={fieldChange}/>
            </Form.Item>
            <Form.Item
              name="password"
              validateStatus={this.state.isValid && this.state.password?.error ? "error" : ""}
              help={this.state.isValid && this.state.password.error?.message}
            >
              <PasswordInput name="password" data={this.state.password.value} onChange={fieldChange}/>
            </Form.Item>
            <PrimaryButton title="Войти" onClick={loginHandler}/>
            <Space
              align="center"
              direction="vertical"
              style={{
                width: '100%',
              }}
            >
              <Link to={`/resetPassword`} className={classes.link}>Забыли пароль?</Link>
            </Space>
          </Form>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (tel, pass, isLogin) => dispatch(signIn(tel, pass, isLogin))
  };
}

export default connect(null, mapDispatchToProps)(SignIn);