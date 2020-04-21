//constante para poder hace la conexion con mysql
const mysql= require('mysql');

module.exports= () =>
{
    //metodo para poder generar la conexion
    return mysql.createConnection(
        {
            host: 'localhost',
            user:'root',
            password:'ProgramacionWeb',
            database: 'PortalNode'
        });
}