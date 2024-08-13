const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoute = require("./Routes/products.router");

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // This middleware is used to parse JSON bodies

// Routes
app.use('/',   upload.single('file'), productRoute);


const password = 'nb8dPS0EA0P8TMK0';
const dbName = 'eccom';

mongoose.connect(`mongodb+srv://hadbimohamed66:${password}@cluster0.rskjwws.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(() => {
    console.log('Connected to the database successfully');
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})
.catch(error => {
    console.error('The DB was not connected successfully:', error.message);
});
