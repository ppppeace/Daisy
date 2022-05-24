const   express     = require('express'),
        router      = express.Router({mergeParams: true}),
        multer      = require('multer'),
        path        = require('path'),
        storage     = multer.diskStorage({
                    destination: function(req, file, callback){
                        if(file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)){
                            callback(null,'./public/upload/image/');
                        } 
                    },
                    filename:function(req, file, callback){ 
                        callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
                      }
        }),
        fileFilter = function(req, file, callback){
                if(file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)){
                    callback(null, true);
                } else{
                    return callback(new Error('Picture is Only jpg, jpeg, png and gif.'), false);
                }
            },
        upload      = multer({storage: storage, fileFilter: fileFilter}),
        User        = require('../models/user'),
        Movie       = require('../models/movie'),
        Favourite   = require('../models/favourite'),
        Pay         = require('../models/pay'),
        Theater     = require('../models/theater'),
        Showtime    = require('../models/showtime'),
        Comment     = require('../models/comment'),
        passport    = require('passport');

//userprofiled
router.get('/:id', function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err){
            req.flash('error', 'Something went wrong.')
            res.redirect('/');
        }else{
            Comment.find().where('author.id').equals(foundUser._id).exec(function(err, foundComment){
                if(err){
                    req.flash('error', 'Something went wrong.');
                    res.redirect('/');
                }else{
                    Movie.find({}).populate('comments').exec(function(err, foundMovie){
                        if(err){
                            req.flash('error', 'Something went wrong.');
                            res.redirect('/');
                        }else{
                            Theater.find({}, function(err, foundTheater){
                                if(err){
                                    req.flash('error', 'Something went wrong.');
                                    res.redirect('/');
                                }else{
                                    Favourite.find({user: foundUser._id}, function(err, foundFavourite){
                                        if(err){
                                            req.flash('error', 'Something went wrong.')
                                            res.redirect('/');
                                        }else{
                                            Pay.find().where('user.id').equals(foundUser._id).exec(function(err, foundPay){
                                                if(err){
                                                    req.flash('error', 'Something went wrong.')
                                                    res.redirect('/');
                                                }else{
                                                    foundPay.sort((a, b) => (a.time > b.time) ? -1 : 1);
                                                    res.render('user/show.ejs', {user: foundUser, comments: foundComment, movie: foundMovie, favourite: foundFavourite, pay: foundPay, theater: foundTheater});
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });

           


                    
            //         
            //                 Favourite.find({user: foundUser._id}, function(err, foundFavourite){
            //                     if(err){
            //                         req.flash('error', 'Something went wrong.')
            //                         res.redirect('/');
            //                     }else{
            //                         Pay.find().where('user.id').equals(foundUser._id).exec(function(err, foundPay){
            //                             if(err){
            //                                 req.flash('error', 'Something went wrong.')
            //                                 res.redirect('/');
            //                             }else{
            //                                 foundPay.sort((a, b) => (a.time > b.time) ? -1 : 1);
            //                                 res.render('user/show.ejs', {user: foundUser, movie: foundMovie, favourite: foundFavourite, pay: foundPay, theater: foundTheater});
            //                             }
            //                         });
            //                     }
            //                 });
            //             }
            //         });
                    
            //     }
            // });
        }
    });
});

//edit
router.get('/:id/edit', function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err){
            req.flash('error', err.message);
            res.redirect('/');
        } else {
            res.render('user/edit.ejs',{user: foundUser});
               }   
        });
});

//update
router.put('/:id', upload.single('profileImage'), function(req, res){
    if(req.file){
        req.body.user.profileImage = '/upload/image/'+ req.file.filename;
    }
    User.findByIdAndUpdate(req.params.id, req.body.user, function(err, updatedUser){
        if(err){
            req.flash('error', 'Edit failed.');
            res.redirect('back');
        } else {
            req.flash('success', 'Edit success.');
            res.redirect('/user/' + req.params.id );
        }
    })
})

module.exports = router;