const swaggerAutogen = require('swagger-autogen')()

const outputFile = './test.json'
const endpointsFiles = ['./index.js']
// Generate Swagger documentation based on the provided endpoints

swaggerAutogen(outputFile, endpointsFiles).then(() => {
        // Start the server after generating the documentation

    require('./index.js')
})