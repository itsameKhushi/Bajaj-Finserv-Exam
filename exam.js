const express = require("express")
const cors= require("cors")
const app = express()

app.use(cors())
app.use(express.json());

// app.get()
app.post("/bfhl",async function (req,res){
    const data =  req.body;
    console.log(data);
    res.send({is_success:true})
})

app.get("/",function (req,res){
    res.send({is_success:true})
})

app.listen(3000,function (){
    console.log("running")
})

module.exports = app;

// const express = require('express');
// const app = express();

// app.use(express.json());

// app.post('https://testbfhl.herokuapp.com/bfhl', (req, res) => {
//     const data = req.body.data;
//     const user_id = 'john_doe_17091999';
//     const email = 'john@xyz.com';
//     const roll_number = 'ABCD123';
//     const odd_number = [];
//     const even_number = [];
//     const alphabet = [];

//     data.forEach(item => {
//         if (Number.isInteger(item)) {
//             if (item % 2 === 0) {
//                 even_number.push(item);
//             } else {
//                 odd_number.push(item);
//             }
//         } else if (typeof item === 'string') {
//             if (/^[A-Za-z]+$/.test(item)) {
//                 alphabet.push(item.toUpperCase());
//             }
//         }
//     });

//     const response = {
//         is_success: true,
//         user_id: user_id,
//         email: email,
//         roll_number: roll_number,
//         odd_numbers: odd_number,
//         even_numbers: even_number,
//         alphabets: alphabet
//     };

//     res.json(response);
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });