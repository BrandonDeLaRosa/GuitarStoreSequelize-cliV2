const {check,param} = require('express-validator');
const validateResult = require('../utils/validate');



const createSchoolAdminValidator = [
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
    check("email","Error in the field: EMAIL")
        .exists().withMessage("email must exists")
        .notEmpty().withMessage("email must not be empty")
        .isString().withMessage("email must be string (text)")
        .isLength({ min: 6, max: 50 }).withMessage("email must be at least 6 characters") //? a@.com
        .isEmail().withMessage('email must have a correct format.'),
     check("password", "Error in the field: PASSWORD")
        .exists().withMessage("password must exists")
        .notEmpty().withMessage("password must not be empty")
        .isString().withMessage("password must be string (text)")
        .isLength({min:5}).withMessage("password must have at least 5 characters.")   ,   
    (req,res,next) =>{
        validateResult(req,res,next)
    }
]

const updateSchoolAdminValidator = [
   param("id").exists().withMessage("The id must be provided(it must be a number)"),
   check("email","The email cannot be changed")
        .not().exists(),
   check("password","The password cannot be changed").not().exists(),
   (req,res,next) =>{
    validateResult(req,res,next)
}
];

module.exports = {
    createSchoolAdminValidator,
    updateSchoolAdminValidator
};