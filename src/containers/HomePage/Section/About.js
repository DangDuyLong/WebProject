import React, { Component } from 'react';
import { connect } from 'react-redux';


//import specialtyImg from "../../../assets/Specialty/khoa-ngoai.jpeg";

class About extends Component {

    render() {


        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói về Phenikaa Mec
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="90%" height="400px"
                            src="https://www.youtube.com/embed/WIKadHHahTs"
                            title="Phenikaa University - English Sub"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div className="content-right">

                        <p>Sở hữu thế mạnh về nền tảng đào tạo nguồn nhân lực Y – Dược và Nghiên cứu khoa học, Tập đoàn Phenikaa phát triển hệ sinh thái khép kín trong lĩnh vực Chăm sóc sức khỏe với 4 mảng: Giáo dục và Đào tạo – Chăm sóc sức khỏe – Sản xuất kinh doanh – Công nghệ và chuyển giao với:</p>
                        <ul>
                            <li>01 Bệnh viện Đại học Phenikaa.</li>
                            <li>02 Phòng khám Đa khoa Đại học Phenikaa.</li>
                            <li>01 Phòng khám Răng Hàm Mặt Đại học Phenikaa</li>
                        </ul>
                        <p>Bệnh viện Đại học Phenikaa được xây dựng theo mô hình BV không tường (Hospital Without Walls) với 3 cấu phần: Bệnh viện thông minh, hệ thống phòng khám vệ tinh và các đội chăm sóc sức khoẻ tại nhà, kết nối với nhau bằng hệ thống Y tế từ xa. Hệ thống Y tế Phenikaa với Bệnh viện Đại học là hạt nhân chính trở thành 1 mắt xích quan trọng trong các hoạt động kinh doanh của Tập đoàn.</p>

                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
