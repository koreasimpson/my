import "./common.js"
import "../scss/main.scss"

import myImg from "../assets/img/profile.JPG"

document.addEventListener("DOMContentLoaded", function() {
	const profileImg = document.querySelector(".profile img")
	console.log("myImg =", myImg)
	profileImg.setAttribute("src", `my/${myImg}`)
})
