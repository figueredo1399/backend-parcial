import { DataTypes } from "sequelize";
import {sequelize} from'../config/database.js';

const HistorialMedico=sequelize.define('HistorialMedico',{
    id:{type: dataType.INTEGER,
        primaryKey:true,
        autoIcrement:true,
    },
    fechaCreacion:{type:DataTypes.DATEONLY,defaultValue:DataTpes.Now}
});
