const jwt = require('jsonwebtoken');
const user = require('../models/userModel')



exports.isAuthUser = async(req,res,next) => {
    try{
    const {token} = req.cookies;
    if(!token){
        return res.status(500).json({
            message: "Login to acces this page"
        })

    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET)

    req.user = await user.findById(decodedData.id);

    next();



    }catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
}