// asad ali khan
import express from 'express'
import mongoose from "mongoose"
import cors from "cors"
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";

const __dirname = path.resolve();

import {
    stringToHash,
    varifyHash
} from "bcrypt-inzi"
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';


const SECRET = process.env.SECRET || "12345"
const PORT = process.env.PORT || 5000
const app = express()

// app.use(cors(["localhost:5000", "localhost:3000"]))

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    credentials: true
}))


app.use(express.json())
app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'web-frontend/build')))

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./web-frontend/build/index.html"))
})



mongoose.connect("mongodb+srv://ahsan:1234@thrift-system.8903a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    created: { type: Date, default: Date.now },

})



const User = mongoose.model('User', UserSchema);

const Vehicle = mongoose.model('Vehicels', {
    title: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    fueltype: {
        type: String,
        required: true
    },
    kms: {
        type: String,
        required: true
    },
    registeredarea: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    images: {
        type: [String],    
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }

})
app.post('/api/post_ad_vehicle', async (req, res) => {
    const { title,make,year,fueltype,kms,registeredarea,condition,city,state, description, price, name, phone, imageurl1, imageurl2, imageurl3  } = req.body
    console.log(title)
    if (!title || !make || !year || !fueltype || !kms || !registeredarea || !condition || !city || !state || !description || !price || !name || !phone) {
        return (res.status(500).send("plz fill all fields")
        ) 
    } else {
        const images= []
        images.unshift(imageurl1,imageurl2,imageurl3) 
        const table = new Vehicle({title,make,year,images,fueltype,kms,registeredarea,condition,city,state, description, price, name, phone})
        table.save().then(() => {
            console.log("Ad uploaded successfully"); res.status(200).send('Ad uploaded successfully')
        }).catch((error) => { console.log(error) })
    }
})

app.get("/api/v1/get_ad_vehicle", (req, res) => {
    console.log("asad")

    Vehicle.find()
        .sort({ created: "desc" })
        .then(admdata => res.json(admdata))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get("/api/v1/get_ad_vehicle/:id",async (req, res) => {
    const id =req.params.id


    const table=await Vehicle.findOne({_id:id})
    res.json(table)
});








const House = mongoose.model('Houses', {
    title: {
        type: String,
        required: true
    },
    floors: {
        type: String,
        required: true
    },
    bedroom: {
        type: String,
        required: true
    },
    bathroom: {
        type: String,
        required: true
    },
    furniture: {
        type: String,
        required: true
    },
    drawingroom: {
        type: String,
        required: true
    },
    lounge: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        reuired: true
    },
    images: {
        type: [String],

    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

app.post('/api/post_ad_house', async (req, res) => {
    const { title,floors,bedroom,bathroom,drawingroom,lounge,area,furniture,city,state, description, price, name,phone,address, imageurl1, imageurl2, imageurl3 } = req.body
    if (!title || !floors || !bedroom || !bathroom || !furniture || !drawingroom || !lounge || !area || !description || !price  || !name || !phone || !city || !state|| !address) {
        return (res.status(500).send("plz fill all fields")
        ) 
    } else {
        const images= []
        images.unshift(imageurl1,imageurl2,imageurl3) 
        const table = new House({title,floors,bedroom,bathroom,drawingroom,lounge,area,furniture,city,state, description, price, name,phone,address, images  })
        table.save().then(() => {
            console.log("Ad uploaded successfully"); res.status(200).send('Ad uploaded successfully')
        }).catch((error) => { console.log(error) })
    }
})


app.get("/api/v1/get_ad_house", (req, res) => {
    
    House.find()
        .sort({ created: "desc" })
        .then(admdata => res.json(admdata))
        .catch(err => res.status(400).json('Error: ' + err));
});










app.get('/api/v1/signup', (req, res) => {
    res.send(users)
})

app.post('/api/v1/signup', (req, res) => {

    if (!req.body.email || !req.body.password || !req.body.name) {
        console.log("required field missing");
        res.status(403).send("required field missing");
        return;
    }

    else {
        User.findOne({ email: req.body.email }, (err, user) => {

            if (user) {
                res.send("user already exist")
            }
            else {
                User.findOne({ email: req.body.email }, (err, user) => {
                    if (user) {
                        res.send("user already exist");
                    } else {
                        console.log(req.body)

                        stringToHash(req.body.password).then(passwordHash => {
                            console.log("hash: ", passwordHash);

                            let newUser = new User({
                                name: req.body.name,
                                email: req.body.email,
                                password: passwordHash,
                                phone: req.body.phone,
                            })
                            newUser.save(() => {
                                console.log("data saved")
                                res.send('signup success')
                            })
                        })
                    }
                })

            }
        })
    }
})

app.post('/api/v1/login', (req, res) => {


    if (!req.body.email || !req.body.password) {
        console.log("required field missing");
        res.status(403).send("required field missing");
        return;
    }

    console.log(req.body)

    User.findOne({ email: req.body.email }, (err, user) => {

        if (err) {
            res.status(500).send("error in getting database")
        } else {
            if (user) {

                varifyHash(req.body.password, user.password).then(result => {
                    if (result) {

                        var token = jwt.sign({
                            name: user.name,
                            email: user.email,
                            _id: user._id,
                        }, SECRET);
                        console.log("token created: ", token);

                        res.cookie("token", token, {
                            httpOnly: true,
                            maxAge: 3000000
                        });

                        res.send({
                            name: user.name,
                            email: user.email,
                            _id: user._id,
                        });
                    } else {
                        res.status(401).send("Authentication fail");
                    }
                }).catch(e => {
                    console.log("error: ", e)
                })

            } else {
                res.send("user not found");
            }
        }
    })
})




app.use((req, res, next) => {

    jwt.verify(req.cookies.token, SECRET,
        function (err, decoded) {

            req.body._decoded = decoded;

            console.log("decoded: ", decoded) // bar

            if (!err) {
                next();
            } else {
                res.status(401).sendFile(path.join(__dirname, "./web-frontend/build/index.html"))
            }

        })

});


app.post('/api/v1/logout', (req, res, next) => {
    res.cookie("token", "", {
        httpOnly: true,
        maxAge: 300000
    });
    res.send();
})



app.get('/api/v1/profile', (req, res) => {
    User.findOne({ email: req.body._decoded.email }, (err, user) => {

        if (err) {
            res.status(500).send("error in getting database")
        } else {
            if (user) {
                res.send({
                    name: user.name,
                    email: user.email,
                    phone: user.phone
                });
            } else {
                res.send("user not found");
            }
        }
    })
})



app.post("/api/v1/post", (req, res) => {
    const newPost = new Post({
        name: req.body._decoded.name,
        post: req.body.post,
        userId: req.body._decoded._id,
        email: req.body._decoded.email,
        time: req.body.time
    });
    
    newPost.save().then(() => {
        console.log("Post created");

        io.emit("POSTS", {
            post: req.body.post,
            userId: req.body._decoded._id,
            time: req.body.time,
            name: req.body._decoded.name,
            email: req.body._decoded.email
        });


        res.send("Post created");
    });
})


app.get("/api/v1/post", (req, res) => {
    const page = Number(req.query.page);
    
    Post.find()
        .sort({ created: "desc" })
        .skip(page)
        .limit(2)
        .then(admdata => res.json(admdata))
        .catch(err => res.status(400).json('Error: ' + err));
});


app.get("/api/v1/mypost", (req, res) => {
    Post
        .find({ userId: req.body._decoded?._id })
        .sort({ created: "desc" })
        .exec((err, data) => {
            res.send(data);
        });
});






app.get("/**", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./web-frontend/build/index.html"))
    // res.redirect("/")
})


// app.listen(PORT, () => {
//     console.log(`Example app listening at http://localhost:${PORT}`)
// })

//Socket

const server = createServer(app);

const io = new Server(server, { cors: { origin: "*", methods: "*", } });

io.on("connection", (socket) => {
    console.log("New client connected with id: ", socket.id);

    // to emit data to a certain client
    socket.emit("topic 1", "some data")

    // collecting connected users in a array
    // connectedUsers.push(socket)

    socket.on("disconnect", (message) => {
        console.log("Client disconnected with id: ", message);
    });
});

// setInterval(() => {

//     // to emit data to all connected client
//     // first param is topic name and second is json data
//     io.emit("Test topic", { event: "ADDED_ITEM", data: "some data" });
//     console.log("emiting data to all client");

// }, 2000)


server.listen(PORT, function () {
    console.log("server is running on", PORT);
})