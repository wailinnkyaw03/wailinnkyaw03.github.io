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

//  Scroll to top
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
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

