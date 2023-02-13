const freezeHistory = () => window.history.pushState({}, window.document.title, window.location.href);

const goBack = window.onpopstate = () => {
	const popupOpen = [];

    /* Add conditions to prevent default behavior and block back button action */
	// popupOpen.push(!qs("#partial-data-viewer.d-none"));

	if(popupOpen.includes(true)) {
		// if(popupOpen[0])
		// 	qs("#partial-data-viewer").addClass("d-none");
		// else if(popupOpen[1]) ...
		return false;
	}
	window.history.back();
	return true;
};

/*
    Call freezeHistory to lock back button
*/
