
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import './MedicalFacility.scss';

class MedicalFacility extends Component {

    render() {

        return (
            <div className="section-share section-medical-facility">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Cơ sở y tế </span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility" />

                                <div>Cơ sở y tế1</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility" />
                                <div>Cơ sở y tế2</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility" />
                                <div>Cơ sở y tế3</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility" />
                                <div>Cơ sở y tế4</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility" />
                                <div>Cơ sở y tế5</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility" />
                                <div>Cơ sở y tế6</div>
                            </div>

                        </Slider>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
