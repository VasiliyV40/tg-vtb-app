import React, {Component, useState} from 'react';

import classes from './footer.module.scss'
import {Button, Space, Modal, Row, Col} from 'antd';
import {connect} from "react-redux";
import signIn from "../../store/actions/authorization";
import ServiceButton from "../ui/buttons/ServiceButton";
import PrimaryButton from "../ui/buttons/PrimaryButton";

class Footer extends Component{

  state = {
    openModal: false
  }

  render() {

    return (
      <>
        <div className={classes.wrapper}>
          <PrimaryButton title="Выйти" onClick={this.props.signOut} />
        </div>
      </>
    )
  }
}

function mapStateToProps(state){
  return {
    loading : state.autorization.loading,
    login: state.autorization.login
  }
}

function mapDispatchToProps(dispatch){
  return {
    signOut: (tel, pass, isLogin) => dispatch(signIn(tel, pass, isLogin))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);