const apiKey = "anika-custodio";

const url = `https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`;

let showArray = [];

// gets Data from the apo and then displays the show listing
function getData() {
  return axios
    .get(url)
    .then((response) => {
      displayShow(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

getData();

// Creates the show section
const showList = document.querySelector(".show");
const showTitle = document.createElement("h2");
showTitle.classList.add("show__title");
showTitle.innerText = "Shows";
showList.appendChild(showTitle);
const showWrapper = document.createElement("div");
showList.appendChild(showWrapper);

// function that displays the show sections
function displayShow(showArray) {
  showArray.forEach(function (show) {
    const ul = document.createElement("ul");
    ul.classList.add("show__list-item");
    showWrapper.appendChild(ul);

    // Date
    const showDate = document.createElement("li");
    showDate.classList.add("show__date");
    showDate.innerHTML = show.date;
    ul.appendChild(showDate);

    // Venue
    const showVenue = document.createElement("li");
    showVenue.classList.add("show__venue");
    showVenue.innerHTML = show.place;
    ul.appendChild(showVenue);

    // Location
    const showLocation = document.createElement("li");
    showLocation.classList.add("show__location");
    showLocation.innerHTML = show.location;
    ul.appendChild(showLocation);

    const buttonWrapper = document.createElement("li");
    buttonWrapper.classList.add("showbutton-wrapper");
    ul.appendChild(buttonWrapper);

    const buttonInnerWrapper = document.createElement("div");
    buttonInnerWrapper.classList.add("showbuttoninner-wrapper");
    buttonWrapper.appendChild(buttonInnerWrapper);

    // Button
    const showButton = document.createElement("button");
    showButton.classList.add("show__button");
    showButton.classList.add("button");
    showButton.innerText = "BUY TICKETS";
    buttonInnerWrapper.appendChild(showButton);
  });
}
