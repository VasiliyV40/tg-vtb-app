import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from "../Services/index.module.scss";



class Auto extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h2>Автокредит</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(Auto);