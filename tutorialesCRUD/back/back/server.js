const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();



app.use(cors());//uso cors

//convertir las peticiones para que pueda manejarlas
app.use(express.json()); 


app.use(express.urlencoded({ extended: true })); 

// ruta basica
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/tutorial.routes.js")(app);

// escucho peticiones
const PORT =  8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
