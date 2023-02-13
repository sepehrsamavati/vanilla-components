/*
    Requires:
        - 'core/helpers' (qs function)
        - spinner image source (use url or pick from 'core/data > image')
*/

const loader = (element, clear = false, retry = false, retryText = "retry") => {

    const config = {
        blur: true,
        image: "data:image/png;base64,", // image source data/url
        minTimeToStart: 300,
        timeToHide: 300 // based on css transition
    };

	const el = element,
	imageData = config.image;
    const container = qs(".loader-container", el);
	if(!el.hasClass("content-loading") && !clear) /* Add */
	{
		if(el.style.position === "")
		{
			el.style.position = "relative";
		}
        if(config.blur)
		{
            el.classList.add("loader-has-blur");
        }
		el.classList.add("content-loading");
		let loaderContainer = document.createElement("div");
		loaderContainer.innerHTML = `<div class="loader-container"><div><img src="${imageData}" /></div></div>`;
		loaderContainer = loaderContainer.firstChild;
		el.appendChild(loaderContainer);
		setTimeout(()=>{
			qs(".loader-container", el)?.classList?.add("active");
			if(retry)
			{
				loader(el, false, retry, retryText);
			}
		}, config.minTimeToStart);
	}
	else if(clear) /* Remove */
	{
		container?.classList?.remove("active");
		setTimeout(()=>{
			el.classList.remove("content-loading");
			el.classList.remove("loader-has-blur");
			qs(".loader-container", el)?.remove();
		}, config.timeToHide);
	}
	else if(retry){ /* Fail callback */
		container?.classList?.add("retry");
		qs("* > div", container).innerHTML = `<span class="loader-retry">${retryText}</span>`;
		qs(".loader-container .loader-retry", el).onclick = () => {
			if(retry)
			{
				retry();
			}
		};
	}
	else if(container?.classList?.contains("retry"))
	{
		container?.classList?.remove("retry")
		qs("* > div", container).innerHTML = `<img src="${imageData}" />`;
	}
	return el;
};
