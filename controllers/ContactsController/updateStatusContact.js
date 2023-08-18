const { contactFavoriteSchema } = require('../../schemas')
const { ContactModel } = require('../../models')
const {ctrlWrapper} = require('../../helpers')

const updateStatusContact = async (req, res) => {
        const {contactId} = req.params;
        const { error } = contactFavoriteSchema.validate(req.body);
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
          message: "missing field favorite",
          status: 'rejected',
          code: 400,
        })
        :
        res.json({ 
          message: 'Contact favorite successfully updated',
          data,
          status: 'success',
          code: 200,
        })
};

module.exports =ctrlWrapper(updateStatusContact);