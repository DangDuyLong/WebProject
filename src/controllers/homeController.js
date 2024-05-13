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
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAbout,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}