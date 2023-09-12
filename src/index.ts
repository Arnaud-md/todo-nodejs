import express from "express";
import Sequelize from 'sequelize'
import 'dotenv/config';
import {Todos} from './config_seq'
import {sequelize} from './config_seq'


console.log('Hello world');
const app = express();
const port :number = parseInt(process.env.PORT as string)

// const sequelize = new Sequelize(process.env.BDD_NAME as string, 'Arnaud', process.env.USER_PASSWORD, {
//     host: process.env.SERVER_NAME,
//     dialect: 'postgres'
//   });



app.post('/saveBDD/:sentence', (req, res) => {
  //res.send("Hello World ! ");
  const sen = req.params.sentence;
  //const stat = req.params.status;
    Todos.create({nom: sen,
    isChecked : false});
    res.send(sen)
})
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
app.get('/findAll/', async(req, res) => {
    const allTodos = await Todos.findAll();
    

//     console.log("************************ ");
// console.log(allTodos);
// console.log("************************");

res.status(200).send(allTodos);
})
/* export async function getTodos() {
  const todos = await Todos.findAll();
  return todos;
} */


app.get('/', (req, res) => {
    res.send("Hello World ! ")
  })

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
    console.log(`Example app listening on port ${port}`)
})
/* console.log("************************ ");
console.log(getTodos());
console.log("************************"); */