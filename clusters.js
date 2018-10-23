const cluster = require("cluster");
var os = require("os");

const CPUs  = os.cpus();
if (cluster.isMaster) {
  CPUs.forEach(()=>{
    cluster.fork()
  });
  cluster.on("listening", (worker)=>{
    console.log("Cluster %d connected", worker.process.pid);
  });
  cluster.on("disconnect", (worker)=>{
    console.log("Cluster %d disconnected", worker.process.pid);
  });
  cluster.on("exit", (worker)=>{
    console.log("Cluster %d is dead", worker.process.pid);
    // Ensuring a new clsuter will start if an old one dies
    cluster.fork();
  });
} else {
  require("./app.js");
}
