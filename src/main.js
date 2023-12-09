const app = require('./app/app');
require('dotenv').config();

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running on port ${process.env.APP_PORT}`);
});

app.get('/', (req, res) => {
    res.status(200).json({mensaje: 'bienvenido a la API DE NODE.JS'});
});