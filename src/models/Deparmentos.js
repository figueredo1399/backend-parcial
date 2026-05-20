import { DataTypes } from "sequelize";
import {sequelize} from'../config/database.js';
const Departamento= sequelize.define('Departamento',{
    id:{type:DataTypes.INTERGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre:{type:DataTypes.STRING,allowNull:false}
});
export default Departamento;