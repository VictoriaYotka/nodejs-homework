const ContactModel = require('../../models')
const {ctrlWrapper, HttpError} = require('../../helpers')

const getContacts = async (req, res) => {
  const { _id: owner } = req.user;
        const data = await ContactModel.find({ owner });
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