const { contactSchema } = require('../../schemas')
const { ContactModel } = require('../../models')
const {ctrlWrapper, HttpError} = require('../../helpers')

const editContactById = async (req, res) => {
        const {contactId} = req.params;
        const { error } = contactSchema.validate(req.body);
        if(error)
        { 
        // res.json({ 
        //   message: "Missing fields",
        //   status: 'rejected',
        //   code: 400,
        // })
          throw HttpError(400, "Missing fields");
        
        }

        const data = await ContactModel.findByIdAndUpdate(contactId, req.body, { new: true })
        // data === null 
        // ? 
        // res.json({ 
        //   message: "Not found",
        //   status: 'rejected',
        //   code: 404,
        // })
        // :
        if(!data) {
          throw HttpError(400, "Missing fields");
        }
        res.json({ 
          message: 'Contact successfully updated',
          data,
          status: 'success',
          code: 200,
        })
      };

module.exports =ctrlWrapper(editContactById);