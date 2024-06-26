import mongoose from 'mongoose';


const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' ,required: true},
  suggestion: { type: mongoose.Schema.Types.ObjectId, ref: 'Suggestion', required:true },
  creationDate: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;