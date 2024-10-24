let experience = document.getElementById("experience");
let skills = document.getElementById("skills");
let experienceDetail = document.getElementById("experience-detail");
let skillsDetail = document.getElementById("skills-detail");
let productDetail = document.querySelectorAll("#product-detail");
let products = document.getElementById("products");
let cards = document.querySelectorAll("#card");
let eyeIcon = document.querySelectorAll("#eye-icon");
let readMore = document.getElementById("read-more")
let moreCard = document.getElementById("more-card")
let allProject = document.getElementById("all-project")
let webDesign = document.getElementById("web-design")
let uiDesign = document.getElementById("ui-design")

if (skills) {
  skills.addEventListener("click", function () {
    experience.classList.remove("bg-purple");
    experience.classList.remove("text-white");
    skills.classList.add("bg-purple");
    skills.classList.add("text-white");

    skillsDetail.classList.remove("d-none");
    skillsDetail.classList.add("d-row");
    experienceDetail.classList.remove("d-row");
    experienceDetail.classList.add("d-none");
  });
}

if (experience) {
  experience.addEventListener("click", function () {
    skills.classList.remove("bg-purple");
    skills.classList.remove("text-white");
    experience.classList.add("bg-purple");
    experience.classList.add("text-white");

    experienceDetail.classList.remove("d-none");
    experienceDetail.classList.add("d-row");
    skillsDetail.classList.remove("d-row");
    skillsDetail.classList.add("d-none");
  });
}
if (productDetail) {
  productDetail.forEach(function (element) {
    element.addEventListener("click", function () {
      if (this.classList.contains("allproduct")) {
        allProject.classList.remove("d-none")
        webDesign.classList.add("d-none")
        uiDesign.classList.add("d-none")
      } else if (this.classList.contains("webdevelopment")) {
        webDesign.classList.remove("d-none");
        allProject.classList.add("d-none");
        uiDesign.classList.add("d-none");
        allProject.classList.remove("nav-style");
        this.classList.add("nav-style");
      } else if (this.classList.contains("ux")) {
        uiDesign.classList.remove("d-none")
        webDesign.classList.add("d-none")
        allProject.classList.add("d-none")
        this.classList.add("nav-style");
      } else {
        return false;
      }
    });
  });
}


if(cards){
  cards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        const childDiv = card.querySelector('#products');
        if (childDiv.classList.contains('d-none')) {
            childDiv.classList.remove('d-none');
        }
    });
    card.addEventListener('mouseleave', function() {
        const childDiv = card.querySelector('#products');
        childDiv.classList.add('d-none');
    });
  });
}

if(eyeIcon){
  eyeIcon.forEach(function(icon){
    icon.addEventListener("click", function(){
      const parentDiv = this.closest(".col-12");
      const cardImg = parentDiv.querySelector("#card-img")
      let hello = cardImg.getAttribute("src");
      alert(hello)
    })
  })
}

if(readMore){
  readMore.addEventListener("click", function(){
    moreCard.classList.remove("d-none")
    readMore.classList.add("d-none")
  })
}