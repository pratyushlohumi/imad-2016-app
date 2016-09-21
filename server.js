var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one':{
    title:'Article One\ Pratyush Lohumi',
    heading: 'Article One',
    date: 'september 20th 016',
    content: `
            <p>
                With the league stage coming to an end, we have seen not only some excellent plays and new talents coming into the spotlight, we also saw an incredible 11 match win streak end.All the teams played extremely well, but only the best have reached the playoffs. Hard luck for those not being able to qualify and wishing them the best for the next season.
            </p>
            
             <p>
                With the league stage coming to an end, we have seen not only some excellent plays and new talents coming into the spotlight, we also saw an incredible 11 match win streak end.All the teams played extremely well, but only the best have reached the playoffs. Hard luck for those not being able to qualify and wishing them the best for the next season.
            </p>
            
             <p>
                With the league stage coming to an end, we have seen not only some excellent plays and new talents coming into the spotlight, we also saw an incredible 11 match win streak end.All the teams played extremely well, but only the best have reached the playoffs. Hard luck for those not being able to qualify and wishing them the best for the next season.
            </p>`
},
    'article-two':{
    title:'Article One\ Pratyush Lohumi',
    heading: 'Article One',
    date: 'september 20th 016',
    content: `
            <p>
                With the league stage coming to an end, we have seen not only some excellent plays and new talents coming into the spotlight, we also saw an incredible 11 match win streak end.All the teams played extremely well, but only the best have reached the playoffs. Hard luck for those not being able to qualify and wishing them the best for the next season.
            </p>
            
             <p>
                With the league stage coming to an end, we have seen not only some excellent plays and new talents coming into the spotlight, we also saw an incredible 11 match win streak end.All the teams played extremely well, but only the best have reached the playoffs. Hard luck for those not being able to qualify and wishing them the best for the next season.
            </p>
            
             <p>
                With the league stage coming to an end, we have seen not only some excellent plays and new talents coming into the spotlight, we also saw an incredible 11 match win streak end.All the teams played extremely well, but only the best have reached the playoffs. Hard luck for those not being able to qualify and wishing them the best for the next season.
            </p>`
}, 
    'article-three':{
    title:'Article One\ Pratyush Lohumi',
    heading: 'Article One',
    date: 'september 20th 016',
    content: `
            <p>
                With the league stage coming to an end, we have seen not only some excellent plays and new talents coming into the spotlight, we also saw an incredible 11 match win streak end.All the teams played extremely well, but only the best have reached the playoffs. Hard luck for those not being able to qualify and wishing them the best for the next season.
            </p>
            
             <p>
                With the league stage coming to an end, we have seen not only some excellent plays and new talents coming into the spotlight, we also saw an incredible 11 match win streak end.All the teams played extremely well, but only the best have reached the playoffs. Hard luck for those not being able to qualify and wishing them the best for the next season.
            </p>
            
             <p>
                With the league stage coming to an end, we have seen not only some excellent plays and new talents coming into the spotlight, we also saw an incredible 11 match win streak end.All the teams played extremely well, but only the best have reached the playoffs. Hard luck for those not being able to qualify and wishing them the best for the next season.
            </p>`
};
function createTemplate(data){
var title=data.title;
var date=data.date;
var heading= data.heading;
var content=data.content;

var htmlTemplate= `
<html>
    <head>
        <title>
            Article One | Pratyush Lohumi
        </title>
        <meta name="viewport" content="width=device-width, intial-scale=1"/>
          <link href="/ui/style.css" rel="stylesheet" />
    
    
    </head>
    
    <body>
        <div class="container">
        <div>
        <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>    
            <div>
                ${date}
            </div>
        <div>
            
                ${content}
            
        </div>
        </div>
    </body>
</html>
`;
return html.Template;
    
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
