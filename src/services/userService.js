import axios from '../axios';

const handleLoginApi = (userEmail, userPassword) => {

    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId) => {
    //template string
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
    console.log('check data from service', data)
    return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user'. string)
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    })

}

const editUserService = (inputData) => {
    return axios.put('api/edit-user', inputData);
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}
const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}
const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`)
}

const saveDetailDoctorService = (data) => {
    return axios.post('/api/save-infor-doctors', data)

}
const getDetailInforDoctor = (inputId) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`)

}
const createNewSpecialty = (data) => {
    return axios.post('/api/create-new-specialty', data)

}
const getAllSpecialty = () => {
    return axios.get(`api/get-all-specialty`)
}
const saveBulkScheduleDoctor = (data) => {
    return axios.post('/api/bulk-create-schedule', data)

}

const getScheduleDoctorByDate = (doctorId, data) => {
    return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${Date}`)

}

export {
    createNewSpecialty, createNewUserService, deleteUserService,
    editUserService, getAllCodeService, getAllDoctors, getAllSpecialty, getAllUsers, getDetailInforDoctor,
    getTopDoctorHomeService, handleLoginApi, saveBulkScheduleDoctor, saveDetailDoctorService, getScheduleDoctorByDate
};

