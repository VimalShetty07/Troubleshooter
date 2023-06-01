const user = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//Register a user
exports.registerUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const users = await user.create({ name, email, password });

		
		sendToken(users,200,res)
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};


//lOGIN A USER
exports.loginUser = async(req,res,next) => {
	try{
	
		const {  email, password } = req.body;

		if(!email || !password){
			return res.status(403).json({
				message:errors
			});
		}
		const users = await user.findOne({email}).select("+password")
		if (!users){
			return res.status(500).json({ message: 'No Such User'});
		}
		
		
		const isPAsswordMatched = await users.comparePassword(password);
		


		if (!isPAsswordMatched) {
			return res.status(500).json({ message: "Email or Password is wrong" });
		}
		return sendToken(users,200,res)
		} catch(err){
			res.status(500).json({
				message: err.message
			})
		}

	
}




//Logout User
exports.logoutUser = async(req,res)=>{
	res.cookie("token",null,{
		expires: new Date(Date.now()),
		httpOnly: true
	})


	res.status(200).json({
	success:true,
	message:"Loged Out"
})
}



//User Details

exports.getUserDetails = async(req,res,next)=>{
	try{
		
	const users = await user.findById(req.user.id)
	res.status(200).json({
		success:true,
		users
	})}catch(err){
		message:err.message
	}
}
