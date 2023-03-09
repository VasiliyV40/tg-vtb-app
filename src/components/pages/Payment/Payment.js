import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from "../notAutorized/Services/index.module.scss";



class Payment extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h2>Платежи</h2>
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


export default connect(mapStateToProps,mapDispatchToProps)(Payment);