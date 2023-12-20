import mongoose from 'mongoose'

const PASSWORD = process.env.PASSWORD_DB

const uri = `mongodb+srv://luisprendasdev:${PASSWORD}@airport-management.qtije6j.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'))
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB')
})

export default mongoose
