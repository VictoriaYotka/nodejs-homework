const contactSchema = require('../schemas/contactSchema')
const ContactModel = require('../models/contactModel')

class Contacts {
    getContacts = async (req, res) => {
        const data = await ContactModel.find();
        data === null 
        ? 
          res.json({ 
            message: "Not found",
            data,
            status: 'rejected',
            code: 404,})
        :
        res.json({ 
          message: 'Contacts got successfully',
          data,
          status: 'success',
          code: 200, })
      };

    getContactById = async (req, res) => {
        const {contactId} = req.params;
        const data = await ContactModel.findById(contactId)
        data === null 
        ? 
          res.json({ 
            message: "Not found",
            data,
            status: 'rejected',
            code: 404,})
        :
          res.json({ 
            message: 'Contact got successfully',
            data,
            status: 'success',
            code: 200,
       })
      };

    deleteContactById = async (req, res) => {
        const {contactId} = req.params;
        const data = await ContactModel.findByIdAndDelete(contactId)
        data === null 
        ? 
        res.json({ 
          message: "Not found",
          status: 'rejected',
          code: 404,})
        :
        res.json({ 
          message: 'Contact successfully deleted',
          data,
          status: 'success',
          code: 200,
        
        })
      };

    addNewContact = async (req, res) => {
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

    editContactById = async (req, res) => {
        const {contactId} = req.params;
        const { error } = contactSchema.validate(req.body);
        if(error)
        { 
        res.json({ 
          message: "Missing fields",
          status: 'rejected',
          code: 400,})
        }
        const data = await ContactModel.findByIdAndUpdate(contactId, req.body, { new: true })
        data === null 
        ? 
        res.json({ 
          message: "Not found",
          status: 'rejected',
          code: 404,})
        :
        res.json({ 
          message: 'Contact successfully updated',
          data,
          status: 'success',
          code: 200,
        })
      };
}

module.exports = new Contacts();