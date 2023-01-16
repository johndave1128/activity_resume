const fullname = "John Dave Aquino";
const country = "Philippines";
 
setHTML("fullname",fullname);  
setHTML("location",country);

const positions = ["Web Developer", "Mobile Developer"];

positions.forEach(i => {
   const span = "<span class='tags'>"+i+"</span>";
    getHTML("positions").innerHTML += span;
});


const educationData = [
   { 
     schoollogo: "images/psu.png",
     course:"BSCS",
     schoolname:"PSU-LINGAYEN CAMPUS",
     yeargraduated:"2022"
   },
   { 
       schoollogo: "images/mnhslogo.png",
       course:"TVL-ICT Major in Programming",
       schoolname:"Mangaldan National High School (SENIOR HIGH)",
       yeargraduated:"2018"
     } 
]; 
educationData.forEach(i => {

           const educHTML = `<tr>
               <td>
                   <img style="height:120px;"
                   src="${i.schoollogo}" class="school-banner" />
               </td>   
               <td>${i.course}</td>  
               <td>${i.schoolname}</td>  
               <td>${i.yeargraduated}</td>  
           </tr> `;

           getHTML("educationRows").innerHTML += educHTML;
 
});


const profiledata = [{
   data:"I am a computer science graduate. I always look forward to the new knowledge that I will gain from my new work experience, and I consider myself a responsible and hardworking person."}
];

profiledata.forEach(i => {

   const profileHTML = `<tr>
       <td>${i.data}</td>  
   </tr> `;

   getHTML("profileInfo").innerHTML += profileHTML;

});
const myskills = [ { name : "HTML 5 & CSS", proficiency : "skilled"},
{ name : "PHP", proficiency : "skilled"},
{ name : "Java", proficiency : "skilled"},
{ name : "React", proficiency :  "beginner"},
{ name : "Flutter", proficiency : "beginner"},
];
 
myskills.forEach(i=> { 
   const skillsHTML = ` <li>
       ${i.name} 
       <div title="${i.proficiency}" class="proficiency ${i.proficiency} 
       proficiency-${i.proficiency}">
       </div>
   </li>`; 

    getHTML("myskills").innerHTML += skillsHTML;
});



const Legends = ["newbie","beginner","skilled","expert","advance"];

Legends.forEach(i => {
 const  htmLegends = ` <span class="legend-title">
   ${i}</span>
   <div class="legend-color  ${i}"></div>`;
   getHTML("legends-item").innerHTML += htmLegends;

}); 



function getHTML(id) {
   const doc = document;
   return doc.getElementById(id);
}

function setHTML(id,str) { 
   document.getElementById(id).innerHTML=str;
}