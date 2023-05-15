const app = require("./server");

app.listen( PORT , ()=>{
    console.log(`Server running on http://localhost:${PORT}`); 
})