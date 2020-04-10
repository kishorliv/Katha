const app = require('./app');

const environment = process.env.NODE_ENV;
const stage = require('./config')[environment];
const PORT = stage.port;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

