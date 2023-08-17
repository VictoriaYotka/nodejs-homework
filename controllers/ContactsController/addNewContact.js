const { contactSchema } = require('../../schemas')
const ContactModel = require('../../models')
const {ctrlWrapper, HttpError} = require('../../helpers')

const addNewContact = async (req, res) => {
        const { error } = contactSchema.validate(req.body);
        if(error)
        { 
          throw HttpError(400, "Missing required name field");
        // res.json({ 
        //   message: "Missing required name field",
        //   status: 'rejected',
        //   code: 400,})
        }
        const { _id: owner } = req.user;
        const data = await ContactModel.create({...req.body, owner});
        if(!data) {
          throw HttpError(400, "Missing required name field");
        }
        res.json({ 
          message: 'Contactc successfully added',
          data,
          status: 'success',
          code: 201,
        }) 
      };


module.exports = ctrlWrapper(addNewContact);