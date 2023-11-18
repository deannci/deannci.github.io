function printAllLyrics(){
	var lyricsContainer=document.getElementById("container");
	var lyrics="";
	
	for(i=99;i>0;i--){
		lyrics+=i+" bottle"+(i!=1?"s":"")+" of beer on the wall, "+i+" bottle"+(i!=1?"s":"")+" of beer.<br />";
		lyrics+= "Take one down and pass it around, "+(i-1==0?"no more":i-1)+" bottle"+((i-1)!=1?"s":"")+" of beer on the wall.<br /><br />";
	}
	
	lyrics+="No more bottles of beer on the wall, no more bottles of beer.<br />";
	lyrics+="Go to the store and buy some more, 99 bottles of beer on the wall.";
	
	lyricsContainer.innerHTML=lyrics;
	
	var startButton=document.getElementById("startButton");
	startButton.style.display="none";
}

function startSong(){
	printAllLyrics();
}