module.exports = (err, ctx) => {
	let status;
	switch (err.code) {
		case 1001:
			status = 403;
			break;
		case 1002:
			status = 406;
			break;
		case 1003:
			status = 409;
			break;
		case 1004:
			status = 415;
			break;
		case 1005:
			status = 401;
			break;
		case 1006:
			status = 403;
			break;
		case 1007:
			status = 403;
			break;
		case 400:
			status = 400;
			break;
		default:
			status = 500
			break;
	}
	ctx.status = status;
	ctx.body = err;
}