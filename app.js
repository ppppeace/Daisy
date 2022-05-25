const   express     = require("express"),
        app         = express(),
        bodyParser  = require("body-parser"),
        mongoose    = require('mongoose'),
        passport    = require('passport'),
        LocalStrategy = require('passport-local'),
        flash       = require('connect-flash'),
        methodOverride = require('method-override'),
        Movie       = require('./models/movie'),
        Comment     = require('./models/comment'),
        User        = require('./models/user'),
        Theater     = require('./models/theater'),
        Cinema      = require('./models/cinema'),
        seedDB      = require('./seed.js');

const   indexRoutes     = require('./routes/index'),
        movieRoutes     = require('./routes/movie'),
        commentRoutes   = require('./routes/comments'),
        cinemaRoutes    = require('./routes/cinema'),
        userRoutes      = require('./routes/user');

mongoose.connect('mongodb://localhost/DaisyMovie');
app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(flash());
//seedDB();

app.use(require('express-session')({
    secret: 'secret word',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser  = req.user;
    res.locals.error        = req.flash('error');
    res.locals.success      = req.flash('success');
    next();
});
app.use('/movie', movieRoutes);
app.use('/', indexRoutes);
app.use('/cinema', cinemaRoutes );
app.use('/user', userRoutes);
app.use('/movie/:id/comments', commentRoutes);

app.listen(5000, function(){
    console.log("Activated");
});
