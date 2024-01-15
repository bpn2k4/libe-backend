import express from 'express'

const boost = async () => {

    const app = express()

    app.listen(3000, () => {
        console.log('App is running at', 'http://localhost:3000')
    })
}

boost()