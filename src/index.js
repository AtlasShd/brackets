module.exports = function check(str, conf) { // is it so easy?
	while (conf.some(item => str.includes(`${item[0]}${item[1]}`))) {
		conf.forEach(item => {
			str = str.replace(`${item[0]}${item[1]}`, '');
		});
	}
	return str ? false : true;
};
