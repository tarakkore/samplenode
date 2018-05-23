const MongoClient=require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,db)=>{
//   if(err){
//     return console.log("Unable to connect to mongodb server");
//   }
//   console.log("Connected to Mongodb server");
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err)
  //   console.log(err);
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //
  //
  // });


MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},function(err,db){
 if(err){
   return 'Error Occured...unable to create a connection';
 }
 // console.log('connection established...');
 //
 db.collection('Todos').insertOne({
   text:'this one is completed',
   completed: true
 },function(err,result){
   if(err){
     return 'Error Occured...unable to create a Todo';
   }
   console.log(JSON.stringify(result.ops,undefined,2));
 });

 db.collection('Users').insertOne({
   name:'Tharaka ramu',
   Location: 'Hyderabad',

 },function(err,result){
   if(err){
     return 'Error Occured...unable to create a Todo';
   }
   console.log(JSON.stringify(result.ops,undefined,2));
 });

  db.close();
});
