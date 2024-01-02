const fs = require("fs")

// fs.writeFile("message.txt", "Hello from Try 1 - Vib", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });

fs.readFile("./message.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });