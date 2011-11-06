//HTML to prettily add the wadsworth constant to the youtube page
var embedWadsworth = '<button onclick=";return false;" title="Jump to the next Wadsworth Constant" type="button" class="yt-uix-tooltip-reverse yt-uix-button yt-uix-tooltip" id="watch-wadsworth-constant" role="button" data-tooltip-text="Jump to the next Wadsworth Constant">	<span id="wadsworth-display" class="yt-uix-button-content">W<sup>c</sup></span></button>';
var embedWadsworthSym = '<button onclick=";return false;" title="Jump to the next Wadsworth Constant" type="button" class="yt-uix-tooltip-reverse yt-uix-button yt-uix-tooltip" id="watch-wadsworth-constant" role="button" data-tooltip-text="Jump to the next Wadsworth Constant">	<span id="wadsworth-display" class="yt-uix-button-content">&#958(x)</span></button>';



$(document).ready(function() {
	var ytPlayer = document.getElementById("movie_player");
	
	$("#watch-actions").append(embedWadsworthSym);
	
	$("#watch-wadsworth-constant").live("click",function(){ 
		//Get the current index
		var wadsworthIndex = inverseWadsworthValue(ytPlayer.getCurrentTime(), ytPlayer.getDuration());		
		wadsworthIndex = Math.round(wadsworthIndex) + 1;
		//jump to the next index
		ytPlayer.seekTo(WadsworthValue(ytPlayer.getDuration(),wadsworthIndex));
		//update the display
		$("#wadsworth-display").html(wadsworthDisplay(wadsworthIndex));
	});
});

//Determines the wadsworth value of the content based on the index
function WadsworthValue(seconds, index){
	return seconds * (1 - (Math.pow(2,index)/Math.pow(3,index)));
}

//Takes a percentage and finds which iteration of the Wadsworth Constant it is rounded up
function inverseWadsworthValue(current, duration){
	var wadsworthInverseConstant = Math.log(2) - Math.log(3);
	return Math.log(1 - current/duration)/wadsworthInverseConstant;
}

function wadsworthDisplay(index){
	if(index == 1) return "&#958(x)"
	else if(index == 2) return "&#958'(x)"
	else if(index == 3) return "&#958''(x)"
	else if(index == 4) return "&#958'''(x)"
	else if(index > 4) return "&#958<sup>" + index + "</sup>(x)"
	else return "&#958(x)"
}

