const express = require('express');
const app = express();

app.use(express.json());

// DATOS DE ESTUDIANTE
const estudiantes = [
    {id_estudiante: 1, nombre: 'AAA', tutor: 'TTT', fecha_nacimiento: '01-20-2023', genero: 'masculino', ultimo_grado: 'aaaa'},
    {id_estudiante: 2, nombre: 'AAA', tutor: 'TTT', fecha_nacimiento: '01-20-2023', genero: 'masculino', ultimo_grado: 'aaaa'},
    {id_estudiante: 3, nombre: 'AAA', tutor: 'TTT', fecha_nacimiento: '01-20-2023', genero: 'masculino', ultimo_grado: 'aaaa'},
    {id_estudiante: 4, nombre: 'JOSUE', tutor: 'TTT', fecha_nacimiento: '01-20-2023', genero: 'masculino', ultimo_grado: 'XXXXXXXX'},
    {id_estudiante: 5, nombre: 'BENJAMIN', tutor: 'TTT', fecha_nacimiento: '01-20-2023', genero: 'masculino', ultimo_grado: 'WWWWWWWWWWW'},
];

// DATOS DE CONTROL DE NOTA
const control_notas = [
    {id_nota: 1, id_estudiante: 1, fecha_ingreso: '01-20-2023', mate: 12, ciencias: 34, idioma: 54, nota_total: 120},
    {id_nota: 2, id_estudiante: 2, fecha_ingreso: '01-20-2023', mate: 12, ciencias: 34, idioma: 54, nota_total: 120},
    {id_nota: 3, id_estudiante: 3, fecha_ingreso: '01-20-2023', mate: 12, ciencias: 34, idioma: 54, nota_total: 120},
    {id_nota: 4, id_estudiante: 2, fecha_ingreso: '01-20-2023', mate: 12, ciencias: 34, idioma: 54, nota_total: 120},
    {id_nota: 5, id_estudiante: 5, fecha_ingreso: '01-20-2023', mate: 12, ciencias: 34, idioma: 54, nota_total: 120},
];

app.get('/', (req, res) => {
    res.send('Node Js api');
});

// PROCESOS DE TABLA ESTUDIANTE
app.get('/api/estudiantes', (req, res) => {
    res.send(estudiantes);
});

app.get('/api/estudiantes/:id_estudiante', (req, res) => {
    const estudiante = estudiantes.find(c => c.id_estudiante === parseInt(req.params.id_estudiante));
    if(!estudiante) return res.status(404).send('estudiante no encontrado . . .');
    else res.send(estudiante);
})

app.post('/api/estudiantes', (req, res) => {
    const estudiante = {
        id_estudiante: estudiantes.length + 1,
        nombre: req.body.nombre,
        tutor: req.body.tutor,
        fecha_nacimiento: req.body.fecha_nacimiento,
        genero: req.body.genero,
        ultimo_grado: req.body.ultimo_grado,
    };

    estudiantes.push(estudiante);
    res.send(estudiante);
});

app.delete('/api/estudiantes/:id_estudiante', (req, res) => {
    const estudiante = estudiantes.find(c => c.id_estudiante === parseInt(req.params.id_estudiante));
    if(!estudiante) return res.status(404).send('estudiante no encontrado . . .');

    const index = estudiantes.indexOf(estudiante);
    estudiantes.splice(index, 1);
    res.send(estudiante);
});

// PROCESOS DE TABLA CONTROL DE NOTA
app.get('/api/control_notas', (req, res) => {
    res.send(control_notas);
});

app.get('/api/control_notas/:id_nota', (req, res) => {
    const control_nota = control_notas.find(c => c.id_nota === parseInt(req.params.id_nota));
    if(!control_nota) return res.status(404).send('control_nota no encontrado . . .');
    else res.send(control_nota);
})

app.post('/api/control_notas', (req, res) => {
    const control_nota = {
        id_nota: control_notas.length + 1,
        id_nota: req.body.id_estudiante,
        fecha_ingreso: req.body.fecha_ingreso,
        mate: req.body.mate,
        ciencias: req.body.ciencias,
        idioma: req.body.idioma,
        nota_total: req.body.nota_total,
    };

    estudiante.push(control_nota);
    res.send(control_nota);
});

app.delete('/api/control_notas/:id_nota', (req, res) => {
    const control_nota = control_notas.find(c => c.id_nota === parseInt(req.params.id_nota));
    if(!control_nota) return res.status(404).send('control_nota no encontrado . . .');

    const index = control_notas.indexOf(control_nota);
    control_nota.splice(index, 1);
    res.send(control_nota);
});


const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Escuchando en el puerto ${port} . . .`));