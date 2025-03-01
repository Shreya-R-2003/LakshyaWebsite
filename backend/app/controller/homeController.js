const utils = require('../utils');

const homeController = async (req,res)=>{
    if (await req.session.user) {
        const username = req.session.user.username;
        const group = req.session.user.group

        res.status(200).json({
            message:"SUCCESS",
            username:username,
            group:group,
        })
      } else {
        res.status(401).json({message:"FAILURE"})
      }
}

module.exports = homeController