module.exports = {
    apps: [{
        name: '[smog-api]',
        script: 'app.js',
        ignore_watch: ['node_modules'],
        env: {
            'NODE_ENV': process.env.NODE_ENV || 'development'
        }
    }]
}
