import React, {Component} from 'react';
import {connect} from 'react-redux';
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

  state = {
    step: 1,
    loading: false,
    formValid: []
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.step === prevState.step){
      this.personalDataForm.current.setFieldsValue({...this.props.form})
    }
  }


  render() {
    const openNotification = (placement) => {
      notification.success({
        message: "Заявка успешно отправлена",
        placement
      });
    };

    const getList = (id) => {
      switch (id) {
        case 1:return formPersonalData.items.map(el => el.name);
        case 2:return formPassportData.items.map(el => el.name);
        case 3:return formIncomeInformation.items.map(el => el.name);
      }
    }

    const onStepChange = (currentStep, nextStep, maxStep) => {
      const form = this.personalDataForm.current
      if(nextStep === currentStep + 1 && nextStep - 1 !== maxStep) {
        form.validateFields(getList(currentStep))
          .then((data)=>{
            this.setState({
              step: nextStep,
              formValid: this.state.formValid.includes(currentStep) ? [...this.state.formValid] : [...this.state.formValid, currentStep]
            })
          }).catch(error => {
            this.setState({
              formValid: this.state.formValid.filter(el => el !== currentStep)
            });
          });
      } else if (nextStep > currentStep + 1 && nextStep - 1 !== maxStep) {
        form.validateFields(getList(currentStep))
          .then(data => {
            if (this.state.formValid.includes(2)){
              this.setState({
                step: nextStep
              })
            } else {
              this.setState({
                step: currentStep + 1
              })
            }
          }).catch(err => {})
      } else if (nextStep < currentStep) {
        this.setState({
          step: nextStep
        })
      } else if (currentStep === maxStep) {
        form.validateFields()
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
              form.resetFields();
              openNotification('bottom');
            }, 3000)
          }).catch(err => {})
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
      items: [
        {
          name: "secondName",
          label: "Фамилия",
          rules: getRules("minLength"),
          children: <TextInput
            name={"secondName"}
            type="text"
            onChange={e => changeInput(e.target.name, e.target.value, /[^a-zа-яё]/gi)}
          />
        },
        {
          name: "name",
          label: "Имя",
          rules: getRules("minLength"),
          children: <TextInput
            name={"name"}
            type="text"
            onChange={e => changeInput(e.target.name, e.target.value, /[^a-zа-яё]/gi)
            }
          />
        },
        {
          name: "thirdName",
          label: "Отчество",
          rules: getRules("minLength"),
          children:
            <TextInput
              name={"thirdName"}
              type="text"
              onChange={e => changeInput(e.target.name, e.target.value, /[^a-zа-яё]/gi)}
            />
        },
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
        {
          name: "Phone",
          label: "Телефон",
          rules: getRules("phone", 10),
          children: <PhoneInput
            name={"Phone"}
            onChange={e => changeInput("Phone", e.unmaskedValue)}
          />
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
          children: <MaskInput name={"IIN"} mask={"0000-000000"} inputMode="tel" onChange={e => changeInput("documentNumber", e.unmaskedValue)}/>
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
            inputMode="tel"
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

    const personalData = (form) => {
      return (formPersonalData.items.map((el, ind) => {
        const valid = form.current ? form.current.getFieldError(el.name).length > 0 : false
        return (
          <Form.Item
            key={ind}
            fieldKey={ind}
            validateTrigger={valid ? "onChange" : "onBlur"}
            {...el}
          >
            {el.children}
          </Form.Item>
          )
      })
      )
    }

    const passportData = () => {
      return (
        formPassportData.items.map((el, ind) => {
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

    const incomeInformation = () => {
      return (

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

      )
    }

    const tabsItem = [
      {
        key: 1,
        label: `Личные данные`,
        children: personalData(this.personalDataForm)
      },
      {
        key: 2,
        label: `Паспортные данные`,
        children: passportData(this.personalDataForm)
      },
      {
        key: 3,
        label: `Сведения о доходах`,
        children: incomeInformation(this.personalDataForm)
      }
    ]

    const {step} = this.state;

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

            <Form
              ref={this.personalDataForm}
              size="large"
              layout="vertical"
              className={classes.form}
            >
              <Tabs
                activeKey={step}
                animated
                className={classes.tabs}
                items={tabsItem}
                onChange={id => onStepChange(step, id, tabsItem.length)}/>
            </Form>

            <Row gutter={16} style={{marginTop:20}}>
              {
                step > 1 ?
                  <Col span={12}>
                    <PrimaryButton
                      size="small"
                      onClick={()=> onStepChange(step,step - 1, tabsItem.length)}
                      title={"Предыдущий шаг"}
                    />
                  </Col> : null
              }

              <Col span={step > 1 ? 12 : 24}>
                <PrimaryButton
                  size="small"
                  onClick={()=> onStepChange(step,step + 1, tabsItem.length)}
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