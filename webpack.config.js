var webpack = require('webpack');

// module.exports returns a object.
module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ], // Tells webpack where it should start processing your code.
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname, // Gives path to the current folder.
        filename: './public/bundle.js'
      },
    resolve: {
        root: __dirname,
        alias: { // Allows us to use the component by specifying just name in the require
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            WeatherForm: 'app/components/WeatherForm.jsx',
            WeatherMessage: 'app/components/WeatherMessage.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        extensions: ['', '.js', '.jsx'] // Files that we want to process.
    },
    module: {
        loaders: [
        {
            // We are telling the babel-loader to take our .jsx files. Parse them through react 
            // and run them through es2015 as well.
            loader: 'babel-loader', // Converts our jsx file to es5.
            query: {
            presets:['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /{node_modules|bower_components}/
        }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};