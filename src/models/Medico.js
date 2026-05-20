import { DataTypes } from "sequelize";
import {sequelize} from'../config/database.js';

const Medico = sequelize.define('Medico',{
    matricula:{type:DataTypes.STRING,
        primaryKey:true,
        nombreCompleto:{type:DataTypes.STRING,
        allowNull:false},
        especialidad:{type:DataTypes.STRING,
            allowNull:false},
            telefono:{type:DataTypes.STRING}
        }
    }
);