module.exports = {
    publicPath: './',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/repoName/'
        : '/',
    css: {
        extract: false
    }    
}