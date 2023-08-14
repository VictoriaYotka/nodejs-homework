const { contactSchema } = require('../../schemas')
const ContactModel = require('../../models')

const editContactById = async (req, res) => {
        const {contactId} = req.params;
        const { error } = contactSchema.validate(req.body);
        if(error)
        { 
        res.json({ 
          message: "Missing fields",
          status: 'rejected',
          code: 400,
        })
        }
        const data = await ContactModel.findByIdAndUpdate(contactId, req.body, { new: true })
        data === null 
        ? 
        res.json({ 
          message: "Not found",
          status: 'rejected',
          code: 404,
        })
        :
        res.json({ 
          message: 'Contact successfully updated',
          data,
          status: 'success',
          code: 200,
        })
      };

module.exports = editContactById;