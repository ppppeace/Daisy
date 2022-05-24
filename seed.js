const   mongoose    = require('mongoose'),
        Movie       = require('./models/movie'),
        Comment     = require('./models/comment'),
        User        = require('./models/user'),
        Theater     = require('./models/theater'),
        Cinema      = require('./models/cinema'),
        Showtime    = require('./models/showtime');

        //movie
        const data = [
            {
                name: "Sonic the Hedgehog 2", date: "2022-04-06", desc:"The worlds favorite blue hedgehog is back for a next-level adventure in SONIC THE HEDGEHOG 2. After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands. From the filmmakers behind The Fast and the Furious and Deadpool, SONIC THE HEDGEHOG 2 stars James Marsden, Ben Schwartz as the voice of Sonic, Tika Sumpter, Natasha Rothwell, Adam Pally, and Jim Carrey returning, alongside new additions Shemar Moore, with Idris Elba as the voice of Knuckles, and Colleen O'Shaughnessey as the voice of Tails." 
                ,time: "122", genre:"Action , Adventure , Animation", img:"/images/sonic.jpg", trailer:"/trailer/sonic.mp4"
                , status:"now", rate:"13"
                ,dir: [
                    {
                        img_dir:"/images/dir/dir_sonic.jpg", 
                        name_dir:"Jeff Fowler"
                    }
                ], act: [
                    {
                        img_act:"/images/act/sonic1.jpg",
                        name_act:"Idris Elba"
                    },
                    {
                        img_act:"/images/act/sonic2.jpg",
                        name_act:"Jim Carrey"
                    },
                    {
                        img_act:"/images/act/sonic3.jpg",
                        name_act:"Ben Schwartz"
                    }
                ],
            },
            {
                name: "Fantastic Beasts: The Secrets of Dumbledore", date: "2022-04-13", desc:"Professor Albus Dumbledore knows the powerful Dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts Magizoologist Newt Scamander to lead an intrepid team of wizards, witches and one brave Muggle baker on a dangerous mission, where they encounter old and new beasts and clash with Grindelwald's growing legion of followers. But with the stakes so high, how long can Dumbledore remain on the sidelines?" 
                ,time: "143", genre:"Action , Fantasy", img:"/images/fantastic.jpg", trailer:"/trailer/fan.mp4"
                , status:"now", rate:"13"
                ,dir: [
                    {
                        img_dir:"/images/dir/dir_fan.jpg", 
                        name_dir:"David Yates"
                    }
                ], act: [
                    {
                        img_act:"/images/act/fan1.jpg",
                        name_act:"Jude Law"
                    },
                    {
                        img_act:"/images/act/fan2.jpg",
                        name_act:"Mads Mikkelsen"
                    },
                    {
                        img_act:"/images/act/fan3.jpg",
                        name_act:"Eddie Redmayne"
                    }
                ]
                
            },
            {
                name: "The Lost City", date: "2022-04-21", desc:"Brilliant, but reclusive author Loretta Sage (Sandra Bullock) has spent her career writing about exotic places in her popular romance-adventure novels featuring handsome cover model Alan (Channing Tatum), who has dedicated his life to embodying the hero character, “Dash.” While on tour promoting her new book with Alan, Loretta is kidnapped by an eccentric billionaire (Daniel Radcliffe) who hopes that she can lead him to the ancient lost city’s treasure from her latest story. Wanting to prove that he can be a hero in real life and not just on the pages of her books, Alan sets off to rescue her. Thrust into an epic jungle adventure, the unlikely pair will need to work together to survive the elements and find the ancient treasure before it’s lost forever." 
                ,time: "112", genre:"Action , Comedy , Romance", img:"/images/lost.jpg", trailer:"/trailer/lost.mp4"
                , status:"now" , rate:"13"
                ,dir: [
                    {
                        img_dir:"/images/dir/dir_lost1.jpg", 
                        name_dir:"Aaron Nee"
                    },
                    {
                        img_dir:"/images/dir/dir_lost2.jpg", 
                        name_dir:"Adam Nee"
                    }
                ], act: [
                    {
                        img_act:"/images/act/lost1.jpg",
                        name_act:"Channing Tatum"
                    },
                    {
                        img_act:"/images/act/lost2.jpg",
                        name_act:"Brad Pit"
                    },
                    {
                        img_act:"/images/act/lost3.jpg",
                        name_act:"Sandra Bullock"
                    },
                    {
                        img_act:"/images/act/lost4.jpg",
                        name_act:"Daniel Radcliffe"
                    }
                ]
            },
            {
                name: "Gold", date: "2022-04-28", desc:"Set against the backdrop of a vast, unique and unforgiving landscape, Gold is a taut thriller about greed and the lengths people will go to secure themselves a fortune. When two drifters travelling through the desert stumble across the biggest gold nugget ever found, the dream of immense wealth and greed takes hold. They hatch a plan to protect and excavate their bounty with one man leaving to secure the necessary equipment. The other man remains and must endure the harsh desert climate, preying wolves and intruders, whilst battling the creeping doubt that he has been abandoned to his own fate." 
                ,time: "97", genre:"Thriller", img:"/images/gold.jpg", trailer:"/trailer/gold.mp4"
                , status:"now" , rate:"15"
                ,dir: [
                    {
                        img_dir:"/images/dir/dir_gold.jpg", 
                        name_dir:"Anthony Hayes"
                    }
                ], act: [
                    {
                        img_act:"/images/act/gold1.jpg",
                        name_act:"Zac Efron"
                    },
                    {
                        img_act:"/images/act/gold2.jpg",
                        name_act:"Anthony Hayes"
                    },
                    {
                        img_act:"/images/act/gold3.jpg",
                        name_act:"Susie Porter"
                    }
                ]
            },
            {
                name: "Doctor Strange 2", date: "2022-05-04", desc:"Marvel Studios’ Doctor Strange in the Multiverse of Madness starring Benedict Cumberbatch as Stephen Strange with Scott Derrickson returning as director. But joining Doctor Strange this time around will be the Scarlet Witch, played by Elizabeth Olsen. In another twist, the events of Doctor Strange in the Multiverse of Madness will connect with the Disney+ series Marvel Studios' WandaVision." 
                ,time: "126", genre:"Action", img:"/images/doctor.jpg", trailer:"/trailer/doctor.mp4"
                , status:"now" , rate:"13"
                ,dir: [
                    {
                        img_dir:"/images/dir/dir_doc.jpg", 
                        name_dir:"Sam Raimi"
                    }
                ], act: [
                    {
                        img_act:"/images/act/doc1.jpg",
                        name_act:"Benedict Cumberbatch"
                    },
                    {
                        img_act:"/images/act/doc2.jpg",
                        name_act:"Elizabethchase Olsen"
                    }
                ]
            },
            {
                name: "It s a Flickering Life", date: "2022-05-12", desc:"In this tale of love and friendship spanning a lifetime, the god of cinema that Go has worshipped since he was young will transcend time, and work a miracle in the lives of one family." 
                ,time: "126", genre:"Drama", img:"/images/life.jpg", trailer:"/trailer/life.mp4"
                , status:"now" , rate:"13"
                ,dir: [
                    {
                        img_dir:"/images/dir/dir_life.jpg", 
                        name_dir:"Yoji Yamada"
                    }
                ], act: [
                    {
                        img_act:"/images/act/life1.jpg",
                        name_act:"Masaki Suda"
                    },
                    {
                        img_act:"/images/act/life2.jpg",
                        name_act:"Kenji Sawada"
                    },
                    {
                        img_act:"/images/act/life3.jpg",
                        name_act:"Nobuko Miyamoto"
                    }
                ]
            },
            {
                name: "Seoul Ghost Stories", date: "2022-05-12", desc:"The fear of walking through a dark tunnel alone, The questionable sound from next door, The mystery of used furniture, The false jealousy towards others" 
                ,time: "123", genre:"Horror", img:"/images/seoul.jpg", trailer:"/trailer/seoul.mp4"
                , status:"now" , rate:"15"
                ,dir: [
                    {
                        img_dir:"/images/dir/dir_seoul.jpg", 
                        name_dir:"Hong Wonki"
                    }
                ], act: [
                    {
                        img_act:"/images/act/seoul1.jpg",
                        name_act:"Shownu"
                    },
                    {
                        img_act:"/images/act/seoul2.jpg",
                        name_act:"Seo Jisoo"
                    },
                    {
                        img_act:"/images/act/seoul3.jpg",
                        name_act:"Bong Jaehyun"
                    }
                ]
            },
            {
                name: "Six Minutes to Midnight", date: "2022-05-12", desc:"The fear of walking through a dark tunnel alone, The questionable sound from next door, The mystery of used furniture, The false jealousy towards others" 
                ,time: "99", genre:"Drama , Thriller", img:"/images/six.jpg", trailer:"/trailer/six.mp4"
                , status:"now" , rate:"13"
                ,dir: [
                    {
                        img_dir:"/images/dir/dir_six.jpg", 
                        name_dir:"Andy Goddard"
                    }
                ], act: [
                    {
                        img_act:"/images/act/six1.jpg",
                        name_act:"Nigel Lindsay"
                    },
                    {
                        img_act:"/images/act/six2.jpg",
                        name_act:"Judi Dench"
                    },
                    {
                        img_act:"/images/act/six3.jpg",
                        name_act:"Eddie Izzard"
                    }
                ]
            },
            {
                name: "Top Gun Maverick", date: "2022-05-25", desc:"After more than thirty years of service as one of the Navy’s top aviators, Pete “Maverick” Mitchell (Tom Cruise) is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. When he finds himself training a detachment of Top Gun graduates for a specialized mission the likes of which no living pilot has ever seen, Maverick encounters Lt." 
                ,time: "130", genre:"Action , Drama", img:"/images/top.jpg", trailer:"/trailer/top.mp4"
                , status:"now", rate:"13"
                ,dir: [
                    {
                        img_dir:"/images/dir/dir_top.jpg", 
                        name_dir:"Joseph Kosinski"
                    }
                ], act: [
                    {
                        img_act:"/images/act/top1.jpg",
                        name_act:"Tom Cruise"
                    },
                    {
                        img_act:"/images/act/top2.jpg",
                        name_act:"Jennifer Connelly"
                    },
                    {
                        img_act:"/images/act/top3.jpg",
                        name_act:"Val Kilmer"
                    }
                ]
            },
            {
                name: "Detective Conan the Movie 25", date: "2022-05-26", desc:"Shibuya, Tokyo, is bustling with the Halloween season. A wedding is being held at Shibuya Hikarie, where Miwako Sato is dressed in a wedding dress. While Conan and the other invited guests are watching, an assailant suddenly bursts in, and Wataru Takagi, who was trying to protect Sato, is injured. Takagi survived and the situation was settled, but in Sato's eyes, the image of the grim reaper that she had seen when Jinpei Matsuda, the man she had been in love with, had been killed in a series of bombings three years ago, overlapped with Takagi's." 
                ,time: "0", genre:"Animation , Crime , Thriller", img:"/images/conan.jpg", trailer:"/trailer/conan.mp4"
                , status:"non", rate:"13"
                ,dir: [
                    {
                        img_dir:"/images/dir/dir_conan.jpg", 
                        name_dir:"Susumu Mitsunaka"
                    }
                ], act: [
                    {
                        img_act:"/images/act/conan.jpg",
                        name_act:"Conan"
                    }
                ]
            },
            {
                name: "What to Do with the Dead Kaiju?", date: "2022-05-26", desc:"A large monster attacks Japan, but dies suddenly. While the people rejoice and bask in relief, the giant corpse left behind begins to slowly rot and bloat. If it explodes, the nation will be destroyed." 
                ,time: "0", genre:"Comedy , Drama , Romance", img:"/images/dead.jpg", trailer:"/trailer/dead.mp4"
                , status:"non", rate:"13"
                ,dir: [
                    {
                        img_dir:"/images/dir/dir_dead.jpg", 
                        name_dir:"Satoshi Miki"
                    }
                ], act: [
                    {
                        img_act:"/images/act/dead1.jpg",
                        name_act:"Ryosuke Yamada"
                    },
                    {
                        img_act:"/images/act/dead2.jpg",
                        name_act:"Tao Tsuchiya"
                    },
                    {
                        img_act:"/images/act/dead3.jpg",
                        name_act:"Gaku Hamada"
                    }
                ]
            },
            {
                name: "Jurassic World Dominion", date: "2022-06-08", desc:"This June, experience the epic conclusion to the Jurassic era as two generations unite for the first time. Chris Pratt and Bryce Dallas Howard are joined by Oscar®-winner Laura Dern, Jeff Goldblum and Sam Neill in Jurassic World Dominion, a bold, timely and breathtaking new adventure that spans the globe. From Jurassic World architect and director Colin Trevorrow, Dominion takes place four years after Isla Nublar has been destroyed. Dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures." 
                ,time: "147", genre:"Action , Adventure", img:"/images/jurassic.jpg", trailer:"/trailer/jurassic.mp4"
                , status:"non", rate:"13"
                ,dir: [
                    {
                        img_dir:"/images/dir/dir_ju.jpg", 
                        name_dir:"Colin Trevorrow"
                    }
                ], act: [
                    {
                        img_act:"/images/act/ju1.jpg",
                        name_act:"Chris Pratt"
                    },
                    {
                        img_act:"/images/act/ju2.jpg",
                        name_act:"Bryce Dallas Howard"
                    },
                    {
                        img_act:"/images/act/ju3.jpg",
                        name_act:"Isabella Sermon"
                    }
                ]
            }
        ];


//theater
        const theaterlist = [
            //Siam cinema
            {
                name: "Cinema 1",
                movie: "62861bcc33e26b636aa14664",
                cinema: "62861bcc33e26b636aa146a6"
            },
            {
                name: "Cinema 2",
                movie: "62861bcc33e26b636aa14683",
                cinema: "62861bcc33e26b636aa146a6"
            },
            {
                name: "Cinema 3",
                movie: "62861bcc33e26b636aa14688",
                cinema: "62861bcc33e26b636aa146a6"
            },
            //Paragon cinema
            {
                name: "Cinema 1",
                movie: "62861bcc33e26b636aa14664",
                cinema: "62861bcc33e26b636aa146a7"
            },
            {
                name: "Cinema 2",
                movie: "62861bcc33e26b636aa1467e",
                cinema: "62861bcc33e26b636aa146a7"
            },
            {
                name: "Cinema 3",
                movie: "62861bcc33e26b636aa14688",
                cinema: "62861bcc33e26b636aa146a7"
            },
            //Param 2 cinema
            {
                name: "Cinema 1",
                movie: "62861bcc33e26b636aa14664",
                cinema: "62861bcc33e26b636aa146a8"
            },
            {
                name: "Cinema 2",
                movie: "62861bcc33e26b636aa14679",
                cinema: "62861bcc33e26b636aa146a8"
            },
            {
                name: "Cinema 3",
                movie: "62861bcc33e26b636aa14675",
                cinema: "62861bcc33e26b636aa146a8"
            },
            //Mega-Bangna cinema
            {
                name: "Cinema 1",
                movie: "62861bcc33e26b636aa14675",
                cinema: "62861bcc33e26b636aa146a9"
            },
            {
                name: "Cinema 2",
                movie: "62861bcc33e26b636aa14670",
                cinema: "62861bcc33e26b636aa146a9"
            },
            {
                name: "Cinema 3",
                movie: "62861bcc33e26b636aa1465f",
                cinema: "62861bcc33e26b636aa146a9"
            },
            //Saraburi cinema
            {
                name: "Cinema 1",
                movie: "62861bcc33e26b636aa14669",
                cinema: "62861bcc33e26b636aa146aa"
            },
            {
                name: "Cinema 2",
                movie: "62861bcc33e26b636aa14675",
                cinema: "62861bcc33e26b636aa146aa"
            }
        ];

        //cinema
const cinemalist = [
            {
                name: "Daisy Cinema Siam",
                zone: 'Bangkok'
            },
            {
                name: "Daisy Cinema Paragon",
                zone: 'Bangkok'
            },
            {
                name: "Daisy Cinema Param 2",
                zone: 'Bangkok'
            },
            {
                name: "Daisy Cinema Mega-Bangna",
                zone: 'Central'
            },
            {
                name: "Daisy Cinema Saraburi",
                zone: 'Central'
            }
        ];

//seat

const seatlist = [
    {
        name: "A1",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "A2",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "A3",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "A4",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "A5",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "A6",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "A7",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "A8",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "A9",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "A10",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "B1",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "B2",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "B3",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "B4",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "B5",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "B6",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "B7",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "B8",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "B9",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "B10",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "C1",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "C2",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "C3",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "C4",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "C5",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "C6",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "C7",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "C8",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "C9",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "C10",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "D1",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "D2",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "D3",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "D4",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "D5",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "D6",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "D7",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "D8",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "D9",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "D10",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "E1",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "E2",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "E3",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "E4",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "E5",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "E6",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "E7",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "E8",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "E9",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    },
    {
        name: "E10",
        img: "/images/normalseat.png",
        type: "Normal",
        price: 150
    }
];
        
        //showtime
        const showtimelist = [
            //Siam cinema 1
            {
                time: "11:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96940"
            },
            {
                time: "14:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96940"
            },
            {
                time: "22:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96940"
            },
            //Siam cinema 2
            {
                time: "12:00",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96941"
            },
            {
                time: "15:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96941"
            },
            {
                time: "19:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96941"
            },
            {
                time: "23:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96941"
            },
            //Siam cinema 3
            {
                time: "13:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96942"
            },
            {
                time: "17:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96942"
            },
            {
                time: "20:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96942"
            },
            //Paragon cinema 1
            {
                time: "10:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96943"
            },
            {
                time: "14:00",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96943"
            },
            {
                time: "18:00",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96943"
            },
            {
                time: "22:00",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96943"
            },
            //Paragon cinema 2
            {
                time: "10:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96944"
            },
            {
                time: "15:50",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96944"
            },
            {
                time: "19:20",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96944"
            },
            {
                time: "23:20",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96944"
            },
            //Paragon cinema 3
            {
                time: "12:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96945"
            },
            {
                time: "15:10",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96945"
            },
            {
                time: "18:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96945"
            },
            {
                time: "24:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96945"
            },
            //Param 2 cinema 1
            {
                time: "10:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96946"
            },
            {
                time: "13:40",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96946"
            },
            {
                time: "18:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96946"
            },
            {
                time: "23:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96946"
            },
            //Param 2 cinema 2
            {
                time: "12:00",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96947"
            },
            {
                time: "17:00",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96947"
            },
            {
                time: "21:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96947"
            },
            {
                time: "24:20",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96947"
            },
            //Param 2 cinema 3
            {
                time: "11:40",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96948"
            },
            {
                time: "15:20",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96948"
            },
            {
                time: "19:50",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96948"
            },
            {
                time: "23:00",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96948"
            },
            //Mega-Bangna cinema 1
            {
                time: "11:40",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96949"
            },
            {
                time: "14:20",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96949"
            },
            {
                time: "19:00",
                seats: seatlist,
                theater: "62863fa89b9bf207efc96949"
            },
            //Mega-Bangna cinema 2
            {
                time: "12:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc9694a"
            },
            {
                time: "15:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc9694a"
            },
            //Mega-Bangna cinema 3
            {
                time: "13:10",
                seats: seatlist,
                theater: "62863fa89b9bf207efc9694b"
            },
            {
                time: "17:50",
                seats: seatlist,
                theater: "62863fa89b9bf207efc9694b"
            },
            //Saraburi cinema 1
            {
                time: "12:50",
                seats: seatlist,
                theater: "62863fa89b9bf207efc9694c"
            },
            {
                time: "15:40",
                seats: seatlist,
                theater: "62863fa89b9bf207efc9694c"
            },
            //Saraburi cinema 2
            {
                time: "13:30",
                seats: seatlist,
                theater: "62863fa89b9bf207efc9694d"
            },
            {
                time: "17:40",
                seats: seatlist,
                theater: "62863fa89b9bf207efc9694d"
            }
        ];

function seedDB(){
    // Movie.remove({}, function(err){
    //     if(err){
    //         console.log(err)
    //     } else{
    //         console.log('Data removal complete');
    //         data.forEach(function(seed){
    //             Movie.create(seed, function(err, movie){
    //                 if(err){
    //                     console.log(err);
    //                 } else{
    //                     console.log('New data added!');
    //                 }
    //             });
    //         });
    //     }
    // });
    User.remove({}, function(err){
        if(err){
            console.log(err)
        } else{
            console.log('Data removal complete');
        }
    });
    // Cinema.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log('Cinema remove completed');
    //         cinemalist.forEach(function(seed){
    //             Cinema.create(seed, function(err, cinema){
    //                 if(err){
    //                     console.log(err);
    //                 }else{
    //                     console.log('New cinema added!');
    //                 }    
    //             });
    //         });
    //     }
    // });
    // Theater.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log('Theater remove completed');
    //         theaterlist.forEach(function(seed){
    //             Theater.create(seed, function(err, theater){
    //                 if(err){
    //                     console.log(err);
    //                 }else{
    //                     console.log('New theater added!');
    //                 }    
    //             });
    //         });
    //     }
    // });
    // Showtime.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log('Showtime remove completed');
    //         showtimelist.forEach(function(seed){
    //             Showtime.create(seed, function(err, showtime){
    //                 if(err){
    //                     console.log(err);
    //                 }else{
    //                     console.log('New showtime added!');
    //                 }    
    //             });
    //         });
    //     }
    // });

}

module.exports = seedDB;

