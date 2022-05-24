const   express     = require('express'),
        router      = express.Router(),
        multer      = require('multer'),
        path        = require('path'),
        storage     = multer.diskStorage({
                    destination: function(req, file, callback){
                        if(file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)){
                            callback(null,'./public/upload/image/');
                        } else if(file.originalname.match(/\.(mp4)$/i)){
                            callback(null,'./public/upload/trailer/');
                        }
                        
                    },
                    filename:function(req, file, callback){ 
                        callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
                      }
        }),
        fileFilter = function(req, file, callback){
                if(file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)){
                    callback(null, true);
                }
                else if(file.originalname.match(/\.(mp4)$/i)){
                    callback(null, true);
                } else{
                    return callback(new Error('Picture is Only jpg, jpeg, png and gif. Trailer is Only mp4.'), false);
                }
            },
        upload      = multer({storage: storage, fileFilter: fileFilter}),
        middleware  = require('../middleware'),
        User        = require('../models/user'),
        Movie       = require('../models/movie'),
        Cinema      = require('../models/cinema'),
        Comment       = require('../models/comment'),
        Theater       = require('../models/theater'),
        Showtime      = require('../models/showtime'),
        Pay          = require('../models/pay'),
        Favourite     = require('../models/favourite'),
        passport    = require('passport');

//movie is now 
router.get('/', function(req, res){
    Movie.find({status: "now"}, function(err, movieLists){
        if(err){
            req.flash('error', err.message);;
            res.redirect('/');
        }else{
            movieLists.sort((a, b) => (a.date > b.date) ? -1 : 1);
            res.render('movie/movieisnow.ejs', {movies: movieLists});
        }
    });
});

//sortby..
router.get('/sortByname', function(req, res){
    Movie.find({status: "now"}, function(err, movieLists){
        if(err){
            req.flash('error', err.message);
            res.redirect('/');
        }else{
            movieLists.sort((a, b) => (a.name > b.name) ? 1 : -1);
            res.render('movie/sortByname.ejs', {movies: movieLists});
        }
    });
});

router.get('/sortByrate', function(req, res){
    Movie.find({status: "now"}, function(err, movieLists){
        if(err){
            req.flash('error', err.message);
            res.redirect('/');
        }else{
            movieLists.sort((a, b) => (a.rate > b.rate) ? 1 : -1);
            res.render('movie/sortByrate.ejs', {movies: movieLists});
        }
    });
});

router.get('/sortBygenre', function(req, res){
    Movie.find({status: "now"}, function(err, movieLists){
        if(err){
            req.flash('error', err.message);
            res.redirect('/');
        }else{
            res.render('movie/sortBygenre.ejs', {movies: movieLists});
        }
    });
});

router.get('/sortBydate', function(req, res){
    Movie.find({status: "now"}, function(err, movieLists){
        if(err){
            req.flash('error', err.message);;
            res.redirect('/');
        }else{
            movieLists.sort((a, b) => (a.date > b.date) ? 1 : -1);
            res.render('movie/sortBydate.ejs', {movies: movieLists});
        }
    });
});

//movie show
router.get('/:id', function(req, res){
    Movie.findById(req.params.id).populate('comments').exec(function(err, foundMovie){
        if(err){
            req.flash('error', err.message);
            res.redirect('/movie');
        }else{
            Favourite.find({movie: foundMovie._id}, function(err, foundFavourite){
                if(err){
                    req.flash('error', err.message);
                    res.redirect('/movie');
                }else{
                    res.render('movie/show.ejs', {movie: foundMovie, favourite: foundFavourite});
                }
            });
        }
    });
});

//movie showtime
router.get('/showtime/:id', function(req, res){
    Movie.findById(req.params.id, function(err, foundMovie){
        if(err){
            req.flash('error', err.message);
            res.redirect('/movie');
        }else{
            Theater.find({}).populate(['movie', 'cinema']).exec(function(err, foundTheater){
                if(err){
                    req.flash('error', err.message);
                    res.redirect('/movie');
                }else{
                    Showtime.find({}).populate('theater').exec(function(err, foundShowtime){
                        if(err){
                            req.flash('error', err.message);
                            res.redirect('/movie');
                        }else{
                            foundShowtime.sort((a, b) => (a.time > b.time) ? 1 : -1); 
                            res.render('movie/showtime.ejs', {movie: foundMovie, theater: foundTheater, showtime: foundShowtime});
                        }
                    });
                }
            });
        }
    });
});

//movie showtime seats
router.get('/showtime/:id/:theater/:showtime', function(req, res){
    Movie.findById(req.params.id, function(err, foundMovie){
        if(err){
            req.flash('error', err.message);
            res.redirect('/movie');
        }else{
            Theater.findById(req.params.theater).populate(['movie','cinema']).exec(function(err, foundTheater){
                if(err){
                    req.flash('error', err.message);
                    res.redirect('/movie');
                }else{
                    Showtime.findById(req.params.showtime).populate('theater').exec(function(err, foundShowtime){
                        if(err){
                            req.flash('error', err.message);
                            res.redirect('/movie');
                        }else{
                            res.render('ticket/showseat.ejs', {movie: foundMovie, theater: foundTheater, showtime: foundShowtime});
                        }
                    });
                }    
            });
        }
    });
});

//payment page 
router.get('/ticketing/:id', middleware.isLoggedIn, function(req, res){
    Showtime.findById(req.params.id, function(err, foundShowtime){
        if(err){
            req.flash('error', err.message);
            res.redirect('/movie');
        }else{
            Movie.find({}, function(err, foundMovie){
                if(err){
                    req.flash('error', err.message);
                    res.redirect('/movie');
                }else{
                    Theater.find({}, function(err, foundTheater){
                        if(err){
                            req.flash('error', err.message);
                            res.redirect('/movie');
                        }else{
                            Cinema.find({}, function(err, foundCinema){
                                if(err){
                                    req.flash('error', err.message);
                                    res.redirect('/movie');
                                }else{
                                    let seatselect = req.query.seatselect;
                                    res.render('ticket/payment.ejs', {showtime: foundShowtime, seatselect: seatselect, movie: foundMovie, theater: foundTheater, cinema: foundCinema});
                                }
                            })
                            
                        }
                    });
                }
            });
        }
    });
            
});
      

//post payment page after payment
router.post('/ticketing/:id', function(req, res){
    let seatselected = req.body.seatselect;
    let seatArr = seatselected.split(',');
    seatArr.forEach(function(seatselect){
        Showtime.updateOne({  _id: req.params.id, "seats.name": seatselect},{ $set: {"seats.$.status": "Disabled"}}, function(err, updateSeat){
            if(err){
                req.flash('error', err.message);
                res.redirect('/movie');
            }else{
                console.log(updateSeat);
            }
        });
    });
    
    Pay.create(req.body.user, function(err, pay){
        if(err){
            req.flash('error', err.message);
            res.redirect('/movie');
        }else{
            pay.user.id             = req.user._id;
            pay.user.username       = req.user.username;
            pay.user.email          = req.user.email;
            pay.user.firstname      = req.user.firstname;
            pay.user.lastname       = req.user.lastname;

            pay.payment.creditno    = req.body.creditno;
            pay.payment.exp         = req.body.exp;
            pay.payment.cvv         = req.body.cvv;
            pay.payment.nameoncard  = req.body.nameoncard;
            pay.time = new Date();
            pay.payment.ptype       = req.body.paymentMethod;
                
            let seatselected        = req.body.seatselect;
            let seatArr             = seatselected.split(',');
            seatArr.forEach(function(seatselect){
                pay.seatselect.push(seatselect);
            }); 

            pay.totalprice  = req.body.sumprice;
            pay.showtime    = req.params.id;
            
            pay.save();
            req.flash('success', 'Your payment is succeed, Please enjoy.');
            res.redirect('/');
        }
    });
});

//add to favourite
router.post('/:id/favourite', middleware.isLoggedIn, function(req, res){
    Movie.findById(req.params.id, function(err, foundMovie){
        if(err){
            req.flash('error', err.message);
            res.redirect('/movie');
        }else{
            Favourite.create(req.body.movie, function(err, favourite){
                if(err){
                    req.flash('error', err.message);
                }else{
                    favourite.movie = foundMovie._id;
                    favourite.user = req.user._id;
                    favourite.save();
                    req.flash('success', 'Add to favourite succeed.');
                    res.redirect('/movie/'+ foundMovie._id);
                }
            });
        }
    });
});
//delete from favourite
router.delete('/:id/favourite', middleware.isLoggedIn, function(req, res){
    Favourite.findOneAndRemove({movie: req.params.id, user: req.user._id}, function(err){
        if(err){
            req.flash('error', err.message);
            res.redirect('/movie');
        }else{
            req.flash('success', 'Remove from favourite succeed.');
            res.redirect('/movie/' + req.body.movies);
        }
    });
});

router.get("/:id/edit", middleware.checkMovieOwner, function(req, res){
    Movie.findById(req.params.id, function(err, foundMovie){
        if(err){
            console.log(err);
        } else {
            res.render('movie/edit.ejs',{movie: foundMovie})
        }
    });
});

router.put('/:id', upload.fields([{name: "img"}, {name: "trailer"}, {name: "dir"}]), function(req, res){
    if(req.file){
        req.body.movie.img = '/upload/image/' + req.files["img"][0].filename;
        req.body.movie.trailer = '/upload/trailer/' + req.files["trailer"][0].filename;
        req.body.movie.dir.img_dir = '/upload/image/' + req.files["dir"]["img_dir"][0].filename;
    }
    Movie.findByIdAndUpdate(req.params.id, req.body.movie, function(err, updatedMovie){
        if(err){
            console.log(err);
            res.redirect('/movie');
        } else {
            res.redirect('/movie/' + req.params.id);
        }
    })
})

router.delete('/:id', middleware.checkMovieOwner, function(req,res){
    Movie.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
            res.redirect('/movie');
        } else {
            res.redirect('/movie');
        }
    });
});

module.exports = router;
