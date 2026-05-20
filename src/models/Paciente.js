import { DataTypes } from "sequelize";
import {sequelize} from'../config/database.js';

const Paciente = sequelize.define('Paciente',{
    dni:{
        type:DataTypes.STRING,
        primaryKey:true,
        allowNull: false
    },
    nombreCompleto:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fechaNacimiento:{
        type:DataTypes.DATE,
        allowNull:false
    },
    direccion:{
        type:DataTypes.STRING
    },
    telefono:{
        type:DataTypes.STRING
    },
    contactoEmergencia:{
        type:DataTypes.STRING
    }
},     {timestamps: true
});
export default Paciente;