import { Sequelize } from 'sequelize';
import 'dotenv/config';
export const sequelize = new Sequelize(

process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,
{
host: process.env.DB_HOST,
dialect: 'mysql',

}
);

export const testConnection = async () => {
try {
await sequelize.authenticate();

console.log('✅ Base de datos lista.');


} catch (error) {
console.error(' ❌ Error crítico:',
error.message);
process.exit(1);

}
};
