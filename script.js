let experience = document.getElementById("experience");
let skills = document.getElementById("skills");
let experienceDetail = document.getElementById("experience-detail");
let skillsDetail = document.getElementById("skills-detail");
let productDetail = document.querySelectorAll("#product-detail")


if(skills){
  skills.addEventListener("click", function(){
    experience.classList.remove("bg-purple");
    experience.classList.remove("text-white");
    skills.classList.add("bg-purple");
    skills.classList.add("text-white");
  
    skillsDetail.classList.remove("d-none")
    skillsDetail.classList.add("d-row")
    experienceDetail.classList.remove("d-row")
    experienceDetail.classList.add("d-none")
  })
}

if(experience){
  experience.addEventListener("click", function(){
    skills.classList.remove("bg-purple");
    skills.classList.remove("text-white");
    experience.classList.add("bg-purple");
    experience.classList.add("text-white");
    
    experienceDetail.classList.remove("d-none")
    experienceDetail.classList.add("d-row")
    skillsDetail.classList.remove("d-row")
    skillsDetail.classList.add("d-none")
  })
}
if (productDetail) {
  productDetail.forEach(function(element) {
    element.addEventListener("click", function() {
      if (this.classList.contains("allproduct")) {
        alert("This is the all project section");
      }
      else if (this.classList.contains("webdevelopment")) {
        alert("This is the web development section");
      }
      else if (this.classList.contains("ux")) {
        alert("This is the UX/UI section");
      }
      else{
        return false
      }
    });
  });
}