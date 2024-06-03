import React, { Component } from 'react';
import { connect } from 'react-redux';


//import specialtyImg from "../../../assets/Specialty/khoa-ngoai.jpeg";

class HomeFooter extends Component {

    render() {


        return (
            <div className="home-footer">
                <p>&copy;2024 Về Chúng TÔi.  Phenikaa Mec. All Rights Reserved.</p>

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
