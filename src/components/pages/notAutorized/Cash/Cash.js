import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './cash.module.scss';
import {Button, Card, Checkbox, Col, DatePicker, Form, Input, Row, Select, Space, Tabs} from 'antd';
import ServiceButton from '../../../ui/buttons/ServiceButton';
import PhoneInput from "../../../ui/inputs/PhoneInput";



class Cash extends Component {

  state = {
    step: 1
  }



  render() {
    const onStepChange = (value, maxStep) => {
      if (value > maxStep || value === 0){
        return false;
      }
      else {
        this.setState({
          step: value
        });
      }
    }

    const cityMass = [
      "Актау","Актобе","Алматы","Атырау","Караганда","Кокшетау","Костанай","Кызылорда","Астана","Павлодар","Петропавловск","Семей","Талдыкорган","Тараз","Уральск","Усть-Каменогорск","Шымкент"
    ]

    const documentType = ["Удостоверение личности", "Загранпаспорт"]

    const dataSource = ["Телевидение", "Радио", "Пресса", "Печатные материалы банка (буклеты, плакаты)", "Наружная реклама", "Интернет реклама", "Рекомендации близких, друзей, плакаты", "Уже являюсь клиентом банка ВТБ (Казахстан)", "Рекламное сообщение, письмо"]

    const { Option } = Select;

    const personalData = () => {
      return (
        <Form
          layout="vertical"
          className={classes.form}
        >
          <Form.Item label="Фамилия" required >
            <Input />
          </Form.Item>
          <Form.Item label="Имя" required >
            <Input />
          </Form.Item>
          <Form.Item label="Отчество" required >
            <Input />
          </Form.Item>
          <Form.Item label="ИНН" required >
            <Input placeholder={"0000000000"} />
          </Form.Item>
          <Form.Item label="Телефон" required >
            <Input placeholder={"+7(___)___-__-__"} />
          </Form.Item>
          <Form.Item label="Город" >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              {cityMass.map((el,ind)=>{
                return <Option key={ind} value={el}>{el}</Option>
              })}
            </Select>
          </Form.Item>
        </Form>
      )
    }

    const passportData = () => {
      return (
        <Form
          layout="vertical"
          className={classes.form}
        >
          <Form.Item label="Вид документа удостоверящего личность" required >
            <Select
              placeholder="Выберите"
              allowClear
            >
              {documentType.map((el,ind)=>{
                return <Option key={ind} value={el}>{el}</Option>
              })}
            </Select>
          </Form.Item>
          <Form.Item label="Номер документа удостоверящего личность" required >
            <Input placeholder={"0000 000000"} />
          </Form.Item>
          <Form.Item label="Дата документа удостоверящего личность" required >
            <DatePicker style={{width: "100%"}} />
          </Form.Item>
        </Form>
      )
    }

    const incomeInformation = () => {
      return (
        <Form
          layout="vertical"
          className={classes.form}
        >
          <Form.Item required >
            <Checkbox>Я не являюсь работником ИП <span style={{color: "#ff4d4f"}}>*</span></Checkbox>
          </Form.Item>
          <Form.Item required >
            <Checkbox>У меня есть официальный доход <span style={{color: "#ff4d4f"}}>*</span></Checkbox>
          </Form.Item>
          <Form.Item label={"Размер заработной платы с учетом налогов"} required >
            <Input prefix={"₸"} placeholder="50 000" />
          </Form.Item>
          <Form.Item label={"Размер заработной платы с учетом налогов"} >
            <Select
              placeholder="Выберите"
              allowClear
            >
              {dataSource.map((el,ind)=>{
                return <Option key={ind} value={el}>{el}</Option>
              })}
            </Select>
          </Form.Item>
          <Form.Item required >
            <Checkbox>Я согласен на обработку персональных данных<span style={{color: "#ff4d4f"}}>*</span></Checkbox>
          </Form.Item>
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

    const {step} = this.state

    console.log("Step => ", this.state)

    return (

      <div className={classes.wrapper}>
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
            onChange={onStepChange}/>

          <Row gutter={16}>
            {
              step > 1 ?
                <Col span={12}>
                  <Button type="primary" block onClick={()=> onStepChange(step - 1, tabsItem.length)}>
                    Предыдущий шаг
                  </Button>
                </Col> : null
            }

            <Col span={step > 1 ? 12 : 24}>
              <Button type="primary" block onClick={()=> onStepChange(step + 1, tabsItem.length)}>
                {step ===  tabsItem.length ? "Отправить" : "Следующий шаг"}
              </Button>
            </Col>
          </Row>

          {/*<Space
            direction={step > 1 ? "horizontal" : "vertical"}
            style={{
              width: '100%',
            }}
          >
            {
              step > 1 ?
                <Button type="primary" block onClick={()=> onStepChange(step - 1, tabsItem.length)}>
                  Предыдущий шаг
                </Button> : null
            }

            <Button type="primary" block onClick={()=> onStepChange(step + 1, tabsItem.length)}>
              {step ===  tabsItem.length ? "Отправить" : "Следующий шаг"}
            </Button>
          </Space>*/}

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

export default connect(mapStateToProps, mapDispatchToProps)(Cash);