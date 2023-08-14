const ContactModel = require('../../models')


const getContacts = async (req, res) => {
        const data = await ContactModel.find();
        data === null 
        ? 
          res.json({ 
            message: "Not found",
            status: 'rejected',
            code: 404,})
        :
        res.json({ 
          message: 'Contacts got successfully',
          data,
          status: 'success',
          code: 200, })
      };


module.exports = getContacts;