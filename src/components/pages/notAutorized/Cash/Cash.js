import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navigate, Redirect} from "react-router-dom";
import classes from './cash.module.scss';
import {
  Card,
  Col,
  Form,
  Row,
  Tabs,
  notification,
} from 'antd';

import PhoneInput from "../../../ui/inputs/PhoneInput";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import {changeInput, clearForm} from "../../../../store/actions/gettingLoan";
import TextInput from "../../../ui/inputs/TextInput";
import Select from "../../../ui/selects/Select";
import MaskInput from "../../../ui/inputs/MaskInput";
import DateSelect from "../../../ui/selects/DateSelect";
import Checkbox from "../../../ui/selects/Checkbox";
import Loader from "../../../Loader/Loader";



class Cash extends Component {

  personalDataForm = React.createRef();
  passportDataForm = React.createRef();
  incomeInformationForm = React.createRef();

  state = {
    step: 1,
    loading: false,
    formValid: []
  }

  getFormRef = (val) => {
    switch (val) {
      case 1: return this.personalDataForm;
      case 2: return this.passportDataForm;
      case 3: return this.incomeInformationForm;
      default: return false;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.step === prevState.step){
      this.getFormRef(this.state.step).current.setFieldsValue({...this.props.form})
    }
  }


  render() {

    const openNotification = (placement) => {
      notification.success({
        message: "Заявка успешно отправлена",
        placement
      });
    };

    const onStepChange = (value, maxStep, formRef) => {
      console.log("Step change => ", value, formRef)
      if (value === 0){
        return false;
      } else if(!formRef ){
        this.setState({
          step: value
        });
      } else if (value - 1 === maxStep){
        formRef.current.validateFields()
          .then(data =>{
            this.setState({
              loading: true
            });
            setTimeout(()=>{
              this.props.clearForm();
              this.setState({
                step: 1,
                loading:false,
                formValid: [],
              });
              openNotification('bottom')

            }, 3000)
          })
          .catch(error => {});
      } else {
        formRef.current.validateFields()
          .then(data =>{
            this.setState({
              step: value,
              formValid: this.state.formValid.includes(value - 1) ? [...this.state.formValid] : [...this.state.formValid, value - 1]
            });
          })
          .catch(error => {
            this.setState({
              formValid: this.state.formValid.filter(el => el !== value - 1)
            });
          });
      }
    }

    const onStepChangeTab = (step, currentStep, stepCount) => {
      if (step < currentStep){
        this.setState({
          step
        });
      } else if (step === currentStep +1) {
        console.log("======== => ", step, currentStep)
        this.getFormRef(currentStep).current.validateFields()
          .then(data => {
            console.log("Data", this.state.step);
            this.setState({
              step: currentStep + 1,
              formValid: this.state.formValid.includes(currentStep) ? [...this.state.formValid] : [...this.state.formValid, currentStep]
            });

          })
          .catch(error => {
            this.setState({
              formValid: this.state.formValid.filter(el => el !== currentStep)
            });
          })
      } else if (step > currentStep +1) {
        console.log("DFDFDFDF =>", step, currentStep)

        this.getFormRef(currentStep).current.validateFields()
          .then(data => {
            console.log("Data", this.state.step);
            if(this.state.formValid.includes(currentStep) && this.state.formValid.includes(step - 1)) {
              this.setState({
                step: step
              });
            } else {
              this.setState({
                step: currentStep + 1,
                formValid: this.state.formValid.includes(currentStep) ? [...this.state.formValid] : [...this.state.formValid, currentStep]
              });
            }

          })
          .catch(error => {
            console.log("ERROR")
            /*this.setState({
              formValid: this.state.formValid.filter(el => el !== currentStep)
            });*/
          })



      } else return false
    }

    const getRules = (id, val) => {
      switch (id) {
        case "required":
          return [
            {
              required: true,
              message: 'Обязательное поле',
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
              min: 2,
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

        case "date":
          return [
            {
              required: true, message: 'Необходимо указать дату'
            }
          ];

      }
    }

    const cityMass = [
      "Актау","Актобе","Алматы","Атырау","Караганда","Кокшетау","Костанай","Кызылорда","Астана","Павлодар","Петропавловск","Семей","Талдыкорган","Тараз","Уральск","Усть-Каменогорск","Шымкент"
    ]

    const documentType = ["Удостоверение личности", "Загранпаспорт"]

    const dataSource = ["Телевидение", "Радио", "Пресса", "Печатные материалы банка (буклеты, плакаты)", "Наружная реклама", "Интернет реклама", "Рекомендации близких, друзей, плакаты", "Уже являюсь клиентом банка ВТБ (Казахстан)", "Рекламное сообщение, письмо"]

    const {changeInput} = this.props

    const formPersonalData = {
      ref: this.personalDataForm,
      items: [
        {
          name: "secondName",
          label: "Фамилия",
          rules: getRules("minLength"),
          children: <TextInput name={"secondName"} type="text" onChange={e => changeInput(e.target.name, e.target.value, /[^a-zа-яё]/gi)}/>
        },
        {
          name: "name",
          label: "Имя",
          rules: getRules("minLength"),
          children: <TextInput name={"name"} type="text" onChange={e => changeInput(e.target.name, e.target.value, /[^a-zа-яё]/gi)}/>
        },
        {
          name: "thirdName",
          label: "Отчество",
          rules: getRules("minLength"),
          children: <TextInput name={"thirdName"} type="text" onChange={e => changeInput(e.target.name, e.target.value, /[^a-zа-яё]/gi)}/>
        },
        {
          name: "IIN",
          label: "ИИН",
          rules: getRules("length", 12),
          children: <MaskInput name={"IIN"} mask={"000000-0-0000-0"} inputmode="decimal" onChange={e => changeInput("IIN", e.unmaskedValue)}/>
        },
        {
          name: "Phone",
          label: "Телефон",
          rules: getRules("phone", 10),
          children: <PhoneInput name={"Phone"} onChange={e => changeInput("Phone", e.unmaskedValue)}/>
        },
        {
          name: "city",
          label: "Город",
          children: <Select
            onChange={value => changeInput("city", value)}
            data={cityMass}
          />
        },
      ]
    }

    const formPassportData = {
      ref: this.passportDataForm,
      items: [
        {
          name: "documentType",
          label: "Вид документа удостоверящего личность",
          rules: getRules("required"),
          children: <Select
            onChange={value => changeInput("documentType", value)}
            data={documentType}
          />
        },
        {
          name: "documentNumber",
          label: "Номер документа удостоверящего личность",
          rules: getRules("length", 10),
          children: <MaskInput name={"IIN"} mask={"0000-000000"} onChange={e => changeInput("documentNumber", e.unmaskedValue)}/>
        },
        {
          name: "documentDate",
          label: "Дата документа удостоверящего личность",
          rules: getRules("required"),
          children: <DateSelect format="DD-MM-YYYY" name="documentDate" onChange={changeInput}/>
        },
      ]
    }

    const formIncomeInformation = {
      ref: this.personalDataForm,
      items: [
        {
          name: "notSoleTrader",
          rules: getRules("required"),
          children: <Checkbox
            name="notSoleTrader"
            required
            title='Я не являюсь работником ИП'
            onChange={changeInput}/>
        },
        {
          name: "haveProfit",
          rules: getRules("required"),
          children: <Checkbox
            name="haveProfit"
            required
            title='У меня есть официальный доход'
            onChange={changeInput}/>
        },
        {
          name: "paymentAmount",
          label: "Размер заработной платы с учетом налогов",
          rules: getRules("required"),
          children: <TextInput
            name={"paymentAmount"}
            onChange={e => changeInput(e.target.name, e.target.value, /[\D]+/g)}
            prefix={"₸"}
          />
        },
        {
          name: "howFindAbout",
          label: "Откуда вы узнали о Банке ВТБ (Казахстан)",
          rules: getRules("required"),
          children: <Select
            onChange={value => changeInput("howFindAbout", value)}
            data={dataSource}
          />
        },
        {
          name: "iAgree",
          rules: getRules("required"),
          children: <Checkbox
            name="iAgree"
            required
            title='Я согласен на обработку персональных данных'
            onChange={changeInput}/>
        },
      ]
    }

    const personalData = () => {
      return (
        <Form
          ref={this.personalDataForm}
          size="large"
          layout="vertical"
          className={classes.form}
        >
          {formPersonalData.items.map((el, ind) => {
            return (
              <Form.Item
                key={ind}
                fieldKey={ind}
                {...el}
              >
                {el.children}
              </Form.Item>
            )
          })}
        </Form>
      )
    }

    const passportData = () => {
      return (
        <Form
          ref={this.passportDataForm}
          size="large"
          layout="vertical"
          className={classes.form}
        >
          {formPassportData.items.map((el, ind) => {
            return (
              <Form.Item
                key={ind}
                fieldKey={ind}
                {...el}
              >
                {el.children}
              </Form.Item>
            )
          })}
        </Form>
      )
    }

    const incomeInformation = () => {
      return (
        <Form
          ref={this.incomeInformationForm}
          size="large"
          layout="vertical"
          className={classes.form}

        >
          {
            formIncomeInformation.items.map((el, ind) => {
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
          }
        </Form>
      )
    }

    const tabsItem = [
      {
        key: 1,
        label: `Личные данные`,
        children: personalData(),

      },
      {
        key: 2,
        label: `Паспортные данные`,
        children: passportData(),
      },
      {
        key: 3,
        label: `Сведения о доходах`,
        children: incomeInformation(),
      }
    ]

    const {step} = this.state;

    console.log("FORM =>", this.props.form)

    return (
      <>
        <div className={`${classes.wrapper} ${this.state.loading ? classes.loading : ""}`} >
          <h2 style={{marginBottom: 20}}>Кредит наличными</h2>
          <Card
            style={{borderRadius: 11}}
            bodyStyle={{padding: "24px 16px 32px 16px"}}
          >
            <h3>Заявка на получение кредита наличными без залога</h3>
            <p>Уважаемый клиент! Вы можете заполнить предварительную заявку на получение кредита не посещая офис Банка.</p>
            <p>Наши специалисты свяжутся с Вами и предоставят подробную консультацию, определят оптимальные условия кредитования для Вашего бюджета.</p>

            <Tabs
              //defaultActiveKey="1"
              activeKey={step}
              animated
              className={classes.tabs}
              items={tabsItem}
              onChange={id => onStepChangeTab(id, step, tabsItem.length)}/>

            <Row gutter={16} style={{marginTop:20}}>
              {
                step > 1 ?
                  <Col span={12}>
                    <PrimaryButton
                      size="small"
                      onClick={()=> onStepChange(step - 1, tabsItem.length)}
                      title={"Предыдущий шаг"}
                    />
                  </Col> : null
              }

              <Col span={step > 1 ? 12 : 24}>
                <PrimaryButton
                  size="small"
                  onClick={()=> onStepChange(step + 1, tabsItem.length, this.getFormRef(step))}
                  title={step ===  tabsItem.length ? "Отправить" : "Следующий шаг"}
                />
              </Col>
            </Row>
          </Card>

        </div>
        {
          this.state.loading && <Loader/>
        }
      </>

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
    clearForm: ()=> dispatch(clearForm())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cash);