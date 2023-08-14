const ContactModel = require('../../models')


const deleteContactById = async (req, res) => {
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


module.exports = deleteContactById;