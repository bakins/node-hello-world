var recluster = require('recluster'),
    path = require('path');

var cluster = recluster(
    path.join(__dirname, 'index.js'),
    {
        timeout: 60,
        respawn: 5
    }
);

process.on('SIGHUP', function() {
    console.log('Got HUP, reloading cluster...');
    cluster.reload();
});

cluster.run();

