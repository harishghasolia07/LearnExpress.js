
//************************** HTTP Vocab *********************************
// Get-Request Resource
// Post-Sending Resource
// Put-Replace Resource
// Patch-Patch Up a Resource
// Delete-Delet Resource

// nodemon -- Use for auto restart to the server.

//****************************CODE***************************************
import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("<h1>Hello</h1>")
});

app.get('/about', (req, res) => {
    res.send("<h1>About Me</h1><p>My Name is Harish</p>")
  });
app.get('/Contact', (req, res) => {
    res.send("<h1>Contect Me</h1><p>You Can Contect me via ....</p>")
  });

app.listen(port, () => {
  console.log(`This is Port Number ${port}`)
});




