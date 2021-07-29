const {gql} = require('apollo-server-express');
const typeDefs = gql`

type Post{
    id:ID
    title:String,
    description:String
}
type Query {
    hello:String,
    getAllPosts:[Post],
    getPostById(id:String):Post
}

input PostInput
{
title:String,
description:String
}

type Mutation
{
    createPost(title:String,description:String):Post
    getPostId(id:String):Post
    deletePost(id:String):String
    updatePost(id:String,post:PostInput):Post
}
`;


module.exports = typeDefs;      