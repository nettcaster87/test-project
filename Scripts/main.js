let myImage = document.querySelector('img');

myImage.onclick = function(){
	let	mySrc = myImage.getAttribute('src');
	if(mySrc === 'Images/git_status_sequence.png') {
		myImage.setAttribute('src','Images/bmw-m2.jpg');
	} else {
		myImage.setAttribute('src','Images/git_status_sequence.png');
	}
}