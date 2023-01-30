import express from "express";
import morgan from "morgan";
//Routes
import fruteriaRoutes from "./routes/Fruteria.routes";


const app= express();


//Settings
app.set("port",4000);

//Middelwares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/",fruteriaRoutes);

export default app;