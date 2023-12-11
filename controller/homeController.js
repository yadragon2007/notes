const home_index_get = (req,res) => {
  const {userData} = req.cookies
  if(userData){
    res.render('index' ,{
      user: userData
    })
  }else{
    res.redirect('/login')
  }
}

module.exports = {
  home_index_get,
}