import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from "react-redux";
<<<<<<< HEAD
import DatePicker, * as actions from "../../../components/Input/DatePicker";
import { LANGUAGES } from '../../../utils';
import './ManageSchedule.scss';


class ManageSchedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listDoctors: [],
            selectedDoctors: {},
            currentDate: '',
            rangeTime: []
        }
    }
    componentDidMount() {
        this.props.fetchAllDoctors();
        this.props.fetchAllScheduleTime();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
=======
import './ManageSchedule.scss';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import DatePicker, * as actions from "../../../components/Input/DatePicker";
import moment from 'moment';
import { divide, range } from 'lodash';
import { render } from 'node-sass';
import { LANGUAGES } from '../../../utils';
import { fetchAllDoctors } from '../../../store/actions';
import { act } from 'react';


class ManageSchedule extends Component {
    constructor(props){
        super(props);

        this.state ={
            listDoctors : [],
            selectedDoctors: {},
            currentDate: '',
            rangeTime : []
        }
    }
    componentDidMount(){
        this.props.fetchAllDoctors();
        this.props.fetchAllScheduleTime();
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.allDoctors !== this.props.allDoctors){
>>>>>>> de97cd27a8a5a78717e1e664753c131d26560063
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors)
            this.setState({
                listDoctors: dataSelect
            })
        }
    }

    buildDataInputSelect = (inputData) => {
        let result = [];
        let { language } = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                let labelVi = `${item.lastName} ${item.firstName}`;
                let labelEn = `${item.firstName} ${item.lastName}`;

                object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                object.value = item.id;
                result.push(object)
            })

        }

        return result;
    }

    handleChangeSelect = async (selectedOption) => {
<<<<<<< HEAD
        this.setState({ selectedDoctor: selectedOption });
=======
        this.setState({ selectedDoctor : selectedOption});
>>>>>>> de97cd27a8a5a78717e1e664753c131d26560063
    }

    handleOnchangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        })
    }

    render() {
        console.log('Webproject check status: ', this.state)
<<<<<<< HEAD
        let { rangeTime } = this.state;
        let { language } = this.props;
        return (
            <div className="manage-schedule-container">
                <div className="m-s-title">
                    <FormattedMessage id="manage-schedule.title" />
=======
        let {rangeTime} = this.state;
        let {language} = this.props;
        return(
            <div className="manage-schedule-container">
                <div className="m-s-title">
                    <FormattedMessage id="manage-schedule.title"/>
>>>>>>> de97cd27a8a5a78717e1e664753c131d26560063
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 from-group">
                            <label> <FormattedMessage id="manage-schedule.choose-doctor" /> </label>
<<<<<<< HEAD
                            <select
                                value={this.state.selectedDoctor}
                                onChange={this.handleChangeSelect}
                                options={this.state.listDoctors}
                            />
                        </div>
                        <div className="col-6 form-group">
                            <label> <FormattedMessage id="manage-schedule.choose-date" /></label>
                            <DatePicker
                                onChange={this.handleOnchangeDatePicker}
                                className="form-control"
                                value={this.state.currentDate}
                                minDate={new Date()}
=======
                            <select 
                            value={this.state.selectedDoctor}
                            onChange={this.handleChangeSelect}
                            options={this.state.listDoctors}
                            />
                        </div>
                        <div className="col-6 form-group">
                            <label> <FormattedMessage id ="manage-schedule.choose-date"/></label>
                            <DatePicker
                                onChange={this.handleOnchangeDatePicker}
                                className = "form-control"
                                value={this.state.currentDate}
                                minDate = {new Date()}
>>>>>>> de97cd27a8a5a78717e1e664753c131d26560063
                            />
                        </div>
                        <div className="col-12 pick-hour-container">
                            {rangeTime && rangeTime.length > 0 &&
                                rangeTime.map(item, index) => {
                                    return(
<<<<<<< HEAD
                            <button className="btn btn-schedule" key={index}>
                                {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                            </button>
                            )
                                }
                            }

                        </div>
                        <div className="col-12">
                            <button className=" btn btn-primary btn-save-schedule">
                                <FormattedMessage id="manage-schedule.save" />
=======
                                        <button className="btn btn-schedule" key={index}>
                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                        </button>
                                    )
                                }
                            }
    
                        </div>
                        <div className="col-12">
                            <button className=" btn btn-primary btn-save-schedule">
                                <FormattedMessage id ="manage-schedule.save"/>
>>>>>>> de97cd27a8a5a78717e1e664753c131d26560063
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 


const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
<<<<<<< HEAD
        language: state.app.language,
        allDoctors: state.admin.allDoctors,
        allScheduleTime: state.admin.allScheduleTime,
=======
        language:state.app.language,
        allDoctors: state.admin.allDoctors,
        allScheduleTime:state.admin.allScheduleTime,
>>>>>>> de97cd27a8a5a78717e1e664753c131d26560063
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
        fetchAllScheduleTime: () => dispatch(actions.fetchAllScheduleTime()),
<<<<<<< HEAD
    };
=======
    }; 
>>>>>>> de97cd27a8a5a78717e1e664753c131d26560063
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
