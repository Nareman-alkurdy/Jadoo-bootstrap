
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  
//   function setArabic() {
//     document.documentElement.lang = "ar";
//     document.documentElement.dir = "rtl";
//     // إذا بدك تغيري النصوص كمان، فينا نضيفها لاحقًا
//   }

//   function setEnglish() {
//     document.documentElement.lang = "en";
//     document.documentElement.dir = "ltr";
//   }


//   function setArabic() {
//     document.documentElement.lang = "ar";
//     document.documentElement.dir = "rtl";
//   }

//   function setEnglish() {
//     document.documentElement.lang = "en";
//     document.documentElement.dir = "ltr";
//   }



  function setArabic() {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    document.getElementById("languageToggle").innerText = "AR";
  }

  function setEnglish() {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    document.getElementById("languageToggle").innerText = "EN";
  }


  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }

