var preReq=[];
curr.forEach(function(d){
	d.courses.forEach(function(p){
		if(p.pre!=undefined){
		preReq.push(p.pre)}
	})
})
console.log(preReq)
const container=d3.select(".grid-container")     //specify grid-container div to work with.

const semesters=container.selectAll(".semester").data(curr).enter().append("div").attr("class","semester");   // creating number of semesters offered.

const courses=semesters.selectAll(".course-grid").data(d=>d.courses).enter().append("div").attr("class",d=>d.name[1].slice(0,4)+" course-grid");  //creating courses for each semester.

const course=courses.selectAll(".course").data(d=>d.name).enter().append("div").attr("class",(d,i)=>course_tags[i])
course.filter(function(d,i) { return i < 5 }).append('p').text(d=>d);

const preRequisit=d3.selectAll(".course-pre").data(preReq)
preRequisit.selectAll(".pre").data(d=>d).enter().append("div").attr("class",d=>d[1].slice(0,4)+" required").append("p").text(d=>d[0])




