import MarkdownIt from 'markdown-it';
import React, { Component } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { createNewClinic } from '../../../services/userService';
import { CommonUtils } from '../../../utils';
import './ManageClinic.scss';



const mdParser = new MarkdownIt(/* Markdown-it options */);


class ManageClinic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            imageBase64: '',
            descriptionHTML: '',
            descriptionMarkdown: '',
        }
    }

    async componentDidMount() {

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            //await this.getSpecialtyList();
        }
    }

    handleOnChangeInput = (event, id) => {
        let stateCopy = { ...this.state };
        stateCopy[id] = event.target.value;
        this.setState({
            ...stateCopy
        });
    }
    handleEditorChange = ({ html, text }) => {
        this.setState({
            descriptionHTML: html,
            descriptionMarkdown: text,
        })
    }
    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);

            this.setState({
                imageBase64: base64
            })
        }
    }
    handleSaveNewClinic = async () => {

        let res = await createNewClinic(this.state)
        if (res && res.errCode === 0) {
            toast.success('Tạo mới thành công');
            this.setState({
                name: '',
                imageBase64: '',
                address: '',
                descriptionHTML: '',
                descriptionMarkdown: '',
            })
        } else {
            toast.error('Tạo mới thất bại')
            console.log('error', res);

        }

        console.log('data save', this.state);
    }


    render() {
        return (
            <div className="manage-specialty-container">
                <div className="ms-title">Quản lý phòng</div>

                <div className="add-new-specialty row">
                    <div className="col-6 form-group">
                        <label>Tên phòng khám</label>
                        <input type="text" className="form-control" value={this.state.name}
                            onChange={(event) => this.handleOnChangeInput(event, 'name')}

                        />
                    </div>
                    <div className="col-6 form-group">
                        <label>Ảnh phòng khám</label>
                        <input type="file" className="form-control-file"
                            onChange={(event) => this.handleOnchangeImage(event)}
                        />
                    </div>
                    <div className="col-6 form-group">
                        <label>Địa chỉ phòng khám</label>
                        <input type="text" className="form-control" value={this.state.address}
                            onChange={(event) => this.handleOnChangeInput(event, 'address')}

                        />
                    </div>
                    <div className="col-12">
                        <MdEditor
                            style={{ height: '300px' }}
                            renderHTML={text => mdParser.render(text)}
                            onChange={this.handleEditorChange}
                            value={this.state.descriptionMarkdown}
                        />
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn-save-specialty"
                            onClick={() => this.handleSaveNewClinic()}
                        >Save</button>
                    </div>

                </div>


            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageClinic);
