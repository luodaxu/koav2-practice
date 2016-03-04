var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var host = 4000;

module.exports = {
    devtool: 'inline-source-map',
    target: 'web',
    debug: false,
    context: path.resolve(__dirname, '..'),
    entry: {
        app: [
            'webpack-hot-middleware/client',
            './src/app.js'
        ]
    },
    output: {
        path: path.join(__dirname, '..', '/public'),
		filename: 'js/bundle.js',
		publicPath: '//localhost:'+host+'/',
		chunkFilename: '[id].bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            },
            __CLIENT__: true,
            __SERVER__: false,
            __DEVELOPMENT__: true
        }),
        new htmlWebpackPlugin({
            title: 'Ddx',
            filename: 'index.html',
            template: './src/index.template.html' // context property is '..'
        })
    ],
    postcss: [
        require('autoprefixer'),
        require('postcss-color-rebeccapurple'),
		require('cssnext')
    ],
    resolve: {
		modulesDirectories: [
			'src',
			'bower_components',
			'node_modules'
		],
		extensions: ['', '.js', '.json']
	},
    module: {
		loaders: [
			{
        test: /\.js$/,
        loaders: ['babel'], exclude: /node_modules/
      },
			{
        test: /\.json$/,
        loader: 'json'},
			{
				test: /\.css$/,
				loaders: ['style','css', 'postcss']
			},
			{
				test: /\.styl$/,
				loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ,'stylus']
			},
			{
        test: /\.(png|jpg)$/,
        loader: "url-loader?mimetype=image/png"
      },
			{
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
			{
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
			{
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
			{
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
			{
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
		]
	}
};
