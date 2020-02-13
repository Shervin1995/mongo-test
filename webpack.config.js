var webpack = require("webpack");

module.exports = {
		mode: "production",
		entry: "/Users/shervin/Desktop/mongo-test/app",
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
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
    }
  ]
}



}
