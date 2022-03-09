const User = require('../model/user.model');

module.exports.getUsers = async(request,response)=>{

    try {
        let userGetAll = await User.find();
        response.status(201).json(userGetAll);
           
       } catch (error) {
        response.status(409).json({ message: error.message}); 
       }}

module.exports.addUser = async (request,response)=>{
   const userFrontendData = request.body;
   const newUser = new User(userFrontendData);

   try {
    await newUser.save();
    response.status(201).json(newUser);
       
   } catch (error) {
    response.status(409).json({ message: error.message}); 
   }
}

module.exports.getUserById= async(request,response)=>{
    const id = request.params.id;
    try {
        const user = await User.findById(id);
        response.status(201).json(user);
           
       } catch (error) {
        response.status(409).json({ message: error.message}); 
       }
}

module.exports.editUser=async(request,response)=>{
    const userFrontendData2 = request.body;
    const editUser = new User(userFrontendData2);

    try {
        await User.updateOne({_id:request.params.id},editUser);
        response.status(201).json(editUser);
           
       } catch (error) {
        response.status(409).json({ message: error.message}); 
       }
}

module.exports.deleteUser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}