const { default: mongoose, Schema } = require("mongoose");

const Scheman = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    } 
},{
    timeStamp:true
}
)

const TodoModel =mongoose.models.todo || mongoose.model('todo',Scheman);

export default TodoModel;