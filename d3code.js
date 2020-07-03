var preReq=[];
const container=d3.select(".grid-container")     //specify grid-container div to work with.

const semesters=container.selectAll(".semester").data(curr).enter().append("div").attr("class","semester");   // creating number of semesters offered.

const courses=semesters.selectAll(".course-grid").data(d=>d.courses).enter().append("div").attr("class",d=>d.name[1].slice(0,4)+" course-grid");  //creating courses for each semester.

const course=courses.selectAll(".course").data(d=>d.name).enter().append("div").attr("class",(d,i)=>course_tags[i])
course.filter(function(d,i) { return i < 5 }).append('p').text(d=>d);

console.log(d3.selectAll(".course-pre"))
 console.log(semesters.data(d=>d.pre))



//console.log(d3.selectAll(".course-pre").selectAll(".required").data(function(d,i){
    
  //console.log(d)}).enter().append("div").attr("class","required").append("p").text(d=>d));






