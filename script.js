document.querySelector(".card__footer-share").addEventListener("click", ()=>{
	document.getElementById("share").classList.toggle("card__share-hidden");
	document.querySelector(".card__footer-share").classList.toggle("icon-share_active")
})