const Joi = require('joi')

const validationReg = (data)=>{
    const schema = Joi.object({
        user_name: Joi.string().min(5).required(),
        //email: Joi.string().email().required(),
        password: Joi.string().min(10).required(),
    });
    return schema.validate(data);
}
module.exports = validationReg;