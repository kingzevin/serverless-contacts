http = require('http')
http.globalAgent.maxSockets = 300

module.exports =
	internal:
		contacts:
			port: 3036
			host: process.env["LISTEN_ADDRESS"] or "localhost"

	mongo:
		url: #config here should be automatically passed in
      "mongodb://172.27.0.1:27017/sharelatex"
