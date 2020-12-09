const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://phoneuser:phonepassword@projects.rscf5.mongodb.net/PhonesAPI?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    w: "majority",
    family: 4
 });

const phoneSchema = new Schema({
    id:             {type: Number},
    name:           {type: String},
    manufacturer:   {type: String},
    description:    {type: String},
    color:          {type: String},
    price:          {type: Number},
    imageFileName:  {type: String},
    screen:         {type: String},
    processor:      {type: String},
    ram:            {type: Number},
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;