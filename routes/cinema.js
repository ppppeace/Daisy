const   express     = require("express"),
        router      = express.Router({mergeParams: true}),
        Comment     = require('../models/comment'),
        Movie       = require('../models/movie'),
        Cinema      = require('../models/cinema'),
        middleware  = require('../middleware');

        router.get("/", function(req, res){
            Cinema.find({}, function(err, allCinemas){
                if(err){
                    req.flash('error', 'Something went wrong.');
                    res.redirect('/');
                } else{
                    res.render("cinema/index.ejs", {cinemas:allCinemas});
                }
            });
        });
        
        


module.exports = router;