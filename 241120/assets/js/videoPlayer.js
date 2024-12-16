/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/videoPlayer.js":
/*!**************************************!*\
  !*** ./src/client/js/videoPlayer.js ***!
  \**************************************/
/***/ (() => {

eval("// const e = require(\"express\");\n\nconst video = document.querySelector(\"video\");\nconst playBtn = document.getElementById(\"play\");\nconst muteBtn = document.getElementById(\"mute\");\nconst volumeRange = document.getElementById(\"volume\");\nconst currentTime = document.getElementById(\"currentTime\");\nconst totalTime = document.getElementById(\"totalTime\");\nconst timeline = document.getElementById(\"timeline\");\nlet volumeValue = 0.5;\nvideo.volume = volumeValue;\nconst handlePlayClick = () => {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n  playBtn.innerText = video.paused ? \"Play\" : \"Pause\";\n};\nconst handlePause = () => {\n  playBtn.innerText = \"Play\";\n};\nconst handlePlay = () => {\n  playBtn.innerText = \"Pause\";\n};\nconst handleMute = () => {\n  if (video.muted) {\n    video.muted = false;\n  } else {\n    video.muted = true;\n  }\n  muteBtn.innerText = video.muted ? \"Unmute\" : \"Mute\";\n  volumeRange.value = video.muted ? 0 : 0.5;\n};\nconst handleVolumeChange = event => {\n  console.log(e.target.value);\n  const {\n    target: {\n      value\n    }\n  } = event;\n  volume = value;\n  video.volume = volume;\n};\nconst formatTime = seconds => {\n  return new Date(seconds * 1000).toISOString().substring(11, 19);\n};\nconst handleLoadedMetaData = () => {\n  totalTime.innerText = formatTime(Math.floor(video.duration));\n  timeline.max = Math.floor(video.duration);\n  console.log(video.duration);\n};\nconst handleTimeUpdate = () => {\n  currentTime.innerText = formatTime(Math.floor(video.currentTime));\n  timeline.value = Math.floor(video.currentTime);\n};\nplayBtn.addEventListener(\"click\", handlePlayClick);\nmuteBtn.addEventListener(\"click\", handleMute);\n// video.addEventListener(\"pause\", handlePause);\n// video.addEventListener(\"play\", handlePlay);\nvolumeRange.addEventListener(\"input\", handleVolumeChange);\nvideo.addEventListener(\"loadedmetadata\", handleLoadedMetaData);\nvideo.addEventListener(\"timeupdate\", handleTimeUpdate);\n\n//# sourceURL=webpack://nodeproject/./src/client/js/videoPlayer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/videoPlayer.js"]();
/******/ 	
/******/ })()
;