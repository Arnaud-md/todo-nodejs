"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const config_seq_1 = require("./config_seq");
console.log('Hello world');
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT);
// const sequelize = new Sequelize(process.env.BDD_NAME as string, 'Arnaud', process.env.USER_PASSWORD, {
//     host: process.env.SERVER_NAME,
//     dialect: 'postgres'
//   });
app.post('/saveBDD/:sentence', (req, res) => {
    //res.send("Hello World ! ");
    const sen = req.params.sentence;
    //const stat = req.params.status;
    config_seq_1.Todos.create({ nom: sen,
        isChecked: false });
    res.send(sen);
});
// todo.sync({ force: true });
// module.exports = todo;
// async function task1() {
//     const tache1 = await todo.create({
//         nom: 'faire la vaisselle',
//         status: false,
//     });
// }
// task1();
// async function allTasksTodo() {
//     const allTasks = await todo.findAll();
// }
app.get('/findAll/', async (req, res) => {
    const allTodos = await config_seq_1.Todos.findAll();
    //     console.log("************************ ");
    // console.log(allTodos);
    // console.log("************************");
    res.status(200).send(allTodos);
});
/* export async function getTodos() {
  const todos = await Todos.findAll();
  return todos;
} */
app.get('/', (req, res) => {
    res.send("Hello World ! ");
});
// app.get('/saveBDD/:sentence', (req, res) => {
//     const sen = req.params.sentence;
//     res.send(sen);
//   })
// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log('La synchronisation a réussi.');
//     todo.create({
//       nom: "phrase a sauvegarder",
//       status: false,
//     })
//     .then((todoTask) => {
//       console.log("todo", todoTask)
//       todo.findAll().then((todos) => {
//         console.log("todos", todos)
//       })
//     })
//   })
//   .catch(error => {
//     console.error('Erreur de synchronisation:', error);
//   });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
/* console.log("************************ ");
console.log(getTodos());
console.log("************************"); */ 
