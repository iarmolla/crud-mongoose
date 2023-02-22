import mongoose from 'mongoose'

mongoose.set("strictQuery", false);
// mongoose.connect('mongodb://localhost:27017/guitars')

async function main() {
    const url = 'mongodb://127.0.0.1:27017/test'
    await mongoose.connect(url);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export default main