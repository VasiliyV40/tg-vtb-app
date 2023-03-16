import React, {Component} from 'react';
import {connect} from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SlideItem from "./SlideItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './slider.module.scss'

class Slider extends Component {
  render() {
    const settings = {
      responsive: {
        0: { items: 3 }
      },
      paddingLeft:8,
      paddingRight:8
    };

    const handleDragStart = (e) => e.preventDefault();

    const {data} = this.props;

    return (
      <div className={classes.wrapper}>
        <AliceCarousel mouseTracking {...settings} items={data.map((el, key )=>{
          return (
            <SlideItem key={key} {...el} onDragStart={handleDragStart} />
          )
        })}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(Slider);