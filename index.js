var express = require('express');
bodyParser = require('body-parser');
var app = express();
const cors = require('cors');

app.use(cors({
    origin: 'https://sandboxcheckouttoolkit.rapyd.net'
}));
console.log(__dirname + '/json')
app.use(express.static(__dirname + '/json'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/payout.html')

})


app.listen(3000, () => {
    console.log("server running on port 3000")
})