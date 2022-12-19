// catch unhandled rejects
process.on('unhandledRejection', (rej: Error) => {
  console.log(`unhandled rejection : ${rej.message}`);
  throw new Error(rej.message);
});

process.on('uncaughtException', (error: Error) => {
  console.log(`uncaught exception : ${error.message}`);

  // passed the expect to the error handle middleware
  //   errorHandler.errorHandler(error)
});
