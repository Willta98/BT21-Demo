module.exports = {
    publicPath: '/BT21-Demo/dist/',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/repoName/'
        : '/',
    css: {
        extract: false
    }    
}