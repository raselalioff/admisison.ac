// // custom_script.js

// function closeModal() {
//     var modal = document.getElementById("videoModal");
//     var videoPlayer = document.getElementById("videoPlayer");
//     videoPlayer.src = ""; // Reset the video URL
//     modal.style.display = "none"; // Hide the modal
//   }
$(document).ready(function () {

        // custom coursor
        if ($(".custom-cursor").length) {
          var cursor = document.querySelector(".custom-cursor__cursor");
          var cursorinner = document.querySelector(".custom-cursor__cursor-two");
          var a = document.querySelectorAll("a");
      
          document.addEventListener("mousemove", function (e) {
            var x = e.clientX;
            var y = e.clientY;
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
          });
      
          document.addEventListener("mousemove", function (e) {
            var x = e.clientX;
            var y = e.clientY;
            cursorinner.style.left = x + "px";
            cursorinner.style.top = y + "px";
          });
      
          document.addEventListener("mousedown", function () {
            cursor.classList.add("click");
            cursorinner.classList.add("custom-cursor__innerhover");
          });
      
          document.addEventListener("mouseup", function () {
            cursor.classList.remove("click");
            cursorinner.classList.remove("custom-cursor__innerhover");
          });
      
          a.forEach((item) => {
            item.addEventListener("mouseover", () => {
              cursor.classList.add("custom-cursor__hover");
            });
            item.addEventListener("mouseleave", () => {
              cursor.classList.remove("custom-cursor__hover");
            });
          });
        }
  $(".support-section-two-content").hide();
  $(".support-section-three-content").hide();
  $(".platforms .btn").click(function () {
    // Remove 'active' class from all buttons
    $(".platforms .btn").removeClass("active");

    // Add 'active' class to the clicked button
    $(this).addClass("active");
    var clickedClass = $(this).attr("class");
    if (clickedClass == "btn btn-support-section-one active") {
      $(".support-section-two-content").hide();
      $(".support-section-three-content").hide();
      $(".support-section-one-content").show();
    }
    if (clickedClass == "btn btn-support-section-two active") {
      $(".support-section-two-content").show();
      $(".support-section-three-content").hide();
      $(".support-section-one-content").hide();
    }
    if (clickedClass == "btn btn-support-section-three active") {
      $(".support-section-three-content").show();
      $(".support-section-two-content").hide();
      $(".support-section-one-content").hide();
    }
  });
  $(".institutions-slider").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Change the value to adjust autoplay speed (in milliseconds)
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  });

  $(".partner-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".team").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Function to toggle dots based on slidesToShow
  function toggleDots() {
    var slick = $(".slider");
    var slidesToShow = slick.slick("slickGetOption", "slidesToShow");
    var totalSlides = slick.slick("getSlick").slideCount;

    // Remove existing dots
    $(".slick-dots").empty();

    // Create new dots based on slidesToShow
    for (var i = 0; i < Math.ceil(totalSlides / slidesToShow); i++) {
      $(".slick-dots").append("<li></li>");
    }

    // Show or hide dots based on total slides
    if (totalSlides <= slidesToShow) {
      $(".slick-dots").hide();
    } else {
      $(".slick-dots").show();
      // Hide excess dots
      $(
        ".slick-dots li:gt(" + (Math.ceil(totalSlides / slidesToShow) - 1) + ")"
      ).hide();
    }
  }

  // Click event handler for slider headers
  $(".slider-header").on("click", function () {
    $(".slider-header").removeClass("active");

    // Add active class to the clicked header
    $(this).addClass("active");
    var category = $(this).data("category");

    // Determine the index of the first card in the selected category
    var index = $(".slider .card." + category)
      .first()
      .index();
    if (category == "all") {
      $(".slider").slick("slickGoTo", 0);
    }
    if (category == "business") {
      $(".slider").slick("slickGoTo", 0);
    }
    if (category == "engineering") {
      $(".slider").slick("slickGoTo", 3);
    }
    if (category == "medical") {
      $(".slider").slick("slickGoTo", 6);
    }
    // Move the slider to the determined index
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var myModal = new bootstrap.Modal(document.getElementById("videoModal"));

  // Function to open the modal and play the video
  function openModal(videoUrl) {
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = videoUrl; // Set the video URL dynamically
    myModal.show();
  }

  // Function to close the modal
  function closeModal() {
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = ""; // Reset the video URL
    myModal.hide();
  }

  // Get all elements with the class 'student-content'
  var studentContents = document.querySelectorAll(".student-content");

  // Loop through each student content and add a click event listener
  studentContents.forEach(function (studentContent) {
    studentContent.addEventListener("click", function () {
      var videoUrl =
        this.querySelector(".video-thumbnail").getAttribute("data-video-url");
      openModal(videoUrl); // Open the modal and play the video
    });
  });

  // Close the modal when clicking on the close button
  var closeButton = document.querySelector(".modal .btn-close");
  closeButton.addEventListener("click", function () {
    closeModal();
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", function (event) {
    var modal = document.getElementById("videoModal");
    var videoPlayer = document.getElementById("videoPlayer");
    if (event.target == modal && event.target != videoPlayer) {
      closeModal();
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var myModal = new bootstrap.Modal(document.getElementById("videoModal"));

  // Function to open the modal and play the video
  function openModal(videoUrl) {
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = videoUrl; // Set the video URL dynamically
    myModal.show();
  }

  // Function to close the modal
  function closeModal() {
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = ""; // Reset the video URL
    myModal.hide();
  }

  // Get all elements with the class 'student-content'
  var studentContents = document.querySelectorAll(".partner-content");

  // Loop through each student content and add a click event listener
  studentContents.forEach(function (studentContent) {
    studentContent.addEventListener("click", function () {
      var videoUrl =
        this.querySelector(".video-thumbnail").getAttribute("data-video-url");
      openModal(videoUrl); // Open the modal and play the video
    });
  });

  // Close the modal when clicking on the close button
  var closeButton = document.querySelector(".modal .btn-close");
  closeButton.addEventListener("click", function () {
    closeModal();
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", function (event) {
    var modal = document.getElementById("videoModal");
    var videoPlayer = document.getElementById("videoPlayer");
    if (event.target == modal && event.target != videoPlayer) {
      closeModal();
    }
  });
});

// script.js
let currentPart = 1;

function nextPart(current) {
  document.getElementById(`part${current}`).style.display = "none";
  currentPart = current + 1;
  document.getElementById(`part${currentPart}`).style.display = "block";
  event.preventDefault(); // Prevent form submission
}

function prevPart(current) {
  document.getElementById(`part${current}`).style.display = "none";
  currentPart = current - 1;
  document.getElementById(`part${currentPart}`).style.display = "block";
  event.preventDefault(); // Prevent form submission
}

function openModals() {
  $("#exampleModal").modal("show");
}

function closeModal() {
  $("#exampleModal").modal("hide");
}

function submitForm() {
  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
  let country = document.getElementById("country").value;
  let phone = document.getElementById("phone_number").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let program = document.getElementById("program").value;
  let year = document.getElementById("year").value;
  let sponsorship = document.getElementById("sponsorship").value;

  console.log("First Name: " + firstName);
  console.log("Last Name: " + lastName);
  console.log("Country: " + country);
  console.log("Phone Number: " + phone);
  console.log("Email: " + email);
  console.log("Password: " + password);
  console.log("Program: " + program);
  console.log("Year: " + year);
  console.log("Sponsorship: " + sponsorship);


}
var input = document.querySelector("#phone_number");
window.intlTelInput(input, {
    separateDialCode: true
});

