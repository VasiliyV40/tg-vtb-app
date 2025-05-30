import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AutoComplete, Card, Form, Select, Input, Button, Space, Col, Row} from 'antd';
import classes from "./signin.module.scss";

import PasswordInput from "../../ui/inputs/PasswordInput";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import {Link} from "react-router-dom";
import {signIn, changeInput} from "../../../store/actions/authorization";
import PhoneInput from "../../ui/inputs/PhoneInput";
import Loader from "../../Loader/Loader";



class SignIn extends Component {

  state = {
    loading: false
  }

  loginForm = React.createRef();

  componentDidUpdate(prevProps, prevState, snapshot) {

    this.loginForm.current.setFieldsValue({...this.props.form})

  }

  render() {

    const loginHandler =  () => {
      this.loginForm.current.validateFields()
        .then(data => {
          this.setState({
            loading: true
          });
          setTimeout(()=>{
            this.props.signIn(this.props.form.login, this.props.form.password, false)
          }, 1500)

        })
        .catch(error => {
          console.log("Error", error)
        })
    };

    const {changeInput} = this.props

    const getRules = (id, val) => {
      switch (id) {
        case "minLength":
          return [
            {
              required: true,
              message: 'Обязательное поле',
            },
            {
              type: 'string',
              min: val,
              message: `Должно содержать от ${val} символов`,
            }
          ];
        case "phone":
          return [
            {
              required: true,
              message: 'Обязательное поле',
            },
            {
              len: val,
              message: `Должно содержать ${val} цифр`,
            }
          ];
      }
    }

    return (
      <>
        <div  className={`${classes.wrapper} ${this.state.loading ? classes.loading : ""}`}>
          <Card
            style={{borderRadius: 11}}
            bodyStyle={{padding: "24px 16px 32px 16px", }}
          >
            <h2 style={{marginBottom: 40}}>
              Войти<br/>
              в&nbsp;личный кабинет
            </h2>
            <Form
              ref={this.loginForm}
              className={classes.form}
            >
              <Form.Item
                name="login"
                rules={[
                  {
                    required: true,
                    message: 'Обязательное поле',
                  },
                  {
                    len: 10,
                    message: `Должно содержать 10 цифр`,
                  }
                ]}
              >
                <PhoneInput name={"login"} onChange={e => changeInput("login", e.target.value)}/>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Обязательное поле',
                  },
                  {
                    min: 6,
                    message: `Должно содержать от 6 символов`,
                  }
                ]}
              >

               <PasswordInput name="password" onChange={e => changeInput("password", e.target.value)}/>
              </Form.Item>
              <Row gutter={16} style={{marginTop:20}}>
                <Col span={24}>
                  <PrimaryButton title="Войти" onClick={loginHandler}/>
                  <Space
                    align="center"
                    direction="vertical"
                    style={{
                      width: '100%',
                    }}
                  >
                    <Link to={`/registration`} className={classes.link}>Забыли пароль?</Link>
                  </Space>
                </Col>
              </Row>

            </Form>
          </Card>
        </div>
        {this.state.loading && <Loader/>}
      </>

    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.authorization.form,
    validate : state.authorization.validate
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeInput: (name, value, filter) => dispatch(changeInput({name, value, filter})),
    signIn: () => dispatch(signIn())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);