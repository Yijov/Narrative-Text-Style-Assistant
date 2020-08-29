const express = require("express");
const app     = express();
const bodyParser = require("body-parser");
const NarrativeText = require("../clases/narrative.js")
const port= process.env.PORT||3000;


const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("public"));


app.post('/text/analisis', jsonParser, (req, res) => {
    let tale= new NarrativeText(req.body.narrative);
    res.status(200).json({muletillas: tale.muletillas, variation: tale.paragraphsWithLowVariation, longsentences: tale.paragraphsWithLargeSentences });
});


app.listen(port, ()=> console.log(`Now listening on port ${port}`))