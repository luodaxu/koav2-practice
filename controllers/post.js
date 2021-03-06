import Post from '../models/post';

const PostController = {
  all: async ctx => ctx.body = await Post.all(),
  post: async ctx => ctx.body = await new Post(ctx.request.body).save(),
  get: async ctx => ctx.body = await Post.findById(ctx.params.id),
  put: async ctx => ctx.body = await Post.findByIdAndUpdate(ctx.params.id, ctx.request.body),
  delete: async ctx => ctx.body = await Post.findByIdAndRemove(ctx.params.id),
};

export default PostController;
