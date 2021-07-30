const {gql} = require('apollo-server-express');
const typeDefs = gql`

type Task{
    id:ID
    todotask:String,
    done:Boolean
}
type Query {
    getAllToDoTask:[Task],
    getTaskById(id:String):Task
}

input Tasknput
{
    todotask:String,
    done:Boolean
}

type Mutation
{
    createTask(task:Tasknput):Task
    deleteTask(id:String):Boolean
    updateTask(id:String,task:Tasknput):Task
    deleteAllTask:Boolean
}
`;

module.exports = typeDefs;      