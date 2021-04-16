$(document).ready(function () {
	
	//ScrollMagic controller init
	let controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
			.fromTo('.project2', {y: '-100%', x: '-100%'}, {y: '0%', x: '0%', ease: Linear.easeNone})
    .fromTo('.project3', {y: '100%', x: '100%'}, {x: '0%', y: '0%', ease: Linear.easeNone})
    .fromTo('.project4', {y: '-100%', x: '-100%'}, {y: '0%', x: '0%', ease: Linear.easeNone});

		// create scene to pin and link animation
		new ScrollMagic.Scene({
			triggerElement: "#main",
			triggerHook: "onLeave",
			duration: "300%"
		})
		.setPin("#main")
		.setTween(wipeAnimation)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	});