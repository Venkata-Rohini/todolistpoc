const mongoose = require('mongoose')

const Taskchema = new mongoose.Schema(
    {
        todotask :
        {
            type:String,
        },
        done :
        {
            type:Boolean,
            default:false
        },
    }
);

const Task = mongoose.model('task',Taskchema);
module.exports = Task;