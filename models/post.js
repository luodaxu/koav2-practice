import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const PostSchema = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

PostSchema.statics.all = function() {
    return this.find({}).populate('author').exec();
};

const Post = mongoose.model('Post', PostSchema);
export default Post;
