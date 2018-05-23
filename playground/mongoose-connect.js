var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.Promise=global.Promise;
var todo=mongoose.model('Todo',{
  name:{
    type:String
  },
  completed:Boolean,
completedAt:Number});

var newTodo= new todo({name:'Tharaka ramu',completed:'false'});
newTodo.save().then((res)=>{
  console.log(res);
},(e)=>{
  console.log(e);
});
