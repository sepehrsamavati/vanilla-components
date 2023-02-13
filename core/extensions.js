Element.prototype.on = function(...args) {
	this.addEventListener(...args);
};
Element.prototype.addClass = function(classNames) {
	classNames = classNames.split(',');
	classNames.forEach(className => {
		this.classList.add(className.toString().trim());
	});
	return this;
};
Element.prototype.removeClass = function(classNames) {
	classNames = classNames.split(',');
	classNames.forEach(className => {
		this.classList.remove(className.toString().trim());
	});
	return this;
};
Element.prototype.hasClass = function(className) {
	return this.classList.contains(className);
};
Element.prototype.html = function(html) {
	return html === undefined ? this.innerHTML : this.innerHTML = html;
};
Element.prototype.val = function(value) {
	if(value === undefined)
		return this.value;
	if(this.value != value)
		this.dispatchEvent(new Event('change'));
	this.value = value;
	this.dispatchEvent(new Event('input'));
};

String.prototype.isRTL = function() {
	const rtlChars = "چجحخهعغفقثصضگکمنتالبیسشئدذرزطظآۀةيژؤإأپ" + '‏';
	return rtlChars.includes(this.trim()[0]);
};

String.prototype.multiLangHelper = String.prototype.format = function(replaceWith) {
	const input = this.toString();
	if(typeof replaceWith == undefined)
	{
		return input;
	}
	if(!Array.isArray(replaceWith))
	{
		replaceWith = [replaceWith];
	}
	return input.replace(/(%s)\d/g, (a) => replaceWith[parseInt(a.slice(2))-1] );
};

String.prototype.skipHTML = String.prototype.ignoreHTML  = function(){
	return this.replace(/<|>/g, char => {
		switch(char)
		{
			case '<':
				char = '&lt;';
				break;
			case '>':
				char = '&gt;';
				break;
		}
		return char;
	});
};
