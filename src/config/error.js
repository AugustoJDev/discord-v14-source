require("colors")

if(logs.Errors === true) {
process.on('unhandledRejection', (reason, p) => {
    console.log(' [ ANTICRASH ] | SCRIPT REJECTED'.brightRed);
    console.log(reason, p);
});
      
process.on("uncaughtException", (err, origin) => {
    console.log(' [ ANTICRASH ] | CATCH ERROR'.brightRed);
    console.log(err, origin);
}) 
      
process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(' [ ANTICRASH ] | BLOCKED'.brightRed);
    console.log(err, origin);
});
}