$(document).ready(function () {
  // For Navbar active link highlight
  const currentLocation = location.href;
  const menuItem = $(".main-navigation .nav-item a");
  const menuLength = menuItem.length;

  // Logic for GIS Map Menu
  const gismapRegex = /gismap/;
  const isGismap = gismapRegex.test(currentLocation);

  if (!isGismap) {
    // Logic for Aboutus active link cause it has two navbars
    const aboutRegex = /about/;
    const isAbout = aboutRegex.test(currentLocation);
    const indexOfAbout = 1;

    //Logic for Newsroom active link cause it has two navbars
    const newsroomRegex = /newsroom/;
    const isNewsroom = newsroomRegex.test(currentLocation);
    const indexOfNewsroom = 6;

    //Logic for Notices active link cause it has two navbars
    const noticesRegex = /notices/;
    const isNotices = noticesRegex.test(currentLocation);
    const indexOfNotices = 7;

    for (let i = 0; i < menuLength; i++) {
      if (menuItem[i].href === currentLocation) {
        menuItem[i].closest(".nav-item").className = "nav-item active";
      }
      // Condition for About us page
      else if (isAbout) {
        menuItem[indexOfAbout].closest(".nav-item").className =
          "nav-item dropdown active";
      }
      // Condition for Newsroom page
      else if (isNewsroom) {
        menuItem[indexOfNewsroom].closest(".nav-item").className =
          "nav-item active";
      }
      // Condition for Notices page
      else if (isNotices) {
        menuItem[indexOfNotices].closest(".nav-item").className =
          "nav-item active";
      }
    }
  }

  // For active About menu
  const aboutmenuItem = $(".about-nav .nav-item a");
  const aboutmenuLength = aboutmenuItem.length;
  for (let i = 0; i < aboutmenuLength; i++) {
    if (aboutmenuItem[i].href === currentLocation) {
      aboutmenuItem[i].className = "nav-link active";
    }
  }

  // About us popup
  let modal = document.getElementById("myModal");
  let span;

  let figure = document.querySelectorAll("figure").forEach((fig) => {
    if (fig) {
      fig.addEventListener("click", () => {
        modal.style.display = "block";
      });
      span = document.querySelector(".close");
    } else {
      modal.style.display = "none";
    }
  });

  if (span) {
    span.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }


  // simant



  // For Popup
  const closePopupBtn = document.querySelector(".popup-close-btn");

  if (closePopupBtn) {
    closePopupBtn.addEventListener("click", () => {
      document.body.classList.remove("popup-active");
    });
  }

  $(document).click(function (event) {
    var $target = $(event.target);
    if (!$target.closest(".popup").length && $(".popup").is(":visible")) {
      document.body.classList.remove("popup-active");
    }
  });

  // End of Popup

  // News Section in Home Page
  const informationContent =
    '<div class="filter-dropdown"> <label for="information-filter">Filter</label> <select name="cars" id="information-filter" aria-placeholder="" > <option value="volvo"> National strategy on HIV Drug Resistant Monitoring & survillance in nepal </option> <option value="saab">Lorem Ipsum</option> <option value="mercedes">Lorem Ipsum</option> <option value="audi">Lorem Ipsum</option> </select> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row"> <div class="col" id="btn-news-container"> <a href="pages/news/information.html" class="btn btn-primary"><i class="fa-solid fa-eye"></i>View all News</a> </div> </div>';

  const serviceContent =
    '<div class="filter-dropdown"> <label for="information-filter">Filter</label> <select name="cars" id="information-filter" aria-placeholder="" > <option value="volvo"> National strategy on HIV Drug Resistant Monitoring & survillance in nepal </option> <option value="saab">Lorem Ipsum</option> <option value="mercedes">Lorem Ipsum</option> <option value="audi">Lorem Ipsum</option> </select> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row"> <div class="col p-2 text-end" id="btn-news-container"> <a href="pages/news/service.html" class="btn btn-primary"><i class="fa-solid fa-eye"></i>View all Service Station</a> </div> </div>';

  const factContent =
    '<div class="filter-dropdown"> <label for="information-filter">Filter</label> <select name="cars" id="information-filter" aria-placeholder="" > <option value="volvo"> National strategy on HIV Drug Resistant Monitoring & survillance in nepal </option> <option value="saab">Lorem Ipsum</option> <option value="mercedes">Lorem Ipsum</option> <option value="audi">Lorem Ipsum</option> </select> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row"><div class="col p-2 text-end" id="btn-news-container"><a href="pages/news/fact.html" class="btn btn-primary"><i class="fa-solid fa-eye"></i>View all Facts</a></div></div>';

  const recordingContent =
    '<div class="filter-dropdown"> <label for="information-filter">Filter</label> <select name="cars" id="information-filter" aria-placeholder="" > <option value="volvo"> National strategy on HIV Drug Resistant Monitoring & survillance in nepal </option> <option value="saab">Lorem Ipsum</option> <option value="mercedes">Lorem Ipsum</option> <option value="audi">Lorem Ipsum</option> </select> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row"><div class="col p-2 text-end" id="btn-news-container"><a href="pages/news/recording.html" class="btn btn-primary"><i class="fa-solid fa-eye"></i>View all Recording</a></div></div>';

  const publicationContent =
    '<div class="filter-dropdown"> <label for="information-filter">Filter</label> <select name="cars" id="information-filter" aria-placeholder="" > <option value="volvo"> National strategy on HIV Drug Resistant Monitoring & survillance in nepal </option> <option value="saab">Lorem Ipsum</option> <option value="mercedes">Lorem Ipsum</option> <option value="audi">Lorem Ipsum</option> </select> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row news-bar-container"> <div class="col"> <div class="row d-flex align-items-center"> <div class="col-2 news-date-circle text-center"> 14 DEC </div> <div class="col-10"> <p class="my-auto"> Invitation for e-sealed Quotation for Procurement of STi/OI Drugs </p> </div> </div> </div> </div> <div class="row"><div class="col p-2 text-end" id="btn-news-container"><a href="pages/news/publication.html" class="btn btn-primary"><i class="fa-solid fa-eye"></i>View all Publication</a></div></div>';

  $("#news-card-body").html(informationContent);
  $("#news-information").click(() => {
    $(
      ".news-container .card .card-header .nav .nav-item .nav-link"
    ).removeClass("active");
    $("#news-information").addClass("active");
    $("#news-card-body").html(informationContent);
  });
  $("#news-service").click(() => {
    $(
      ".news-container .card .card-header .nav .nav-item .nav-link"
    ).removeClass("active");
    $("#news-service").addClass("active");
    $("#news-card-body").html(serviceContent);
  });
  $("#news-fact").click(() => {
    $(
      ".news-container .card .card-header .nav .nav-item .nav-link"
    ).removeClass("active");
    $("#news-fact").addClass("active");
    $("#news-card-body").html(factContent);
  });
  $("#news-recording").click(() => {
    $(
      ".news-container .card .card-header .nav .nav-item .nav-link"
    ).removeClass("active");
    $("#news-recording").addClass("active");
    $("#news-card-body").html(recordingContent);
  });
  $("#news-publications").click(() => {
    $(
      ".news-container .card .card-header .nav .nav-item .nav-link"
    ).removeClass("active");
    $("#news-publications").addClass("active");
    $("#news-card-body").html(publicationContent);
  });
  // End of News Section of Home Page

  // Notices
  // For active notice menu
  const noticesMenuItem = $(".notices-menu .nav .nav-item a");
  const noticesMenuLength = noticesMenuItem.length;
  for (let i = 0; i < noticesMenuLength; i++) {
    if (noticesMenuItem[i].href === currentLocation) {
      noticesMenuItem[i].className = "nav-link active";
    }
  }
});
