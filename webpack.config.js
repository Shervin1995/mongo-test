var webpack = require("webpack");

module.exports = {
		mode: "production",
		entry: ['babel-polyfill',"/Users/shervin/Desktop/mongo-test/app/index.jsx"],
		output: {
			path:"/Users/shervin/Desktop/mongo-test/server/public/react",
			filename: "bundle.js",
			publicPath: "public",
		},
		devServer:{
			inline: true,
			contentBase:'./',
			port: 3000,
		},



module: {
  rules: [
    {
      test: /\.m?jsx$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
    },{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
  ]
}



}
