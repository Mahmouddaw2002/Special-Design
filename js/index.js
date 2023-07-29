const translations = {
  en: {
    send: "Send",
    Reset_Option: "Reset Option",
    Random_Backgrounds: "Random Backgrounds",
    Colors: "Colors",
    Show: "Show",
    Hide: "Hide",
    yes: "yes",
    no: "no",
    Show_Bullets: "Show Bullets",
    Special_Design: "Special Design",
    About: "About",
    Skills: "Skills",
    gallery: "Gallery",
    timeline: "Timeline",
    features: "Features",
    testimonials: "Testimonials",
    header: "We Are Creative Agency",
    desc1:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ipsa cumque, alias aut itaque, at, temporibus",
    about: "About Us",
    desc2:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vel tempora blanditiis optio dolores architectosimilique dignissimos ratione saepe odio?",
    Our_Skills: "Our Skills",
    Our_Gallery: "Our Gallery",
    desc3:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dictamolestias perferendis libero similique nemo sed ipsam? Asperiores reiciendis natus odio porro quo eligendi a odit, velit magnam harum, officiis fugit.",
    Our_Features: "Our Features",
    desc4:
      "  We are professional marketeers, we will do anything you imagine in no time.",
    Development: "Development",
    Marketing: "Marketing",
    Hosting: "Hosting",
    Database: "Database",
    Cloud_and_Servers: "Cloud and Servers",
    Seo: "Seo",
    Testimonials: "Testimonials",
    desc5:
      " Iam very happy with the product its amazing and i recieve it very fast and the price was amazing.",
    desc6: "CEO At Company",
    name1: "Ahmed Mosaad",
    name2: "Mohamed Ibrahim",
    name3: "Sherief Ashraf",
    Contact_Us: "Contact Us",
    footer: "Create With Love By Mahmoud Dawoud",
    lang: "lang",
  },
  ar: {
    send: "ارسال",
    Reset_Option: "إعادة تعيين الخيار",
    Random_Backgrounds: "خلفيات عشوائية",
    Colors: "الوان",
    Show: "اظهار",
    Hide: "اخفاء",
    yes: "نعم",
    no: "لا",
    Show_Bullets: "عرض الايقونه",
    Special_Design: "تصميم خاص",
    About: "عنا",
    Skills: "مهارات",
    gallery: "صالة عرض",
    timeline: "الجدول الزمني",
    features: "سمات",
    testimonials: "التوصيات",
    header: "نحن وكالة إبداعية",
    desc1:
      "العميل نفسه ، سيتمكن العميل من متابعة اكتساب الشركة. ليتم محوها ، مع ذلك ، في أوقات أخرى ، أو نحو ذلك ، في بعض الأحيان",
    about: "معلومات عنا",
    desc2:
      "العميل نفسه ، سيتمكن العميل من متابعة اكتساب الشركة. ليتم محوها ، مع ذلك ، في أوقات أخرى ، أو نحو ذلك ، في بعض الأحيان",
    Our_Skills: "مهاراتنا",
    Our_Gallery: "معرضنا",
    desc3:
      "العميل نفسه ، سيتمكن العميل من متابعة اكتساب الشركة. ليتم محوها ، مع ذلك ، في أوقات أخرى ، أو نحو ذلك ، في بعض الأحيان",
    Our_Features: "ميزاتنا",
    desc4: "نحن مسوقي محترفون ، وسنفعل أي شيء تتخيله في أي وقت من الأوقات.",
    Development: "تطوير",
    Marketing: "تسويق",
    Hosting: "الاستضافة",
    Database: "قاعدة البيانات",
    Cloud_and_Servers: "السحابة والخوادم",
    Seo: "كبار المسئولين الاقتصاديين",
    Testimonials: "الشهادات - التوصيات",
    desc5:
      "العميل نفسه ، سيتمكن العميل من متابعة اكتساب الشركة. ليتم محوها ، مع ذلك ، في أوقات أخرى ، أو نحو ذلك ، في بعض الأحيان",
    desc6: "الرئيس التنفيذي في الشركة",
    name1: "احمد مسعد",
    name2: "محمد ابراهيم",
    name3: "شريف اشرف",
    Contact_Us: "اتصل بنا",
    footer: "انشىء بواسطة المبرمج محمود داود",
    lang: "اللغة",
  },
};

const languageSelector = document.querySelector("#lang");
// const langButton = document.querySelector("#lang");

languageSelector.addEventListener("click", (event) => {
  const currentLanguage = languageSelector.textContent.trim();
  const newLanguage = currentLanguage === translations.en.lang ? "ar" : "en";
  setLanguage(newLanguage);
  languageSelector.textContent = translations[newLanguage].lang;
  localStorage.setItem("lang", newLanguage);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en";
  languageSelector.textContent = translations[language].lang;
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};

// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);

  // Remove Active Class From All Colors List Item

  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval

let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not Empty

if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }

  // Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}

// Toggle Spin Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class Fa-spin For Rotation On Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open On Main  Settings Box
  document.body.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors

const colorsLi = document.querySelectorAll(".colors-list li");

// Loop One All List Item
colorsLi.forEach((li) => {
  // Click On Every List Item
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // Set Color On Root
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);
  });
});

// Switch Random Background Option

const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop One All Spans
randomBackEl.forEach((span) => {
  // Click On Every Span
  span.addEventListener("click", (e) => {
    handleActive(e);

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
    }
  });
});

// Select Landing Page Element

let landingPage = document.body.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get Random Number

      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      // Change Background Image Url

      landingPage.style.backgroundImage =
        "url('./imgs/" + `${imgsArray[randomNumber]}` + "')";
    }, 10000);
  }
}
randomizeImgs();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// Create Popup With The Image

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = "popup-overlay";

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create Text For Heading
      let imgText = document.createTextNode(img.alt);

      //Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);
    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Class Button
    closeButton.className = "close-button";

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);
  });
});

// Close Popup
document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    // Remove The Current Popup
    // e.target.parentNode.remove();
    document.querySelector(".popup-box").remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();
  }
});

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

// Handle Active State
function handleActive(ev) {
  // Remove Active Class From All Childrens
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  // Add Active Class On Self
  ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletLocalItem === "block") {
    bulletsContainer.style.display = "block";

    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";

    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletsContainer.style.display = "block";

      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsContainer.style.display = "none";

      localStorage.setItem("bullets_option", "none");
    }

    handleActive(e);
  });
});

// Reset Button

document.querySelector(".reset-options").onclick = function () {
  // localStorage.clear();
  localStorage.removeItem("bullets_option");
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");

  // Reload Window
  window.location.reload();
};

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  // Stop Propagation
  e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tlinks.classList.toggle("open");
};

// Click AnyWhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tlinks) {
    // Check If Menu Is Open
    if (tlinks.classList.contains("open")) {
      // Toggle Class "menu-active" On Button
      toggleBtn.classList.toggle("menu-active");

      // Toggle Class "open" On Links
      tlinks.classList.toggle("open");
    }
  }
});
// Stop Propagation On Menu
tlinks.onclick = function (e) {
  e.stopPropagation();
};
