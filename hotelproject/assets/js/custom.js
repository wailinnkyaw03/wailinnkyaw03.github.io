const date = new Date();
let month = date.getMonth();
let day = date.getDate();
let year = date.getFullYear();
    switch (month) {
        case 0:
          month = "JAN";
          break;
        case 1:
          month = "FEB";
          break;
        case 2:
           month = "MAR";
          break;
        case 3:
          month = "APR";
          break;
        case 4:
          month = "MAY";
          break;
        case 5:
          month = "JUNE";
          break;
        case 6:
          month = "JUL";
          break;
        case 7:
          month = "AUG";
          break;
        case 8:
          month = "SEP";
          break;
        case 9:
          month = "OCT";
          break;
        case 10:
          month = "NOV";
          break;
        case 11:
          month = "DEC";
          break;
      }
// console.log(day, "/", month, "/", year);
// $("#checkIn").val(year, "/", month, "/", day);

// booking
const guestBtn = document.querySelector("#guests-input-btn"),
	guestOptions = document.querySelector("#guests-input-options"),
	adultsSubsBtn = document.querySelector("#adults-subs-btn"),
	adultsAddBtn = document.querySelector("#adults-add-btn"),
	childrenSubsBtn = document.querySelector("#children-subs-btn"),
	childrenAddBtn = document.querySelector("#children-add-btn"),
	adultsCountEl = document.querySelector("#guests-count-adults"),
	childrenCountEl = document.querySelector("#guests-count-children");
let maxNumGuests = 15,
	isGuestInputOpen = false,
	adultsCount = 1,
	childrenCount = 0;
updateValues();
guestBtn.addEventListener('click', function (e) {
	if (isGuestInputOpen) {
		guestBtn.classList.remove("open");
		guestOptions.classList.remove("open");
	} else {
		guestBtn.classList.add("open");
		guestOptions.classList.add("open");
	}
	isGuestInputOpen = isGuestInputOpen ? false : true;
	e.preventDefault();
});
adultsAddBtn.addEventListener('click', function () {
	adultsCount = addValues(adultsCount);
	updateValues();
});
adultsSubsBtn.addEventListener('click', function () {
	adultsCount = substractValues(adultsCount, 1);
	updateValues();
});
childrenAddBtn.addEventListener('click', function () {
	childrenCount = addValues(childrenCount);
	updateValues();
});
childrenSubsBtn.addEventListener('click', function () {
	childrenCount = substractValues(childrenCount, 0);
	updateValues();
});

function calcTotalGuests() {
	return adultsCount + childrenCount;
}

function addValues(count) {
	return (calcTotalGuests() < maxNumGuests) ? count + 1 : count;
}

function substractValues(count, min) {
	return (count > min) ? count - 1 : count;
}

function updateValues() {
	let btnText = `${adultsCount} Adults`;
	btnText += (childrenCount > 0) ? `, ${childrenCount} Children` : '';
	guestBtn.innerHTML = btnText;
	adultsCountEl.innerHTML = adultsCount;
	childrenCountEl.innerHTML = childrenCount;
	if (adultsCount == 1) {
		adultsSubsBtn.classList.add("disabled");
	} else {
		adultsSubsBtn.classList.remove("disabled");
	} if (childrenCount == 0) {
		childrenSubsBtn.classList.add("disabled");
	} else {
		childrenSubsBtn.classList.remove("disabled");
	} if (calcTotalGuests() == maxNumGuests) {
		adultsAddBtn.classList.add("disabled");
		childrenAddBtn.classList.add("disabled");
	} else {
		adultsAddBtn.classList.remove("disabled");
		childrenAddBtn.classList.remove("disabled");
	}
}

//Read More Read Less
jQuery(function ($) {
	function AddReadMore() {
	   //This limit you can set after how much characters you want to show Read More.
	   var carLmt = 150;
	   // Text to show when text is collapsed
	   var readMoreTxt = " ...read more";
	   // Text to show when text is expanded
	   var readLessTxt = " read less";
 
 
	   //Traverse all selectors with this class and manipulate HTML part to show Read More
	   $(".add-read-more").each(function () {
		  if ($(this).find(".first-section").length)
			 return;
 
		  var allstr = $(this).text();
		  if (allstr.length > carLmt) {
			 var firstSet = allstr.substring(0, carLmt);
			 var secdHalf = allstr.substring(carLmt, allstr.length);
			 var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more'  title='Click to Show More'>" + readMoreTxt + "</span><span class='read-less' title='Click to Show Less'>" + readLessTxt + "</span>";
			 $(this).html(strtoadd);
		  }
	   });
 
	   //Read More and Read Less Click Event binding
	   $(document).on("click", ".read-more,.read-less", function () {
		  $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
	   });
	}
 
	AddReadMore();
 });



//  Scroll to top for room.html
// Get the button:
let mybutton1 = document.getElementById("myBtn1");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction1()};

function scrollFunction1() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton1.style.display = "block";
  } else {
    mybutton1.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction1() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//  Scroll to top for about.html
// Get the button:
let mybutton2 = document.getElementById("myBtn2");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction2()};

function scrollFunction2() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton2.style.display = "block";
  } else {
    mybutton2.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction2() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//  Scroll to top for service.html
// Get the button:
let mybutton3 = document.getElementById("myBtn3");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction3()};

function scrollFunction3() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton3.style.display = "block";
  } else {
    mybutton3.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction3() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





// Popup CHat Window
function openForm() {
	document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
	document.getElementById("myForm").style.display = "none";
}

//slick
$(document).ready(function () {
    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-angle-left left_arrow">',
        nextArrow: '<i class="fas fa-angle-right right_arrow">',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});

//Read More Read Less2
jQuery(function ($) {
	function AddReadMore() {
	   //This limit you can set after how much characters you want to show Read More.
	   var carLmt = 50;
	   // Text to show when text is collapsed
	   var readMoreTxt = " ...read more";
	   // Text to show when text is expanded
	   var readLessTxt = " read less";
 
 
	   //Traverse all selectors with this class and manipulate HTML part to show Read More
	   $(".add-read-more1").each(function () {
		  if ($(this).find(".first-section1").length)
			 return;
 
		  var allstr = $(this).text();
		  if (allstr.length > carLmt) {
			 var firstSet = allstr.substring(0, carLmt);
			 var secdHalf = allstr.substring(carLmt, allstr.length);
			 var strtoadd = firstSet + "<span class='second-section1'>" + secdHalf + "</span><span class='read-more1'  title='Click to Show More'>" + readMoreTxt + "</span><span class='read-less1' title='Click to Show Less'>" + readLessTxt + "</span>";
			 $(this).html(strtoadd);
		  }
	   });
 
	   //Read More and Read Less Click Event binding
	   $(document).on("click", ".read-more1,.read-less1", function () {
		  $(this).closest(".add-read-more1").toggleClass("show-less-content1 show-more-content1");
	   });
	}
 
	AddReadMore();
 });