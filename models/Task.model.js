const mongoose = require('mongoose')

const Taskchema = new mongoose.Schema(
    {
        todotask :
        {
            type:String,
            required:true,
        },
        done :
        {
            type:Boolean,

        },
    }
);

const Task = mongoose.model('task',Taskchema);
module.exports = Task;