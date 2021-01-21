// by Ender Smith, Editor-in-Chief, AurekFonts

const stringToAurebesh = (string) => {
  var newString = string;
  newString = newString.replace(/[a]/gi, `⡷⢎`);
  newString = newString.replace(/[b]/gi, `⢮⡵`);
  newString = newString.replace(/[c]/gi, `⠷⡆`);
  newString = newString.replace(/[d]/gi, `⠩⡝`);
  newString = newString.replace(/[e]/gi, `⡿⡏`);
  newString = newString.replace(/[f]/gi, `⣖⣗`);
  newString = newString.replace(/[g]/gi, `⣇⡻`);
  newString = newString.replace(/[h]/gi, `⣙⣋`);
  newString = newString.replace(/[i]/gi, `⠐⡇`);
  newString = newString.replace(/[j]/gi, `⣒⡺`);
  newString = newString.replace(/[k]/gi, `⣉⣹`);
  newString = newString.replace(/[l]/gi, `⢄⡇`);
  newString = newString.replace(/[m]/gi, `⣔⡁`);
  newString = newString.replace(/[n]/gi, `⢎⣾`);
  newString = newString.replace(/[o]/gi, `⣎⣱`);
  newString = newString.replace(/[p]/gi, `⢟⣸`);
  newString = newString.replace(/[q]/gi, `⣏⠙`);
  newString = newString.replace(/[r]/gi, `⠉⡝`);
  newString = newString.replace(/[s]/gi, `⡑⢼`);
  newString = newString.replace(/[t]/gi, `⢼⠄`);
  newString = newString.replace(/[u]/gi, `⣇⣺`);
  newString = newString.replace(/[v]/gi, `⢱⠁`);
  newString = newString.replace(/[w]/gi, `⣏⣹`);
  newString = newString.replace(/[x]/gi, `⣜⡄`);
  newString = newString.replace(/[y]/gi, `⢟⡸`);
  newString = newString.replace(/[z]/gi, `⣐⣺`);
  newString = newString.replace(/[ ]/gi, `⠀ `);
  newString = newString.replace(/[.]/gi, `⢠⡄`);
  newString = newString.replace(/[,]/gi, `⢠⠀`);
  newString = newString.replace(/[!]/gi, `⠨⡂`);
  newString = newString.replace(/[?]/gi, `⠘⡱`);
  newString = newString.replace(/[-]/gi, `⠐⠂`);
  newString = newString.replace(/[0]/gi, `⣏⡇`);
  newString = newString.replace(/[1]/gi, `⣹⡀`);
  newString = newString.replace(/[2]/gi, `⣭⡇`);
  newString = newString.replace(/[3]/gi, `⣙⡇`);
  newString = newString.replace(/[4]/gi, `⠧⡇`);
  newString = newString.replace(/[5]/gi, `⣛⡇`);
  newString = newString.replace(/[6]/gi, `⣟⡅`);
  newString = newString.replace(/[7]/gi, `⠉⡇`);
  newString = newString.replace(/[8]/gi, `⣟⡇`);
  newString = newString.replace(/[9]/gi, `⣫⡇`);
  newString = newString.replace(/[$]/gi, `⠛⡝`);
  newString = newString.replace(/[&]/gi, `⣩⣽`);
  return newString;
};

const translateHandler = () => {
  const string = document.getElementById(`alphabet`).value;
  const aurebesh = stringToAurebesh(string) + `<br>@AurekFonts #AurebeshTweet`;
  document.getElementById(`translation`).innerHTML = aurebesh;
  console.log(aurebesh);
  return;
}