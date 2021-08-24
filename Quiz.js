
document.getElementsByClassName('container')[0].style.display = "block";

function next(id) {
	document.getElementsByClassName('container')[id-1].style.display = "none";
	document.getElementsByClassName('container')[id].style.display = "block";
}

function result() {
	var score = 0;
	if(document.getElementById('correct1').checked) {
		score ++;
	}
	if(document.getElementById('correct2').checked){
		score ++;
	}
	if(document.getElementById('correct3').checked){
		score ++;
	}

	if(document.getElementById('correct4').checked){
		score ++;
	}

	//alert("Your score is: " + score);

	document.getElementById('final').style.display = "block";
	const finalscore = document.querySelector('.point');
	finalscore.innerHTML = score;


	if(score > 2){

		document.getElementsByClassName('giphy-embed')[0].style.display = "block";
	}

	else{
		document.getElementsByClassName('giphy-embed')[1].style.display = "block";
	}

}
