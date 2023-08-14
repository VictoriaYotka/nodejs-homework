const { contactSchema } = require('../../schemas')
const ContactModel = require('../../models')



const addNewContact = async (req, res) => {
        const { error } = contactSchema.validate(req.body);
        if(error)
        { 
        res.json({ 
          message: "Missing required name field",
          status: 'rejected',
          code: 400,})
        }
        const data = await ContactModel.create(req.body);
        res.json({ 
          message: 'Contactc successfully added',
          data,
          status: 'success',
          code: 201,
        }) 
      };


module.exports = addNewContact;