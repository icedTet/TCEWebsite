const allSplashes = [
	"Now with a redesigned site",
	"Now with 10% more dazai!",
	"Am I copying minecraft with this feature?",
	":thinking:",
	"Can I die yet?",
	"Why did I spend time adding this?"
]
document.getElementById("splash").innerText = allSplashes[Math.floor(Math.random()*allSplashes.length)];
