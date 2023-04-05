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
import withRouter from "../../../hoc/withRouter";
import axios from "axios";


class Register extends Component {

  registrationForm = React.createRef();

  state = {
    step: 1,
    loading: false,
    formValid: [],
    accessToken: {}
  }

  config = {
    autoDocType: false,
    docType: 1,
    recognitionMode: 1,
    translitCheck: false,
    glareCheck: false,
    photocopyCheck: false,
    lang: 'ru',
    hints: {},
    render: {
      placeholder: true,
      startButton: true,
      containerBorderThickness: 1,
      containerBorderRadius: 3,
      containerBorderColor: "#000000",
      frame: true,
      frameBorderThickness: 3,
      frameBorderRadius: 20,
      frameColor: {
        default: "rgba(255, 255, 255, 1.0)",
        detected: "rgba(30, 255, 88, 1.0)"
      },
      overlay: true,
      overlayPermanent: true,
      overlayColor: {
        default: "#ffffff"
      },
      upperBarColor: {
        default: "rgba(255, 255, 255, 1.0)"
      },
      lowerBarColor: {
        default: "#a2d2ff",
        error: "#ffccd5"
      },
      buttonColor: {
        default: "#a2d2ff"
      },
      buttonTextColor: {
        default: "#353535"
      },
      overlayTransparency: {
        default: 0.7
      },
      icons: true,
      hint: true,
      hintTextColor: {
        default: "#353535"
      },
      hintFontType: "Arial",
      mirrorPreview: false
    }
  }

  componentDidMount() {
    axios.get("https://api.proidea.tech/exchange/get_veri_auth").then(({data}) => {
      console.log("getAccessToken", data)
      this.setState({
        accessToken: data
      })
    }).catch(error => console.log("getAccessTokenError", error))
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("!!!!!!!!! ",this.state.step,  prevState.step)
    if (this.state.step === prevState.step) {
      this.registrationForm.current.setFieldsValue({...this.props.form})
    }
    if (this.state.step !== prevState.step && this.state.step === 2) {

      setTimeout(() => {
        console.log("------- ", document.getElementById("id_veridoc"))
        veridoc.init("https://services.verigram.ai:8443/s/veridoc/ru/veridoc/", "", this.config)
        .then(() => {
          console.log("INIT")
          veridoc.setAccessToken(this.state.accessToken?.access_token,this.state.accessToken?.person_id)
          //veridoc.start()
          // Successful initialization. Now you can start scanning.
        })
        .catch((e) => {
          // E.g. Show error to user.
        });

      }, 0)
    }
    if (this.state.step !== prevState.step && this.state.step !== 2 && prevState.step === 2) {

      veridoc.dispose()

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
      //console.log("Step", currentStep)
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
      } else if (currentStep === 1) {
        console.log("Шаг Верификации Дока")

      }else if (nextStep < currentStep) {
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
              this.props.navigate("/");
            }, 1500)
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

    const formVeriDoc = {
      items: [
        {
          name: "VeriDoc",
          label: "Биометрия документа",
          //rules: getRules("phone", 10),
          children: <div id="id_veridoc"/>
        }
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

    const veriDoc = (form) => {
      return (
        formVeriDoc.items.map((el, ind) => {
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
        label: `Беометрия документа`,
        children: veriDoc(this.veriDoc)
      },
      {
        key: 3,
        label: `Пароль`,
        children: passwordData(this.passwordData)
      },
    ]

    const {step} = this.state;

    return (
      <div className={classes.wrapper}>
        <Card
          style={{borderRadius: 11}}
          bodyStyle={{padding: "24px 16px 32px 16px",}}
        >
          <h2 style={{marginBottom: 40}}>
            Регистрация
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));