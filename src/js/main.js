import "./common.js"
import "../scss/main.scss"

import myImg from "../assets/img/profile_simpson.png"

document.addEventListener("DOMContentLoaded", function() {
	const profileImg = document.querySelector(".profile img")
	profileImg.setAttribute("src", `my/${myImg}`)
})
