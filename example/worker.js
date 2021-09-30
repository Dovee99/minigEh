const Ethermine = require('../src/index.js'); // use ethermine-api in production
const ethermine = new Ethermine();

let miner = "0x86366c7edb0718d32a6a232f56c1c5a0b2437830";
let worker = "051";

ethermine.getMinerWorkers(miner, function(err,data){
  console.log(err, data);
})

ethermine.getWorkerHistory(miner, worker, function(err, data){
  console.log(err, data);
})

ethermine.getWorkerCurrentStats(miner, worker, function(err, data){
  console.log(err,data);
})
