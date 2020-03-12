module.exports = (req,res)=>{
    res.render('register',{
        //Til fejlmeddelelsen.
        errors: req.session.validationErrors
    })
}
