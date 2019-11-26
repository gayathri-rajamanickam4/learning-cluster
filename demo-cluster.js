var cluster = require('cluster');

if (cluster.isWorker) {
  console.log('I am a worker');
} else {
  console.log('I am a master');
  console.log('about to create one fork');
  cluster.fork();
  console.log('Created one fork');
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  console.log('Created last fork');
}
