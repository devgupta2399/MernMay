const express= require("express");
const app= express();
const router=require("./route/auth-route")
app.use(express.json());
app.use("/api/auth",router);

const PORT=5000;
app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`);
})