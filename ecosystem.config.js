module.exports = {
	apps: [
		{
			name: 'sveltekit-app',
			script: 'build/index.js',
			instances: 'max',
			exec_mode: 'cluster',
			env: {
				NODE_ENV: 'production',
				PORT: 3000,
				HOST: '0.0.0.0',
				ORIGIN: 'https://plaiaundi.xabier.uk'
			},
			error_file: 'logs/err.log',
			out_file: 'logs/out.log',
			log_file: 'logs/combined.log',
			time: true
		}
	]
};
