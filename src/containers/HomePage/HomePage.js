
import React, { Component } from 'react';
import { connect } from 'react-redux';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomeFooter from './HomeFooter';
import HomeHeader from './HomeHeader';
import './HomeHeader.scss';
import './HomePage.scss';
import About from './Section/About';
import HandBook from './Section/HandBook';
import MedicalFacility from './Section/MedicalFacility';
import OutStandingDoctor from './Section/OutStandingDoctor';
import Specialty from './Section/Specialty';

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            //nextArrow: <SampleNextArrow />,
            //prevArrow: <SamplePrevArrow />
        };
        return (
            <div>
                <HomeHeader />
                <Specialty
                    settings={settings} />
                <MedicalFacility
                    settings={settings} />
                <OutStandingDoctor
                    settings={settings} />
                <HandBook
                    settings={settings} />
                <About />
                <HomeFooter />

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
