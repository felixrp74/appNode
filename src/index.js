const express=require('express');
const app=express();
const path=require('path');
 
//settings
app.set('port',4000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//middleware

// https://www.youtube.com/watch?v=sh-NanMOh1Q
// https://www.youtube.com/watch?v=sh-NanMOh1Q
// https://www.youtube.com/watch?v=sh-NanMOh1Q
// https://www.youtube.com/watch?v=sh-NanMOh1Q


//routes
app.use(require('./routes/index'));

//static files
app.use( express.static(path.join(__dirname,'public')  ) );

//listening the  server 
app.listen(app.get('port'),()=>{
   console.log('billie',app.get('port')) ;
});
 