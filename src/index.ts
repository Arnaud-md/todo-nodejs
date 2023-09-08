import express from "express";
import 'dotenv/config';
import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
console.log('Hello world');
const app = express();
const port :number = parseInt(process.env.PORT as string)

const sequelize = new Sequelize(process.env.BDD_NAME as string, 'Arnaud', process.env.USER_PASSWORD, {
    host: process.env.SERVER_NAME,
    dialect: 'mssql'
  });
  const todo = sequelize.define('Todo', {
    // Chaque champ correspond à une colonne dans la table
    nom: {
      type: DataTypes.STRING,
      allowNull: false // Indique si ce champ peut être null
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  todo.sync({ force: true });

  module.exports = todo;
app.get('/', (req, res) => {
    res.send("Hello World ! ")
  })

app.get('/saveBDD/:sentence', (req, res) => {
    const sen = req.params.sentence;
    res.send(sen);
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})