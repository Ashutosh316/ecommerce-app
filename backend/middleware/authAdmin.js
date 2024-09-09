const Users = require('../models/usermodel')

const authAdmin =async(req,res,next)=>{
    try {
        const user = await Users.findOne({
            _id : req.user.id //banda JO HAI USER USKA JO ROLE HAI VO ADMIN KA HAI YA NI
        })

        if(user.role===0)
            return res.status(400).json({msg:"Admin Resources Access Denied"})
        next()
    } catch (error) {
        return res.status(500).json({msg:err.message})
    }
}

module.exports = authAdmin