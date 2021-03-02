const axios= require('axios');
//GET
axios.get ('https://jsonplaceholder.typicode.com/photos')
    .then(res => console.log(res.data));
//POST 
axios.post("https://jsonplaceholder.typicode.com/photos",{
    albunmId:"1",
    id:"100",
    title:"Hello Aurangabad"

})
.then (res=>{
   console.log(res.data);
})
//PUT
axios.put("https://jsonplaceholder.typicode.com/photos/1",{
    albumId:"1",
    id:"5002",
   title:"Hello Mumbai"
})
  .then (res=>{
  console.log(res.data);
})
//DELETE
axios.delete("https://jsonplaceholder.typicode.com/photos/1")
    .then (res=>{
    console.log(res.data);
});
//PATCH
axios.patch("https://jsonplaceholder.typicode.com/photos/2",{
albumId:"1",
id:"1",
title:"Hello Nashik"
})
.then(res=> {console.log(res.data);
})