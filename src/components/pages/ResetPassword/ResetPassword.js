import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Form} from 'antd';
import PhoneInput from '../../ui/inputs/PhoneInput';
import PrimaryButton from '../../ui/buttons/PrimaryButton';
import classes from '../SignIn/signin.module.scss'



class ResetPassword extends Component {
  render() {
    return (
      <div  className={classes.wrapper}>
        <Card
          style={{borderRadius: 11}}
          bodyStyle={{padding: "24px 16px 32px 16px", }}
        >
          <h2 style={{marginBottom: 40}}>
            Восстановить пароль
          </h2>
          <Form
          >
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Укажите номер телефона!',
                },
              ]}
            >
              <PhoneInput/>
            </Form.Item>

            <PrimaryButton title="Подтвердить"/>

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
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);