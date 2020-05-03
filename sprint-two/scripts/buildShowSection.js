const showArray = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Francisco, CA",
  },
];

const showList = document.querySelector(".show");
const showTitle = document.createElement("h2");
showTitle.classList.add("show__title");
showTitle.innerText = "Shows";
showList.appendChild(showTitle);

showArray.forEach(function (item, index) {
  const ul = document.createElement("ul");
  ul.classList.add("show__list-item");
  showList.appendChild(ul);

  const showDate = document.createElement("li");
  showDate.classList.add("show__date");
  showDate.innerHTML = showArray[index].date;
  ul.appendChild(showDate);

  const showVenue = document.createElement("li");
  showVenue.classList.add("show__venue");
  showVenue.innerHTML = showArray[index].venue;
  ul.appendChild(showVenue);

  const showLocation = document.createElement("li");
  showLocation.classList.add("show__location");
  showLocation.innerHTML = showArray[index].location;
  ul.appendChild(showLocation);

  const showButton = document.createElement("button");
  showButton.classList.add("show__button");
  showButton.classList.add("button");
  showButton.innerText = "BUY TICKETS";
  ul.appendChild(showButton);
});
