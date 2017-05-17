function drawTree(height){
	var i;
	var j;
	for(i=0;i<height;i++){
		for(j=0;j<=i;j++){
			console.log("*");
		}
		 console.log("");
	}
}
var height = 5;
drawTree(height);
