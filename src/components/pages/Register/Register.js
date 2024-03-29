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

  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      loading: false,
      formValid: [],
      accessToken: {},
      callbackInit: false
    }
  }



  config = {
    autoDocType: false,
    docType: 1,
    recognitionMode: 0,
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

  configLive = {
    'recordVideo': false,
    'videoBitrate': 2500000,
    'rotated': false,
    'lang': "custom",

    'render': {
      'oval': true,
      'faceContourInsteadOfOval': true,
      'ovalRingColor': {
        'default': '#f5f542',
        'actionSuccess': '#00ba00',
        'actionFailure': '#d00000',
        'sessionSuccess': '#00ba00',
        'sessionFailure': '#d00000',
      },
      'ovalWidth': 1.0,

      'overlay': true,
      'overlayColor': {
        'default' : '#2f4f4f',
      },
      'overlayTransparency': {
        'default': 0.55,
      },

      'arrow': true,
      'arrowColor': {
        'default': '#f0f0f0',
      },
      'arrowProgressColor': {
        'default': '#404040',
      },

      'hint': true,
      'hintTextColor': {
        "default": "#eee",
      },
      'hintFontType': "Arial",
      'hintUseProgressiveFontSize': true,
      'hintProgressiveFontSizeMultiplier': 1.0,
      'hintFontSize': 25,
      "hintCloudColor": {
        "default": "#2d312f",
      },

      'videoUploadProgressBar': true,
      'videoUploadProgressBarColor1': "#FFEA82",
      'videoUploadProgressBarColor2': "#eee",
    },

    'hints': {
      'noHint': '',
      'noFace': 'Вас Не Видно',
      'badLight': "Выравните Освещение",
      'closer': 'Ближе',
      'away': 'Отдалитесь',
      'closerToCenter': 'Ближе к Центру Экрана',
      'сameraNotReadableError' : "Камера не найдена",
      'CameraNotReadableError' : "Камера не найдена",

      'targetLeft': 'Медленно Поворачивайте Голову Влево',
      'targetRight': 'Медленно Поворачивайте Голову Вправо',
      'targetCenter': 'Посмотрите Прямо',

      'sessionSuccess': 'Вы Прошли!',
      'sessionFailure': 'Вы Не Прошли!',
      'sessionError': 'Произошла какая-то ошибка. Попробуйте перезапустить',
    },
  };



  successCallback = (data) =>{
    console.log('Session token is: ' + veridoc.getSessionToken());
    console.log('success', data);

    this.setState({
      step: 3,
      veridocData: data
    },function (){
      notification.success({message: "Отлично", description: "Удостоверение личности верифицировано" , duration: 3 })
    })
    //alert('success', data);
    //showResults(data);
    //checkRecognitionWarnings();
  }

  successVeriLiveCallback = (data) => {
    console.log('VeriLiveCallback =>', data);
    this.setState({
      step: this.state.step + 1,
      veriliveData: data,
      callbackInit: true
    },function (){
      notification.success({message: "Отлично", description: "Биометрия лица прошла успешно" , duration: 3 })
    })
    //alert('success', data);
  }

  failCallback(data) {
    console.log('fail', data);
    //alert('fail', data);
    //showResults(data);
  }

  errorCallback(data) {
    console.log('error', data);
    alert('error', data);
    //showResults(data);
  }

  updateCallback(data) {
    console.log('update', data);
    //alert('update', data);
    //showResults(data);
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
    console.log("!!!!!!!!! verilive", verilive.version)
    if (this.state.step === prevState.step) {
      this.registrationForm.current.setFieldsValue({...this.props.form})
      console.log("1 ", this.state.accessToken)
      veridoc.setAccessToken(this.state.accessToken?.access_token,this.state.accessToken?.person_id);
    }
    if (this.state.step !== prevState.step && this.state.step === 2) {
      console.log("2 ", this.state.accessToken)
      setTimeout(() => {
        console.log("------- ", document.getElementById("id_veridoc"))
        veridoc.successCallback = this.successCallback;
        veridoc.failCallback = this.failCallback;
        veridoc.errorCallback = this.errorCallback;
        veridoc.updateCallback = this.updateCallback;
        veridoc.init("https://services.verigram.ai:8443/s/veridoc/ru/veridoc/", "", this.config)
          .then(() => {
            console.log("INIT", this.state.accessToken?.access_token,this.state.accessToken?.person_id)

            //var session_token = veridoc.start();
            //console.log('session_id is: ' + session_id);
            veridoc.start()
            // Successful initialization. Now you can start scanning.
          })
          .catch((e) => {
            console.log("Error", e)
            // E.g. Show error to user.
          });

      }, 100)
    }
    if (this.state.step !== prevState.step && this.state.step !== 2 && prevState.step === 2) {
      console.log("3 ", this.state.accessToken)
      veridoc.dispose()
    }
    if (this.state.step !== prevState.step && this.state.step === 3) {
      console.log("4 ", verilive.successCallback)
      setTimeout(() => {

        verilive.init("https://services.verigram.ai:8443/s/verilive/verilive", "", this.configLive).then(data => {
          if(this.state.callbackInit !== true){
            verilive.successCallback = this.successVeriLiveCallback
          };
          verilive.start(this.state.accessToken?.access_token,this.state.accessToken?.person_id);

        }).catch(error => {
          console.log("VERI LIVE ERROR", error)

        })
      }, 100)

    }
    if (this.state.step !== prevState.step && this.state.step === 4) {
      console.log("5 ", this.state.accessToken)
      verilive.dispose()
      setTimeout(() => {

      /*

        const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
          const byteCharacters = atob(b64Data);
          const byteArrays = [];

          for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
          }

          const blob = new Blob(byteArrays, {type: contentType});
          return blob;
        }

        var formDate = new FormData();
        formDate.append('verif',b64toBlob(a,"image/jpeg"));
        formDate.append("enroll", b64toBlob(a, "image/jpeg"));*/


        /*axios.post("https://services.verigram.ai/s/veriface", {"verif": this.state.veridocData.face_picture, "enroll": this.state.veriliveData.bestframe}).then((data)=>{
          console.log("VERILIVE RESPONSE ", data)
        })*/

        axios.post("https://api.proidea.tech/exchange/test_veri_face",
          {"verif": this.state.veridocData.face_picture, "enroll": this.state.veriliveData.bestframe}).then(
            (data) => {
              if (data.score >= 90) {
                this.props.navigate("/");
                notification.success({message:"Регистрация прошла успешно", duration: 4})
              } else {
                this.registrationForm.current.resetFields();
                this.props.changeInput("IIN", "")
                this.setState({step:1},function (){
                  notification.error({message:"Ошибка", description:"Пройдите регистрацию повторно", duration: 4})
                })
              }
          console.log("RESP,", data)
        }).catch(error => {
         alert("Alert", error)
        })
      }, 0)

    }
  }

  render() {
    const openNotification = (placement) => {
      notification.success({
        message: "Пароль отправлен на ваш номер телефона",
        placement
      });
    };

    console.log("!!!!!!!!!!!!!111111", verilive)


    const getList = (id) => {
      switch (id) {
        case 1:
          return formIinData.items.map(el => el.name);
        case 2:
          return formVeriDoc.items.map(el => el.name);
        case 3:
          return formVeriLive.items.map(el => el.name);
        case 4:
          return formVeriFace.items.map(el => el.name);
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

    function onStartButtonClick() {

      let session_id = veridoc.start();

      console.log('session_id is: ' + session_id);


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
          label: "Биометрия документа Test",
          //rules: getRules("phone", 10),
          children: <div id="id_veridoc"/>
        }
      ]
    }

    const formVeriLive = {
      items: [
        {
          name: "VeriFace",
          label: "Биометрия лица",
          //rules: getRules("phone", 10),
          children: <div id="id_verilive"/>
        }
      ]
    }

    const formVeriFace = {
      items: [
        {
          name: "VeriFace",
          label: "Верификация личности",
          //rules: getRules("phone", 10),
          children: <div id="id_verilive"/>
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

    const veriLive = () => {
      return (
        formVeriLive.items.map((el, ind) => {
          return (
            <>
              <Form.Item
                key={ind}
                fieldKey={ind}
                {...el}
              >
                {el.children}
              </Form.Item>
            </>
          )
        })
      )
    }

    const veriFace = () => {
      return (
        formVeriFace.items.map((el, ind) => {
          return (
            <>
              <Form.Item
                key={ind}
                fieldKey={ind}
                {...el}
              >
                {el.children}
              </Form.Item>
              <div id="resultFace"></div>
            </>
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
        label: `Беометрия лица`,
        children: veriLive(this.veriLive)
      },
      {
        key: 4,
        label: `Беометрия лица`,
        children: veriFace(this.veriFace)
      },
    ]

    const {step} = this.state;

    console.log("THIS STATE ", this.state)

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
                <Col span={24}>
                  <PrimaryButton
                    size="small"
                    onClick={() => onStepChange(step, step - 1, tabsItem.length)}
                    title={"Предыдущий шаг"}
                  />
                </Col> : null
            }
            {
              (step === 1 || step === 6) &&
              <Col span={step > 1 ? 12 : 24}>
                <PrimaryButton
                  size="small"
                  onClick={() => onStepChange(step, step + 1, tabsItem.length)}
                  title={step === tabsItem.length ? "Отправить" : "Следующий шаг"}
                />
              </Col>
            }


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