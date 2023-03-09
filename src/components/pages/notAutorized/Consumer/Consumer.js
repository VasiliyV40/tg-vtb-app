import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from '../Services/index.module.scss';



class Consumer extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h2>Потребительские кредиты</h2>
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

export default connect(mapStateToProps,mapDispatchToProps)(Consumer);