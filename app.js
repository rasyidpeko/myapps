const express = require("express");
var app = express();
const indexApi = require('./routes/api')
process.on('uncaughtException', console.log)

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.set("json spaces",2)

app.use('/api', indexApi);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})
app.get('/static/style.css', (req, res) => {
	res.sendFile(__dirname + '/static/css/style.css')
})

app.listen(PORT, () => {
    console.log(`Server Run on port ${PORT}`)
});
