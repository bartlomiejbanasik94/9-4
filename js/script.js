function drawTree(height){
	var i;
	var j;
	for(i=0;i<height;i++){
		var star = "";
			for(j=0;j<=i;j++){
			// console.log("*");
			star += '*';
			}
		 console.log(star);

	}
}
var height = 5;
drawTree(height);
