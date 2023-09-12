import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";


export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite",
})

export const Todos = sequelize.define('Todos', {
    // Chaque champ correspond à une colonne dans la table
    nom: {
      type: DataTypes.STRING,
      allowNull: false // Indique si ce champ peut être null
    },
    isChecked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
},{
        timestamps: false,
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('La synchronisation a réussi.');
    Todos.create({
      nom: "TASK 2",
      status: false,
    })
    .then((todoTask) => {
      console.log("todo", todoTask)
      Todos.findAll().then((todos) => {
        console.log("todos", todos)
      })
    })
  })
  .catch(error => {
    console.error('Erreur de synchronisation:', error);
  });
