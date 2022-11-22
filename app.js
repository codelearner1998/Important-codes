


const express = require("express")

const bodyParser = require("body-parser");
const urlencoded = require("body-parser/lib/types/urlencoded");

const app = express()

var items = ["Main Work", "Gym", "Revision"];

var workitems = [];

var mainitems =[];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

// app.use(express.static(__dirname + '/public'));   alternative you can do in this as well.

app.get("/", function (req, res) {

    const today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"

    };

    var day = today.toLocaleDateString("en-US", options);


    res.render("list", {
        listTitle: day,
        newlistItems: items

    });

    app.post("/", function (req, res) {

        let item = req.body.newItem;

        if(req.body.list === "Work"){

            workitems.push(item);           // here we are pushing websiet data (item ) into work list item 
            res.redirect("/work")

        }if(req.body.list === "Main"){
            mainitems.push(item);
            res.redirect("/main")

        }else{

            items.push(item); // here we are pushing website data(item) into arrays form (items)

            res.redirect("/");

        }

     
    })

    


        app.get("/work" ,function(req ,res ){
        res.render("list",{
            listTitle:"Work List",
            newlistItems:workitems
        });

        app.get("/main", function(req,res){
            res.render("list",{
                listTitle:"Main work",
                newlistItems:mainitems
                

            });

        })


        app.get("/about", function(req,res){
            res.render("about");
        });



        

    })

   

});

app.listen("3000", function () {
    console.log("Server is ruuning on port 3000")
})






  













