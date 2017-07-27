module.exports = {
    entry: './components/books/all/books',

    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" }
        ]
    }
};