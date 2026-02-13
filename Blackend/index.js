const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
app.use(bodyParser.json())

let users =[];
let counter = 1;

//ต่อสัปดาหืหน้า


app.get ('/users',(req,res)=>{
    res.json(users);
});
//path post
app.post ('/user',(req,res)=>{
    let user = req.body;
    users.push(user);
    user.id = counter
    counter +=1;
    res.json({
    message: 'User added sucess',
    user:user
    });
});
//path put
app.put('/user/;id',(req,res)=>{
    let id = res.params.id;
    let updateUser = req.body;
    // หา user จากid
    let selectedIndex = users.findIndex(user => user.id == id);
    res.send(selectedIndex+"")
    //อัพเดทข้อมูลusers
    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    users[selectedIndex].lastname = updateUser.lastnamename || users[selectedIndex].lastname;
    res.json({
        message:'User update success',
        data:{
             user:updateUser,
             indexUpdate: selectedIndex
        }
    });
//if(user.id == id){
  //          return true
    //    }else{
      //      return false
        //}
app.delete('/user/:id',(req,res)=>{
    let id = req.params.id;
     let selectedIndex = users.findIndex(user => user.id == id);
     delete users[selectedIndex];
     res.json({
            message:'USer deleate success',
            indexDelete: selectedIndex
     });
})
})

app.listen(port,()=>{
    console.log('Server runing on http://localhost:${port}');
});
