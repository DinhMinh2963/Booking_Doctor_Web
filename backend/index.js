import experss from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import doctorRoute from "./routes/doctor.js"
import reviewRoute from "./routes/review.js"
import bookingRoute from "./routes/booking.js"

dotenv.config();

const app = experss();
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true,
}


app.get("/", (req, res) => {
    res.send("API is working");
});

//database connection
mongoose.set("strictQuery", false)
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("MongoDB database is connected")
    } catch (err) {
        console.log("MongoDB database is connection failed")

    }
}

//middleware
app.use(experss.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/admin", userRoute)
app.use("/api/v1/doctors", doctorRoute)
app.use("/api/v1/reviews", reviewRoute)
app.use("/api/v1/bookings", bookingRoute)

app.listen(port, () => {
    connectDB()
    console.log("Server is running on port " + port)
});