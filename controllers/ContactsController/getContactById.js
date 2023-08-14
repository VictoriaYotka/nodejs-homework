const ContactModel = require('../../models')



const getContactById = async (req, res) => {
        const {contactId} = req.params;
        const data = await ContactModel.findById(contactId)
        data === null 
        ? 
          res.json({ 
            message: "Not found",
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

    

module.exports = getContactById;