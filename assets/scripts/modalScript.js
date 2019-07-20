// Get the modal
var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for(var i = 0; i < images.length; i++)
{
	images[i].onclick = function()
	{
		modal.style.display = "block";
	  	modalImg.src = this.src;
	  		//console.log("img event!!");
	  	captionText.innerHTML = this.alt;
	}

	
}

window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}