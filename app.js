const express = require('express')
const route = require('./src/route')
const app = express()

app.use(express.json())
app.get('/',(req, res)=>{
    try{
        res.status(200).json({
            message:'data berhasil dipanggil'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'error'
        })
    }
})
app.use('/api', route)
app.listen(4000, ()=>{
    console.log('server is running on port 4000')
})