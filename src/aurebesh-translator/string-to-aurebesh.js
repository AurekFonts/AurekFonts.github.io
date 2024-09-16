// by Ender Smith, Editor-in-Chief, AurekFonts

const LATIN_AUREBESH = {
	"a":"⡷⢎",
	"b":"⢮⡵",
	"c":"⠷⡆",
	"d":"⠩⡝",
	"e":"⡿⡏",
	"f":"⣖⣗",
	"g":"⣇⡻",
	"h":"⣙⣋",
	"i":"⠐⡇",
	"j":"⣒⡺",
	"k":"⣉⣹",
	"l":"⢄⡇",
	"m":"⣔⡁",
	"n":"⢎⣾",
	"o":"⣎⣱",
	"p":"⢟⣸",
	"q":"⣏⠙",
	"r":"⠉⡝",
	"s":"⡑⢼",
	"t":"⢼⠄",
	"u":"⣇⣺",
	"v":"⢱⠁",
	"w":"⣏⣹",
	"x":"⣜⡄",
	"y":"⢟⡸",
	"z":"⣐⣺",
	" ":"⠀ ",
	".":"⢠⡄",
	",":"⢠⠀",
	"!":"⠨⡂",
	"?":"⠘⡱",
	"-":"⠐⠂",
	"0":"⣏⡇",
	"1":"⣹⡀",
	"2":"⣭⡇",
	"3":"⣙⡇",
	"4":"⠧⡇",
	"5":"⣛⡇",
	"6":"⣟⡅",
	"7":"⠉⡇",
	"8":"⣟⡇",
	"9":"⣫⡇",
	"$":"⠛⡝",
	"&":"⣩⣽"
};

const stringToAurebesh = (str) => {
	return str.split("").reduce((acc, char) => {
		return acc + (LATIN_AUREBESH[char.toLowerCase()] || "");
	}, "")
}

const translateHandler = () => {
  const string = document.getElementById(`alphabet`).value;
  const aurebesh = stringToAurebesh(string) + `<br>@AurekFonts #AurebeshTweet`;
  document.getElementById(`translation`).innerHTML = aurebesh;
  console.log(aurebesh);
  return;
}
