const beepDataBase64 = {
	"someName": "data:audio/wav;base64,audioFileData"
};

const playSound = (toBeep = "someName") =>
{
	const Sound = new Audio(beepDataBase64[toBeep]);
	Sound.play();
};
