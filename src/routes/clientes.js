// Importar Express y crear una instancia de router
const express = require('express');
const router = express.Router();

/*
  Ruta: POST /crear
  Descripción: Crear un nuevo cliente en la base de datos
  Parámetros:
    - idCliente: número único que identifica al cliente
    - nombre: nombre del cliente
    - genero: género del cliente (opcional)
    - telefono: número de teléfono del cliente (opcional)
    - direccion: dirección del cliente (opcional) 
*/

router.post('/submitBtn', (req, res) => {
    // Destructurar los datos del cuerpo de la solicitud
    const { cedulaInput, nameInput, email, phone, message } = req.body;

    // Consulta SQL de inserción
    const query = 'INSERT INTO cliente (cedula, nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?, ?)';

    // Ejecutar la consulta SQL con los datos proporcionados
    req.connection.query(query, [cedulaInput, nameInput, email, phone, message], (err, result) => {
        if (err) {
            // Manejar errores en la consulta SQL
            console.error('Error al crear cliente:', err);
            res.status(500).send('Error al crear cliente');
            return;
        }

        // Enviar una respuesta indicando que el cliente ha sido creado
        res.send('Cliente creado');
    });
});


/*
  Ruta: GET /lista
  Descripción: Obtener una lista de todos los clientes en la base de datos
*/
router.get('/lista', (req, res) => {
    // Consulta SQL de lista
    const query = 'SELECT cedula, nombre FROM cliente';

    // Ejecutar la consulta SQL
    req.connection.query(query, (err, result) => {
        if (err) {
            // Manejar errores en la consulta SQL
            console.error('Error al obtener clientes:', err);
            res.status(500).send('Error al obtener clientes');
            return;
        }

        // Enviar la lista de clientes como respuesta
        res.json(result);
    });
});

// Exportar el módulo router
module.exports = router;