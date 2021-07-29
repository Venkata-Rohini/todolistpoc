const Post = require("./models/Post.model");
const resolvers = {
  Query: {
    hello: () => {
      return "hello working GQL";
    },

    getAllPosts: async () => {
      return await Post.find();
    },
    getPostById: async (parent, { id }, context, info) => {
      return await Post.findById(id);
    }
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, description } = args;
      const post = new Post({ title, description });
      console.log(post);
      await post.save();
      return post;
    },
    deletePost: async (parent, { id }, context, info) => {
      await Post.findByIdAndDelete(id);
      return "ok";
    },
    updatePost: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description } = args.post;
      const post = await Post.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      return post;
    }
  }
};

module.exports = resolvers;
