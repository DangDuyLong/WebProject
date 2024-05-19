
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {

        return (
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                        <i className="fas fa-bars"></i>
                        <div className="header-logo"></div>
                    </div>
                    <div className="center-content">
                        <div className="child-content">
                            <div><b>Chuyên Khoa</b></div>
                            <div className="sub-title">Tìm Bác sĩ theo chuyên khoa</div>
                        </div>
                        <div className="child-content">
                            <div><b>Cơ Sở Y Tế</b></div>
                            <div className="sub-title">Chọn Bệnh viện phòng khám</div>
                        </div>
                        <div className="child-content">
                            <div><b>Bác Sĩ</b></div>
                            <div className="sub-title">Chọn Bác Sĩ Giỏi </div>
                        </div>
                        <div className="child-content">
                            <div><b>Gói Khám</b></div>
                            <div className="sub-title">Khám Sức Khỏe Tổng Quát</div>
                        </div>

                    </div>
                    <div className="right-content">
                        <div className="support"><i className="fas fa-question-circle"></i> Hỗ Trợ</div>
                        <div className="flag">VN</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
