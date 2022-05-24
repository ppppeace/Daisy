const   Movie = require('../models/movie'),
        Comment = require('../models/comment'),
        User    = require('../models/user');

const   middlewareObj = {};

middlewareObj.checkMovieOwner = function(req, res, next){
    if(req.isAuthenticated()){
        Movie.findById(req.params.id, function(err, foundMovie){
            if(err){
                res.redirect('back');
            } else {
                if(req.user.isAdmin){
                    next();
                } else {
                    req.flash('error', "You do not have permission to do this action!");
                    res.redirect('back');
                }
            }
        });
    } else {
        req.flash('error', "Please login");
        res.redirect('/login');    
    }
}

middlewareObj.checkCommentOwner = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                res.redirect('back');
            } else {
                if(foundComment.author.id.equals(req.user._id)|| req.user.isAdmin){
                    next();
                } else {
                    req.flash('error', "You do not have permission to do this action!");
                    res.redirect('back');
                }
            }
        });
    } else {
        req.flash('error', "Please login");
        res.redirect('/login');    
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error', 'You need to login first');
    res.redirect('/login');
}

module.exports = middlewareObj;