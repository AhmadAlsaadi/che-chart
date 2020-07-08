d3.select("header").attr("class",department).append("div").attr("class","course-no").append("h1").text(program)

var preReq=[];
curr.forEach(function(d){
	d.courses.forEach(function(p){
		if(p.pre!=undefined){
		preReq.push(p.pre)}
	})
});
const container=d3.select(".grid-container")     //specify grid-container div to work with.

const semesters=container.selectAll(".semester").data(curr).enter().append("div").attr("class","semester");   // creating number of semesters offered.

const courses=semesters.selectAll(".course-grid").data(d=>d.courses).enter().append("div").attr("class",d=>d.name[1].slice(0,4)+" course-grid").attr("id",d=>d.name[1]);  //creating courses for each semester.

const course=courses.selectAll(".course").data(d=>d.name).enter().append("div").attr("class",(d,i)=>course_tags[i])
course.filter(function(d,i) { return i < 5 }).append('p').text(d=>d);

const preRequisit=d3.selectAll(".course-pre").data(preReq)
preRequisit.selectAll(".pre").data(d=>d).enter().append("div").attr("class",d=>d[1].slice(0,4)+" required").append("p").text(d=>d[0])

d3.selectAll(".required").on("click",findPre)
var target=document.body
function findPre(d){
	target.style.background=""
	target=document.getElementById(d[1]);
	if(target!=null){
		target.style.background="grey";
		var bounding = target.getBoundingClientRect();
		if (
			bounding.top >= 0 &&
			bounding.left >= 0 &&
			bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
			bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		) {
		} else {
			target.scrollIntoView();
		}
		
	}else{
	alert("this course is in the prep year")
	target=document.body		
}
}




