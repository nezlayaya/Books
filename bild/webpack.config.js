module.exports = {
    entry: './components/books/main',

    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" }
        ]
    }
};