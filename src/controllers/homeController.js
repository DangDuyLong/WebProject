import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();

        return res.render("homePage.ejs", {
            data: JSON.stringify(data)
        });

    } catch (e) {
        console.log(e);
    }
}
let getAbout = (req, res) => {
    return res.render("test/about.ejs");
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('Post CRUD from server');
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        //check userdata not found


        //let userData
        return res.render('editCRUD.ejs', {
            user: userData
        });
    }
    else {
        return res.send('User not found');
    }


}
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUser
    });
}
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send('Delete user success');
    }
    else {
        return res.send('User not found');
    }




}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAbout,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
<<<<<<< HEAD
    deleteCRUD: deleteCRUD,
}
=======
    deleteCRUD: deleteCRUD

}
>>>>>>> 47c5e55d30ac2a16c561244668481a403d6b3e5d
