const app = require('./src/app/index');
const { APP_HOST } = require('./src/config');

app.listen(APP_HOST, () => {
	console.log(`http://127.0.0.1:${APP_HOST}`)
})