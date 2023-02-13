const qs = (expr, context) => {
	return (context || document).querySelector(expr);
}, qsa = (expr, context) => {
	return [].slice.call((context || document).querySelectorAll(expr), 0);
};
