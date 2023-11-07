import {Sequelize} from "sequelize"

export const db = new Sequelize("contatos", "root", "1234",{
    host:'127.0.0.1',
    port: 3307,
    dialect: "mysql"
})