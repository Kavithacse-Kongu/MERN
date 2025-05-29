exports.getRoute=(req,res)=>{
    res.json({
       message:"Get request work"
    })
}

exports.postRoute=(req,res)=>{
    const name=req.body.name
   /* res.json({
       message:"post request work"
    })*/
   res.send(`I am ${name}`)
}

exports.putRoute=(req,res)=>{
    res.json({
       message:"put request work"
    })
}