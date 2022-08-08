const fs = require("fs");

const writeFile = () => {
    fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', "utf8", (err) => {
        if (err) console.log(err);
        console.log("WRITED");
        appendFile();
    })
}

const readFile = () => {
    fs.readFile("employees.json", "utf8", (err,data) => {
        if (err) console.log(err);
        console.log(data);
        console.log("READ");
        //deleteFile();
    })
}

const appendFile = () => {
    fs.appendFile("employees.json", '{"name": "Employee 2 Name", "salary": 4000}', "utf8", (err) => {
        if (err) console.log(err);
        console.log("APPEND");
        readFile();
    })
}

const deleteFile = () => {
    fs.unlink("employees.json", (err) => {
        if (err) console.log(err);
        console.log("DELETED");
    })
}

writeFile();