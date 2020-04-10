const Joi = require('@hapi/joi');

// validates post schema
const postSchemaValidator = (schema) => {
    return (req, res, next) => {
        console.log(req.body);
        const {err, val} = schema.validate(req.body);
        console.log(err, val);
        if(err === undefined){
            console.log('ssdkljflaksjdfkdjfksjdlkfjskdj');
            next();
        }else{
            console.log('Errorrrrrrrr: ', err);
            throw new Error('Schema not valid!');
            //res.status(422).json({error: err});
        }
    };
} 

module.exports = postSchemaValidator;
