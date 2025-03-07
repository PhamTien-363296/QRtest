import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        const conn = await mongoose.connect(`mongodb+srv://phamnguyenthuytien3007:VbaU4wEYdqA0uPPZ@cluster7.7am4h.mongodb.net/qrstock?retryWrites=true&w=majority&appName=Cluster7`)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }   catch (error){
        console.error(`Error connection to mongoDB: ${error.message}`)
        process.exit(1)
    }
}

export default connectMongoDB