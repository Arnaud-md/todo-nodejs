"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todos = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite",
});
exports.Todos = exports.sequelize.define('Todos', {
    // Chaque champ correspond à une colonne dans la table
    nom: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false // Indique si ce champ peut être null
    },
    isChecked: {
        type: sequelize_2.DataTypes.BOOLEAN,
        allowNull: true
    },
}, {
    timestamps: false,
});
exports.sequelize
    .sync({ force: true })
    .then(() => {
    console.log('La synchronisation a réussi.');
    exports.Todos.create({
        nom: "TASK 2",
        status: false,
    })
        .then((todoTask) => {
        console.log("todo", todoTask);
        exports.Todos.findAll().then((todos) => {
            console.log("todos", todos);
        });
    });
})
    .catch(error => {
    console.error('Erreur de synchronisation:', error);
});
