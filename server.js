const http = require('http');
const pageData = require('./data');

const server = http.createServer((req, res) => {
    res.writeHead(200,{ 'Content-Type': 'text/html' })

    const htmlContent = `
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${pageData.title}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
                header { text-align: center; background: #f4f4f4; padding: 10px 0; }
                footer { margin-top: 20px; text-align: center; font-size: 0.9em; color: gray; }
            </style>
        </head>
        <body>
            <header>
                <h1>${pageData.title}</h1>
                <h2>${pageData.subtitle}</h2>
            </header>
            <main>
                <p>${pageData.description}</p>
            </main>
            <footer>
                <p>&copy; ${pageData.year} - Autor: ${pageData.author}</p>
            </footer>
        </body>
        </html>
    `;

    res.end(htmlContent)
})

const PORT = 3000;
server.listen(PORT,() =>{
    console.log(`servidor en http://localhost:${PORT}`)
})
