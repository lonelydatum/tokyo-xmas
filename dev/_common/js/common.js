const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

console.log(bannerSize.h/100);
gsap.defaults({
  ease: "power.out"
});


function init(){	
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	return tl
}


function v1(){
	const tl = init()	
	tl.from([".cta", ".legal"], {opacity:0, duration:.5}, 2)	
	TweenLite.from(".glow", {duration:2, opacity:0, delay:.5, yoyo:true, repeat:4})
}

function v3(tag=70){
	const tl = init()	
	// tl.from(".tag", {opacity:0, duration:.7, y:`-=${tag}`, ease:Elastic.easeOut}, .5)	
	tl.from(".title", {opacity:0, duration:.3})	
	tl.from(".cta", {opacity:0, duration:.3}, "+=1.3")	

	const snow = new TimelineMax()
	snow.from(".snow-1", {x:"-=50", duration:3, ease:Power1.easeOut}, 0)	
	snow.from(".snow-2", {x:"-=50", duration:2, ease:Power1.easeOut}, 0)	
	snow.from(".snow-3", {x:"-=50", duration:4, ease:Power1.easeOut}, 0)	
	snow.from(".snow-4", {x:"-=30", duration:6, ease:Power1.easeOut}, 0)	
	snow.to(".flake", {y:`+=${bannerSize.h}`, duration:Math.max(bannerSize.h/100, 1.7), opacity:0, ease:Power1.easeOut, repeat:1}, 0)	

}


export { init, v1, v3 }