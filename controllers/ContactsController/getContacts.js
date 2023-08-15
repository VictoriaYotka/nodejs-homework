const ContactModel = require('../../models')
const {ctrlWrapper, HttpError} = require('../../helpers')

const getContacts = async (req, res) => {
        const data = await ContactModel.find();
        if(!data) {
        throw HttpError(400, "Not found");
        }
          // res.json({ 
          //   message: "Not found",
          //   status: 'rejected',
          //   code: 404,})
      
        res.json({ 
          message: 'Contacts got successfully',
          data,
          status: 'success',
          code: 200, })
      };


module.exports =ctrlWrapper(getContacts);