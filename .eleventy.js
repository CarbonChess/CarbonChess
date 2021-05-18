const { execSync } = require('child_process');

module.exports = function (cfg) {
    const passThruPaths = [
        'images/', 'scripts/', 'styles/',
        '_redirects', 'favicon.ico',
    ];

    passThruPaths.forEach(file => cfg.addPassthroughCopy(file));

    cfg.on('afterBuild', () => {
        execSync('npm run novasheets', (err, stdout, stderr) => console.log(err || stdout));
    });

    return {
        passthroughFileCopy: true,
        dir: {
            includes: 'includes',
            layouts: 'layouts',
        }
    }
}
