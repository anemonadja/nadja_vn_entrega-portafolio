const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});


const leerDatos = () => {
  const data = fs.readFileSync('./datos_personales_nadja.json', 'utf8');
  return JSON.parse(data);
};

app.get('/api', (req, res) => {
  try {
    const datos = leerDatos();
    res.json(datos);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer el archivo JSON' });
  }
});


app.get('/api/perfil', (req, res) => {
  try {
    const datos = leerDatos();
    res.json(datos.perfil);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer el perfil' });
  }
});

app.get('/api/estudios', (req, res) => {
  try {
    const datos = leerDatos();
    res.json(datos.estudios);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer estudios' });
  }
});

app.get('/api/experiencia-diseno', (req, res) => {
  try {
    const datos = leerDatos();
    res.json(datos.experiencia_diseno);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer experiencia de diseño' });
  }
});

app.get('/api/experiencia-otros', (req, res) => {
  try {
    const datos = leerDatos();
    res.json(datos.experiencia_otros);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer experiencia otros' });
  }
});

app.get('/api/proyectos-diseno', (req, res) => {
  try {
    const datos = leerDatos();
    res.json({ proyectos_diseno: datos.proyectos_diseno });
  } catch (error) {
    res.status(500).json({ error: 'Error al leer proyectos de diseño' });
  }
});

app.get('/api/proyectos-tech', (req, res) => {
  try {
    const datos = leerDatos();
    res.json({ proyectos_tech: datos.proyectos_tech });
  } catch (error) {
    res.status(500).json({ error: 'Error al leer proyectos tech' });
  }
});

app.get('/api/experiencia-tech', (req, res) => {
  try {
    const datos = leerDatos();
    res.json({ experiencia_tech: datos.experiencia_tech });
  } catch (error) {
    res.status(500).json({ error: 'Error al leer experiencia tech' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor API corriendo en http://localhost:${PORT}`);
});