/**
 * Created by EricDkim on 2/7/16.
 */

var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    link: String,
    upvotes: {type: Number, default: 0},
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

PostSchema.methods.upvote = function(cb) {
    this.upvotes += 1;
    this.save(cb);
};

PostSchema.methods.downvote = function (cb) {
    this.upvotes -= 1;
    this.save(cb);
};

PostSchema.methods.remove = function (cb) {
    this.remove(post);
    this.save(cb);
}

mongoose.model('Post', PostSchema);
