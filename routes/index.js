const req = require('express/lib/request');
const theater = require('../models/theater');

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
        Pay         = require('../models/pay'),
        Favourite   = require('../models/favourite'),
        Comment     = require('../models/comment'),
        Theater     = require('../models/theater'),
        Showtime    = require('../models/showtime'),
        passport    = require('passport');

router.get("/", function(req, res){
    Movie.find({pop: 'yes'}, function(err, movieLists){
        if(err){
            console.log(err);
        } else{
            res.render("index.ejs", {movies: movieLists});
        }
    });
});

//new
router.post("/", upload.fields([{name: "img"}, {name: "trailer"}]), function(req, res, next){
    req.body.movie.img = '/upload/image/' + req.files["img"][0].filename;
    req.body.movie.trailer = '/upload/trailer/' + req.files["trailer"][0].filename;
    // req.body.movie.dir = '/upload/image/' + req.files["dir"][0].filename;
    // req.body.movie.act.img_act = '/upload/image/' + req.files["act.img_act"][0].filename;

    // let newMovie = {name:name, date:date, desc:desc, time:time, genre:genre, img:img, trailer:trailer
        // , dir:[
        //     {
        //         img_dir:img_dir, 
        //         name_dir:name_dir
        //     }
        // ],
        // act:[
        //     {
        //         img_act:img_act, 
        //         name_act:name_act
        //     }
        // ]
    // };

    let newMovie = new Movie({name: req.body.name,
        date: req.body.date,
        desc: req.body.desc,
        time: req.body.time,
        genre: req.body.genre,
        img: req.body.img,
        trailer: req.body.trailer,
        status: req.body.status,
        rate: req.body.rate,
        pop: req.body.pop

    });

    Movie.create(req.body.movie, function(err, newlyAdded){
        if(err){
            console.log(err);
        } else{
            res.redirect("/");
        }
    });
});

router.get("/coming", function(req, res){
    Movie.find({status: "non"}, function(err, allMovies){
        if(err){
            console.log(err);
        } else{
            res.render("movie/coming.ejs", {movies:allMovies});
        }
    });
});

router.get("/new", function(req, res){
    res.render("movie/new.ejs");
});

//search
router.get('/search', function(req, res){
    Movie.find({name: req.query.keyword}, function(err, foundMovie){
        if(err){
            req.flash('error', err.message);
            res.redirect('/movie');
        }else{
            res.render('movie/movieisnow.ejs', {movies: foundMovie});
        }
    });
});

router.get('/register', function(req, res){
    res.render('register.ejs');
});

router.post('/register', upload.single('profileImage'), function(req, res){
    req.body.profileImage = '/upload/image/'+ req.file.filename;
    let newUser = new User({username: req.body.username,
                            email: req.body.email,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            profileImage: req.body.profileImage
    });
    if(req.body.adminCode === 'topsecret'){
        newUser.isAdmin = true;
    }  
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash('error', err.message);
            return res.redirect('/register');
        } else{
            passport.authenticate('local')(req, res, function(){
            req.flash('success', user.username + ' Welcome to Daisy Movie');
            res.redirect('/');
            });
        }
    });
});

router.get('/login', function(req, res){
    res.render('login.ejs');
});

router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login',
        successFlash: true,
        failureFlash: true,
        successFlash: 'Successfully login',
        failureFlash: 'Invalid username or password'
    }), function(req, res){
});

router.get('/logout', function(req, res){
    req.logout();
    req.flash('success', 'Your Log out is Success.');
    res.redirect('/');
});

//pay
router.get('/pay/:id/:showtime', function(req, res){
    Pay.findById(req.params.id, function(err, foundPay){
        if(err){
            req.flash('error', err.message);
            res.redirect('/');
        }else{
            Showtime.findById(req.params.showtime, function(err, foundShowtime){
                if(err){
                    req.flash('error', err.message);
                    res.redirect('/'); 
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
                                            res.render('ticket/pay.ejs', {pay: foundPay, showtime: foundShowtime, movie: foundMovie, theater: foundTheater, cinema: foundCinema});
                                        }
                                    })
                                    
                                }
                            });
                        }
                    });
                   
                }
            });
        }
    });
});
   
module.exports = router;

