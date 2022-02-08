const app =require('./app/app');
const connectDatabase=require('./database/database');

const PORT=5000;
connectDatabase();

const server=app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})
