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



// mongoose.connect("mongodb+srv://asadalikhan:asadalikhan@cluster0.hdvyr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://ahsan:1234@thrift-system.8903a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
const Post = mongoose.model('Post', {
    name: String,
    post: String,
    email: String,
    to_email: String,
    userId: String,
    time: String,
    created: { type: Date, default: Date.now },

});


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    created: { type: Date, default: Date.now },

})



const User = mongoose.model('User', UserSchema);




const Branchmanager = new mongoose.model('Branchmanager', {
    name: String,
    email: String,
    password: String,
    phone: Number,
    created: { type: Date, default: Date.now },

})




const Vehicle = mongoose.model('Vehicels', {
    title: {
        type: String,
        required: true
    },
    email: {
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
    imageurl1: {
        type: String,
        required: true
    },
    imageurl2: {
        type: String,
        required: true
    },
    imageurl3: {
        type: String,
        required: true
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
    const { email, title, make, year, fueltype, kms, registeredarea, condition, city, state, description, price, name, phone, imageurl1, imageurl2, imageurl3 } = req.body
    console.log(title)
    if (!email || !title || !make || !imageurl1 || !imageurl2 || !imageurl3 || !year || !fueltype || !kms || !registeredarea || !condition || !city || !state || !description || !price || !name || !phone) {
        return (res.status(500).send("plz fill all fields")
        )
    } else {
        const table = new Vehicle({ email, title, make, year, imageurl1, imageurl2, imageurl3, fueltype, kms, registeredarea, condition, city, state, description, price, name, phone })
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

app.get("/api/v1/get_ad_vehicle/:id", async (req, res) => {
    const id = req.params.id


    const table = await Vehicle.findOne({ _id: id })
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
    const { title, floors, bedroom, bathroom, drawingroom, lounge, area, furniture, city, state, description, price, name, phone, address, imageurl1, imageurl2, imageurl3 } = req.body
    if (!title || !floors || !bedroom || !bathroom || !furniture || !drawingroom || !lounge || !area || !description || !price || !name || !phone || !city || !state || !address) {
        return (res.status(500).send("plz fill all fields")
        )
    } else {
        const images = []
        images.unshift(imageurl1, imageurl2, imageurl3)
        const table = new House({ title, floors, bedroom, bathroom, drawingroom, lounge, area, furniture, city, state, description, price, name, phone, address, images })
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

const Loanapplications = mongoose.model('Loanapplications', {
    price: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    producturl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    jobtitle: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    officeaddress: {
        type: String,
        required: true
    },
    // name: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true
    // },
    // userId: {
    //     type: String,
    //     required: true
    // },
    sdate: {
        type: String,
        required: true
    },
    edate: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    imageurl1: {
        type: String,
        required: true
    },
    imageurl2: {
        type: String,
        required: true
    },
    imageurl3: {
        type: String,
        required: true
    },
    imageurl4: {
        type: String,
        required: true
    },
    imageurl5: {
        type: String,
        required: true
    },
    imageurl6: {
        type: String,
        required: true
    },
    amount: {
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
    tname: {
        type: String,
        required: true
    },
    tcnic: {
        type: String,
        required: true
    },
    tphone: {
        type: String,
        required: true
    },
    taddress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    qrcode: {
        type: String,
    },

})


app.post("/api/v1/loan_apply", (req, res) => {
    console.log(req.body)
    const { jobtitle, sdate, edate, amount, description, city, state, address, imageurl1, imageurl2, imageurl3, imageurl4, imageurl5, imageurl6 } = req.body

    if (!jobtitle || !sdate || !edate || !amount || !description || !city || !state || !address || !imageurl1 || !imageurl2 || !imageurl3 || !imageurl4 || !imageurl5 || !imageurl6) {
        return (res.status(500).send("plz fill all fields")
        )
    } else {


        const newLoanapplications = new Loanapplications({
            price: req.body.price,
            title: req.body.title,
            make: req.body.make,
            condition: req.body.condition,
            producturl: req.body.producturl,
            description: req.body.description,
            jobtitle: req.body.jobtitle,
            salary: req.body.salary,
            officeaddress: req.body.officeaddress,
            sdate: req.body.sdate,
            edate: req.body.edate,
            amount: req.body.amount,
            state: req.body.state,
            city: req.body.city,
            address: req.body.address,
            phone: req.body.phone,
            tname: req.body.tname,
            tcnic: req.body.tcnic,
            taddress: req.body.taddress,
            tphone: req.body.tphone,
            imageurl1: req.body.imageurl1,
            imageurl2: req.body.imageurl2,
            imageurl3: req.body.imageurl3,
            imageurl4: req.body.imageurl4,
            imageurl5: req.body.imageurl5,
            imageurl6: req.body.imageurl6,
            status: 'Pending'
        });

        newLoanapplications.save().then(() => {
            console.log("Loan Application uploaded successfully"); res.status(200).send("Loan Application uploaded successfully")
        }).catch((error) => { console.log(error) })
    }
})

app.get("/api/v1/loan_apply", (req, res) => {
    Loanapplications.find()

        .then(admdata => res.json(admdata))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get("/api/v1/loan_apply/:id", (req, res) => {

    const id = req.params.id

    Loanapplications.find({ id })

        .then(admdata => res.json(admdata))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.put("/api/v1/loan_apply/:id", (req, res) => {
    console.log("Api hit")
    const id = req.params.id
    const { qrcode, status } = req.body;

    Loanapplications.findByIdAndUpdate(id, { qrcode, status })

        .then(response => res.json(response))
        .catch(err => res.status(400).json('Error: ' + err));
});







app.get('/api/v1/signup', (req, res) => {
    res.send(users)
})

app.post('/api/v1/signupmanager', (req, res) => {

    if (!req.body.email || !req.body.password || !req.body.name) {
        console.log("required field missing");
        res.status(403).send("required field missing");
        return;
    }

    else {

        console.log(req.body)

        stringToHash(req.body.password).then(passwordHash => {
            console.log("hash: ", passwordHash);

            let newBranchmanager = new Branchmanager({
                name: req.body.name,
                email: req.body.email,
                password: passwordHash,
                phone: req.body.phone,
            })
            newBranchmanager.save(() => {
                console.log("data saved")
                res.send('signup success')
            })
        })
    }
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

const admin = mongoose.model('admin', {
    email: String,
    password: String,

});


app.post('/api/v1/admin_login', (req, res) => {


    if (!req.body.email || !req.body.password) {
        console.log("required field missing");
        res.status(403).send("required field missing");
        return;
    }

    console.log(req.body)

    admin.findOne({ email: req.body.email }, (err, user) => {

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



// app.post("/api/v1/post", (req, res) => {
//     const newPost = new Post({
//         name: req.body._decoded.name,
//         post: req.body.post,
//         userId: req.body._decoded._id,
//         email: req.body._decoded.email,
//         time: req.body.time
//     });

//     newPost.save().then(() => {
//         console.log("Post created");

//         io.emit("POSTS", {
//             post: req.body.post,
//             userId: req.body._decoded._id,
//             time: req.body.time,
//             name: req.body._decoded.name,
//             email: req.body._decoded.email
//         });


//         res.send("Post created");
//     });
// })


app.post("/api/v1/post", (req, res) => {
    console.log("/api/v1/post")

    console.log(req.body.to_email)
    const newPost = new Post({
        name: req.body._decoded.name,
        post: req.body.post,
        userId: req.body._decoded._id,
        email: req.body._decoded.email,
        to_email: req.body.to_email,
        time: req.body.time
    });
    newPost.save().then(() => {
        console.log("Post created");

        io.emit("POSTS", {
            post: req.body.post,
            userId: req.body._decoded._id,
            to_email: req.body.to_email,
            time: req.body.time,
            name: req.body._decoded.name,
            email: req.body._decoded.email
        });


        res.send("Post created");
    });
})







app.get("/api/v1/post/:to_email/:email", (req, res) => {
    console.log("to_email", req.params.to_email)
    // const to_email=req.params.to_email;
    const email1 = req.params.to_email;

    console.log("email", req.params.email)
    // const email=req.params.email;
    const email2 = req.params.email;

    const page = Number(req.query.page);
    Post.find({ $or: [{ to_email: email1, email: email2 }, { email: email1, to_email: email2 }] })
        .sort({ created: "desc" })
        .skip(page)
        // .limit(2)
        .then(admdata => res.json(admdata))
        .catch(err => res.status(400).json('Error: ' + err));

    if (Post.find({ to_email: email1, email: email2 }) || Post.find({ to_email: email2, email: email1 })) {
        console.log("a")

    }
});


app.get("/api/v1/post/:email", (req, res) => {
    // console.log("to_email",req.params.to_email)
    // const to_email=req.params.to_email;
    console.log("email", req.params.email)
    const email = req.params.email;
    const page = Number(req.query.page);
    Post.find({ to_email: email })
        .sort({ created: "desc" })
        .skip(page)
        // .limit(2)
        .then(admdata => res.json(admdata))
        .catch(err => res.status(400).json('Error: ' + err));
});


// app.get("/api/v1/mypost", (req, res) => {
//     Post
//         .find({ userId: req.body._decoded?._id })
//         .sort({ created: "desc" })
//         .exec((err, data) => {
//             res.send(data);
//         });
// });






app.get("/**", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./web-frontend/build/index.html"))
    // res.redirect("/")
})




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