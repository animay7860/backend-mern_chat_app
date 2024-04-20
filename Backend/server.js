import Express from "express";
const app = Express()
const port = 5000;
app.get("/",(req,res)=>{
    res.send("API is Running");
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})