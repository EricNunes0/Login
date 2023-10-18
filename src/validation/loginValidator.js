const { body, sanitizeBody } = require("express-validator");

exports.form = [
     /* Validação de e-mail */
     body("email").trim().notEmpty().withMessage("Você não preencheu o seu e-mail!").normalizeEmail({gmail_remove_dots: false})
     .isEmail().withMessage("Insira um e-mail válido!"),
     
     /* Validação de senha */
     body("password").trim().notEmpty().withMessage("Você não preencheu a senha!")
     .isLength({min: 8}).withMessage("Sua senha precisa ter pelo menos 8 caracteres!")
     .matches(/(?=.*?[A-Z])/).withMessage("Sua senha precisa ter pelo menos 1 letra maiúscula!")
     .matches(/(?=.*?[a-z])/).withMessage("Sua senha precisa ter pelo menos 1 letra minúscula!")
     .matches(/(?=.*?[0-9])/).withMessage("Sua senha precisa ter pelo menos 1 número!")
     .matches(/(?=.*?[#?!@$%^&*-])/).withMessage("Sua senha precisa ter pelo menos 1 caractere especial!")
     .not().matches(/^$|\s+/).withMessage("Espaços não são permitidos na senha!")
]