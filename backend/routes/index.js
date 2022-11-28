var express = require('express');
var router = express.Router();
var Student = require('../models/student');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
  Student.countDocuments({email:req.body.email},(err, count)=>{
    if(err){
      console.log(err);
      res.status(400).send();
    }
    else if(count>0){
      console.log("In signup, Count is ",count);
      res.status(400).send({
        message:"User already exists"
      })
    }
    else {
      let newStudent = new Student();
      if(!(req.body.email && req.body.name && req.body.name && req.body.techid && req.body.gender && req.body.phno && req.body.password)){
        res.status(400).send({
          message:"bad request format"
        })
        return;
      }
      newStudent.email = req.body.email;
      newStudent.name = req.body.name;
      newStudent.techid = req.body.techid;
      newStudent.gender = req.body.gender;
      newStudent.phno = req.body.phno;
      newStudent.password = req.body.password;
      newStudent.save((err, currStudent) => {
        if(err){
          console.log(err);
          res.status(400).send();
          return;
        }
        else{
          console.log("new Student created");
          console.log(currStudent);
          res.status(200).send({
            message:"Successfully created new student record"
          })
        }
      })
    }

  })
});

module.exports = router;
