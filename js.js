$(document).ready(function () {
	
	//ScrollMagic controller init
	let controller = new ScrollMagic.Controller();

	let pinHeaderScene = new ScrollMagic.Scene({
		triggerElement: '.header',
		triggerHook: 0,
		duration: '35%'
	})
	.setPin(".header", {pushFollowers: false})
	.addTo(controller)

	let pinHeaderScene2 = new ScrollMagic.Scene({
		triggerElement: '.project1',
		triggerHook: 0.3,
	})
	.setPin(".header", {pushFollowers: true})
	//.addIndicators()
	.addTo(controller)

	// Parallax Scenes
	let slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.parallax1',
		triggerHook: 0.7,
		duration: '200%'
	})
	.setTween(".bcg1", 1, {y: '80%', ease: Linear.easeNone})
// 	.addIndicators()
	.addTo(controller);

	let slideParallaxScene2 = new ScrollMagic.Scene({
		triggerElement: '.parallax2',
		triggerHook: 0.7,
		duration: '200%'
	})
	.setTween(".bcg2", 1, {y: '80%', ease: Linear.easeNone})
// 	.addIndicators()
	.addTo(controller);

	let slideParallaxScene3 = new ScrollMagic.Scene({
		triggerElement: '.parallax3',
		triggerHook: 0.7,
		duration: '150%'
	})
	.setTween(".bcg3", 1, {y: '60%', ease: Linear.easeNone})
// 	.addIndicators()
	.addTo(controller);
});