import './App.module.scss';
import './fonts/sp-pro-display.css'
import {Component, useEffect} from 'react';
import {useTelegram} from './hooks/useTelegram';
import classes from './App.module.scss'
import {Route, Routes, Navigate} from 'react-router-dom';
import {connect} from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from "./components/pages/Register";

const {tg, onToggleButton} = useTelegram();

class App extends Component {

  componentDidMount(){
    tg.ready();
  }

  render() {

    let routes = (
        <Routes>
          <Route index element={<Register/>}/>
        </Routes>
    )

    return (
      <div className={classes.app}>
          {routes}
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
