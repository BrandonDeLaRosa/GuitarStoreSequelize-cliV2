const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createTeacherValidator = [
    check("firstname", "Error in the field: FIRSTNAME.")
        .exists().withMessage("firstname must exists.")
        .notEmpty().withMessage("firstname must not be empty.")
        .isString().withMessage("firstname must be text (string). ")
        .isLength({min:3}).withMessage("firstname must have at least 3 characters."),
    check("lastname", "Error in the field: LASTNAME.")
        .exists().withMessage("lastname must exists.")
        .notEmpty().withMessage("lastname must not be empty.")
        .isString().withMessage("lastname must be text (string). ")
        .isLength({min:3}).withMessage("lastname must have at least 3 characters."),
    check("location","Error in the field: LOCATION")
        .exists().withMessage("location must exists")
        .notEmpty().withMessage("location must not be empty")
        .isString().withMessage("location must be string (text)")
        .isLength({ min: 6, max: 50 }).withMessage("location must be at least 6 characters"),
    //  check("img", "Error in the field: IMG")
    //     .exists().withMessage("img must exists")
    //     .notEmpty().withMessage("img must not be empty")
    //     .isString().withMessage("img must be string (text)")
    //     .isLength({min:5}).withMessage("password must have at least 5 characters."),
     check("schooAdminId", "Error in the field: schooAdminId")
        .exists().withMessage("schooAdminId must exists.")
        .notEmpty().withMessage("schooAdminId must not be empty.")
        .isInt().withMessage("schooAdminId must be number (Integer). ")
        .isLength({min:1}).withMessage("schooAdminId must have at least 1 character."),  
    (req,res,next) =>{
        validateResult(req,res,next)
    }
]


module.exports = {
    createTeacherValidator
}