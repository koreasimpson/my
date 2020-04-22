import "./common.js"

import "../scss/main.scss"

import myVideo from "../assets/img/my-video.MP4"
import myImg from "../assets/img/profile.JPG"

document.addEventListener("DOMContentLoaded", function() {
	const profileVideo = document.querySelector("video")
	const profileImg = document.querySelector(".profile img")
	profileVideo.setAttribute("src", myVideo)
	profileImg.setAttribute("src", myImg)
})
