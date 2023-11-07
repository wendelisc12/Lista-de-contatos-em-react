import { DataTypes, Model, Sequelize } from "sequelize";
import { db } from "../db.js";

const pessoa = db.define("pessoa", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    number:{
        type: DataTypes.STRING,
        allowNull: false   
    }

})

pessoa.sync()
export default pessoa

