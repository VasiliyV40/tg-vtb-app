import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from '../Services/index.module.scss';
import {Col, Row} from 'antd';
import ServiceButton from '../../../ui/buttons/ServiceButton';



class Cash extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h2>Кредит наличными</h2>
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