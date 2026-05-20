import { sequelize } from '../config/database.js';
import {Paciente} from './Paciente.js';
import {HistorialMedico} from './HistorialMedico.js';
import {Departamento} from './Departamentos.js';
import {Medico} from './Medico.js';

Paciente.hasOne(HistorialMedico);
Medico.belongsTo(Departamento);

Departamento.belongsTo(Medico,{as:'JefeDepartamento'});

export{
    sequelize,
    Paciente,
    HistorialMedico,
    Departamento,
    Medico
};