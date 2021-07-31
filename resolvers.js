const Task = require("./models/Task.model");
const resolvers = {
  Query: {

    getAllToDoTask: async () => {
      return await Task.find();
    },
    getTaskById: async (parent, { id }, context, info) => {
      return await Task.findById(id);
    }
  },
  Mutation: {
    createTask: async (parent, args, context, info) => {
      const { todotask, done } = args.task;
      const task = new Task({ todotask, done });
      await task.save();
      return task;
    },
    deleteTask: async (parent, { id }, context, info) => {
      await Task.findByIdAndDelete(id);
      return true;
    },
    deleteAllTask:async (parent, args, context, info) => {
      await Task.remove();
      return true;
    },
    updateTask: async (parent, args, context, info) => {

      const { todotask, done } = args.task;
      const task = await Task.findByIdAndUpdate(
        args.id,
        { todotask, done },
        { new: true }
      );
      return task;
    }
  }
};

module.exports = resolvers;
