
//*************************************************** 3rd ************************************************** */


const express = require('express');
const multer = require('multer');
const { Pool } = require('pg');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

// PostgreSQL configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'upload-image-database',
  password: '1234',
  port: 5432,
});

// Multer configuration
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

// Enable CORS
app.use(cors());

// API endpoint for image upload
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { originalname, buffer } = req.file;

    // Convert the image buffer to base64
    const fileData = buffer.toString('base64');
console.log(fileData)
    // Insert the filename and base64 data into the database table
    // const query = 'INSERT INTO images (filename, data) VALUES ($1, $2)';
    // const values = [originalname, fileData];

    // await pool.query(query, values);

    // res.json({ message: fileData });
    res.json(fileData);
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Error uploading image' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});















//******************************************** 2nd ******************************************************** */



// const express = require('express');
// const multer = require('multer');
// const { Pool } = require('pg');
// const cors = require('cors');
// const fs = require('fs');

// const app = express();
// const port = 5000;

// // PostgreSQL configuration
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'upload-image-database',
//   password: '1234',
//   port: 5432,
// });

// // Multer configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// // Enable CORS
// app.use(cors());

// // API endpoint for image upload
// app.post('/upload', upload.single('image'), async (req, res) => {
//   try {
//     const { filename, path } = req.file;
//     // console.log("req req --- > ", )

//     // Read the file data and convert it to base64
//     const fileData = await fs.promises.readFile(path, { encoding: 'base64' });
// console.log("fileData --> ", fileData)
//     // Insert the filename and base64 data into the database table
//     const query = 'INSERT INTO images (filename, data) VALUES ($1, $2)';
//     const values = [filename, fileData];

//     await pool.query(query, values);

//     res.json({ message: 'Image uploaded successfully' });
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     res.status(500).json({ error: 'Error uploading image' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
















//******************************************* 1st *********************************************************** */




// const express = require('express');
// const multer = require('multer');
// const { Pool } = require('pg');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// // PostgreSQL configuration
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'upload-image-database',
//     password: '1234',
//     port: 5432,
//   });

// // Multer configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });


// const upload = multer({ storage: storage });

// // Enable CORS
// app.use(cors());

// // API endpoint for image upload
// app.post('/upload', upload.single('image'), (req, res) => {
//   const { filename } = req.file;

//   console.log("req  -->  ", req);
//   console.log("storage  -->  ", storage);
//   console.log("upload  ---> ", upload);

  
//   // Insert the filename into the database table
//   const query = 'INSERT INTO images (filename) VALUES ($1)';
//   pool.query(query, [filename], (error, results) => {
//     if (error) {
//       console.error('Error inserting image:', error);
//       res.status(500).json({ error: 'Error inserting image' });
//     } else {
//     //   res.json({ message: 'Image uploaded successfully' });
//     res.json({ message: 'Image uploaded successfully' });

//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
