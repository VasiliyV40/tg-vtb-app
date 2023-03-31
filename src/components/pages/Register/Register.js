import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Col, Form, notification, Row, Tabs} from 'antd';
import PrimaryButton from '../../ui/buttons/PrimaryButton';
import classes from './register.module.scss'
import MaskInput from "../../ui/inputs/MaskInput";
import PasswordInput from "../../ui/inputs/PasswordInput";
import {changeInput, clearForm} from "../../../store/actions/registration";
import Loader from "../../Loader/Loader";
import PhoneInput from "../../ui/inputs/PhoneInput";


class Register extends Component {

  registrationForm = React.createRef();

  state = {
    step: 1,
    loading: false,
    formValid: []
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.step === prevState.step) {
      this.registrationForm.current.setFieldsValue({...this.props.form})
    }
  }

  render() {
    const openNotification = (placement) => {
      notification.success({
        message: "Пароль отправлен на ваш номер телефона",
        placement
      });
    };

    const getList = (id) => {
      switch (id) {
        case 1:
          return formIinData.items.map(el => el.name);
        case 2:
          return formPasswordData.items.map(el => el.name);
      }
    }

    const onStepChange = (currentStep, nextStep, maxStep) => {
      const form = this.registrationForm.current
      if (nextStep === currentStep + 1 && nextStep - 1 !== maxStep) {
        form.validateFields(getList(currentStep))
          .then((data) => {
            this.setState({
              step: nextStep,
              formValid: this.state.formValid.includes(currentStep) ? [...this.state.formValid] : [...this.state.formValid, currentStep]
            })
          }).catch(error => {
          console.log("Error ", error)
          this.setState({
            formValid: this.state.formValid.filter(el => el !== currentStep)
          });
        });
      } else if (nextStep > currentStep + 1 && nextStep - 1 !== maxStep) {
        form.validateFields(getList(currentStep))
          .then(data => {
            if (this.state.formValid.includes(2)) {
              this.setState({
                step: nextStep
              })
            } else {
              this.setState({
                step: currentStep + 1
              })
            }
          }).catch(err => {
        })
      } else if (nextStep < currentStep) {
        this.setState({
          step: nextStep
        })
      } else if (currentStep === maxStep) {
        form.validateFields()
          .then(data => {
            this.setState({
              loading: true
            });
            setTimeout(() => {
              this.props.clearForm();
              this.setState({
                step: 1,
                loading: false,
                formValid: [],
              });
              form.resetFields();
              openNotification('bottom');
            }, 3000)
          }).catch(err => {
        })
      }
    }

    const getRules = (id, val) => {
      switch (id) {
        case "required":
          return [
            {
              required: true,
              message: 'Обязательное поле'
            }
          ];
        case "minLength":
          return [
            {
              required: true,
              message: 'Обязательное поле',
            },
            {
              type: 'string',
              min: 6,
              message: 'Слишком мало символов',
            }
          ];
        case "length":
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

    const {changeInput} = this.props

    const formIinData = {
      items: [
        {
          name: "IIN",
          label: "ИИН",
          rules: getRules("length", 12),
          children: <MaskInput
            name={"IIN"}
            mask={"000000-0-0000-0"}
            inputMode="tel"
            onChange={e => changeInput("IIN", e.unmaskedValue)}
          />
        },
      ]
    }

    const formPasswordData = {
      items: [
        {
          name: "Phone",
          label: "Телефон",
          rules: getRules("phone", 10),
          children: <PhoneInput
            name={"Phone"}
            onChange={e => changeInput("Phone", e.unmaskedValue)}
          />
        }
      ]
    }

    const iinData = (form) => {
      return (
        formIinData.items.map((el, ind) => {
          //const valid = form.current ? form.current.getFieldError(el.name).length > 0 : false
          return (
            <Form.Item
              key={ind}
              fieldKey={ind}
              //validateTrigger={valid ? "onChange" : "onBlur"}
              {...el}
            >
              {el.children}
            </Form.Item>
          )
        })
      )
    }

    const passwordData = () => {
      return (
        formPasswordData.items.map((el, ind) => {
          return (
            <Form.Item
              key={ind}
              fieldKey={ind}
              {...el}
            >
              {el.children}
            </Form.Item>
          )
        })
      )
    }

    const tabsItem = [
      {
        key: 1,
        label: `ИИН`,
        children: iinData(this.iinData)
      },
      {
        key: 2,
        label: `Пароль`,
        children: passwordData(this.passwordData)
      },
    ]

    const {step} = this.state;

    console.log("Props ", this.props.form)

    return (
      <div className={classes.wrapper}>
        <Card
          style={{borderRadius: 11}}
          bodyStyle={{padding: "24px 16px 32px 16px",}}
        >
          <h2 style={{marginBottom: 40}}>
            Восстановить пароль
          </h2>
          <Form
            ref={this.registrationForm}
            size="large"
            layout="vertical"
            className={classes.form}
          >

            <Tabs
              activeKey={step}
              animated
              className={classes.tabs}
              items={tabsItem}
              onChange={id => onStepChange(step, id, tabsItem.length)}
              renderTabBar={()=>{}}
            />

          </Form>
          <Row gutter={16} style={{marginTop: 20}}>
            {
              step > 1 ?
                <Col span={12}>
                  <PrimaryButton
                    size="small"
                    onClick={() => onStepChange(step, step - 1, tabsItem.length)}
                    title={"Предыдущий шаг"}
                  />
                </Col> : null
            }

            <Col span={step > 1 ? 12 : 24}>
              <PrimaryButton
                size="small"
                onClick={() => onStepChange(step, step + 1, tabsItem.length)}
                title={step === tabsItem.length ? "Отправить" : "Следующий шаг"}
              />
            </Col>
          </Row>
        </Card>

        {
          this.state.loading && <Loader/>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.gettingLoan
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeInput: (name, value, filter) => dispatch(changeInput({name, value, filter})),
    clearForm: () => dispatch(clearForm())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);