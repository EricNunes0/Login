const { body, sanitizeBody } = require("express-validator");

exports.form = [
     /* Validação do primeiro nome */
     body("firstName").trim().notEmpty().withMessage("Você não preencheu o seu primeiro nome!")
     .isLength({min: 3, max: 100}).withMessage("Seu nome precisa ter entre 3 e 100 caracteres!")
     .matches(/^[a-zA-Z ]*$/).withMessage("Só são permitidos caracteres com espaço em branco!"),
     
     /* Validação do último nome */
     body("lastName").trim().notEmpty().withMessage("Você não preencheu o seu último nome!")
     .isLength({min: 3, max: 100}).withMessage("Seu último nome precisa ter entre 3 e 100 caracteres!")
     .matches(/^[a-zA-Z ]*$/).withMessage("Só são permitidos caracteres com espaço em branco!"),
     
     /* Validação de data */
     body("date").trim().notEmpty().withMessage("Você não informou sua data de nascimento!")
     .isISO8601().withMessage("Está não é uma data válida!"),
     
     /* Validação de gênero */
     body("gender").trim().notEmpty().withMessage("Você não informou o seu gênero!")
     .isIn(["M", "F", "O"]).withMessage("Gênero inválido!"),
     
     /* Validação de e-mail */
     body("email").trim().notEmpty().withMessage("Você não preencheu o seu e-mail!").normalizeEmail({gmail_remove_dots: false})
     .isEmail().withMessage("Insira um e-mail válido!"),
     
     /* Validação de telefone */
     body("phone").trim().notEmpty().withMessage("Você não preencheu o seu telefone!")
     .isMobilePhone("pt-BR").withMessage("Insira um telefone válido!"),
     
     /* Validação de senha */
     body("password").trim().notEmpty().withMessage("Você não preencheu a senha!")
     .isLength({min: 8}).withMessage("Sua senha precisa ter pelo menos 8 caracteres!")
     .matches(/(?=.*?[A-Z])/).withMessage("Sua senha precisa ter pelo menos 1 letra maiúscula!")
     .matches(/(?=.*?[a-z])/).withMessage("Sua senha precisa ter pelo menos 1 letra minúscula!")
     .matches(/(?=.*?[0-9])/).withMessage("Sua senha precisa ter pelo menos 1 número!")
     .matches(/(?=.*?[#?!@$%^&*-])/).withMessage("Sua senha precisa ter pelo menos 1 caractere especial!")
     .not().matches(/^$|\s+/).withMessage("Espaços não são permitidos na senha!")
]