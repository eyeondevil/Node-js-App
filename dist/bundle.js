(()=>{var e={139:(e,o,r)=>{const{MongoClient:t}=r(518);let s;t.connect("mongodb://localhost:27017").then((e=>{s=e.db("mydb"),console.log("Connected to MongoDB")})).catch((e=>console.error(e))),e.exports=s},252:e=>{"use strict";e.exports=require("express")},518:e=>{"use strict";e.exports=require("mongodb")},928:e=>{"use strict";e.exports=require("path")}},o={};function r(t){var s=o[t];if(void 0!==s)return s.exports;var n=o[t]={exports:{}};return e[t](n,n.exports,r),n.exports}const t=r(252),s=r(928),n=r(139),i=t(),c=process.env.PORT||3e3;i.use(t.static(s.join(__dirname,"public"))),i.get("/",((e,o)=>{o.sendFile(s.join(__dirname,"public","index.html"))})),i.get("/users",((e,o)=>{n.collection("users").find({}).toArray(((e,r)=>{e?o.status(500).send("Error fetching users"):o.json(r)}))})),i.listen(c,(()=>{console.log(`Server is running on http://localhost:${c}`)}))})();