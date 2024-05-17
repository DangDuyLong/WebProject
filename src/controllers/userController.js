import userService from "../services/userService";

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameter!'
        })
    }

    let userData = await userService.handleUserLogin(email, password);
    console.log(userData)
    //check emaill người dùng
    // so sánh password xem có hợp lệ hay không
    // return về quyền người dùng
    // return về token: JWT bảo mật
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}

    })
}

module.exports = {
    handleLogin: handleLogin
}
