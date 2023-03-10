import './App.module.scss';
import './fonts/sp-pro-display.css'
import {Component, useEffect} from 'react';
import Header from './components/Header';
import {useTelegram} from './hooks/useTelegram';
import classes from './App.module.scss'
import {Route, Routes, Navigate} from 'react-router-dom';
import SignIn from "./components/pages/SignIn";
import ResetPassword from "./components/pages/ResetPassword";
import Services from "./components/pages/notAutorized/Services";
import ServicesAuthorized from "./components/pages/Services";
import {connect} from "react-redux";
import Credits from "./components/pages/notAutorized/Credits/Credits";
import Cash from "./components/pages/notAutorized/Cash/Cash";
import Auto from "./components/pages/notAutorized/Auto/Auto";
import Consumer from "./components/pages/notAutorized/Consumer/Consumer";
import Transfers from "./components/pages/Transfers/Transfers";
import Payment from "./components/pages/Payment/Payment";
import IssueCard from "./components/pages/IssueCard/IssueCard";
import Accounts from "./components/pages/Accounts/Accounts";

const {tg, onToggleButton} = useTelegram();

class App extends Component {

  componentDidMount(){
    tg.ready();
  }

  render() {

    let routes = (
      <Routes>
        <Route index element={<Services/>}/>
        <Route path={"signIn"} element={<SignIn/>}/>
        <Route path={"resetPassword"} element={<ResetPassword/>}/>
        <Route path={"credits"} element={<Credits/>}/>
        <Route path={"transfers"} element={<Transfers/>}/>
        <Route path={"credits/cash"} element={<Cash/>}/>
        <Route path={"credits/auto"} element={<Auto/>}/>
        <Route path={"credits/consumer"} element={<Consumer/>}/>
      </Routes>
    )

    console.log("State =>", this.props)

    if (this.props.signIn){
      routes = (
        <Routes>
          <Route index element={<ServicesAuthorized/>}/>
          <Route path={"resetPassword"} element={<ResetPassword/>}/>
          <Route path={"transfers"} element={<Transfers/>}/>
          <Route path={"payments"} element={<Payment/>}/>
          <Route path={"issue-card"} element={<IssueCard/>}/>
          <Route path={"accounts"} element={<Accounts/>}/>
          <Route path="signIn" element={!this.props.signIn ? <SignIn/> : <Navigate to="/" replace />}
          />
        </Routes>
      )

    }

    return (
      <div className={classes.app}>
        <Header/>
        {routes}
        {/*<button onClick={onToggleButton}>toggle</button>*/}

      </div>
    );
  }
}

function mapStateToProps(state){
   return {
     signIn: state.authorization.signIn
   }
}

export default connect(mapStateToProps)(App);
