// const commentArray = [
//   {
//     name: "Theodore Duncan",
//     comment:
//       "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
//     date: new Date("11/15/2018"),
//   },
//   {
//     name: "Gary Wong",
//     comment:
//       "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
//     date: new Date("12/12/2018"),
//   },
//   {
//     name: "Michael Lyons",
//     comment:
//       "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
//     date: new Date("12/18/2018"),
//   },
// ];

// {
// "api_key": "f7c85789-2015-42dc-8d40-b25121a06139"
// }
const apiKey = "f7c85789-2015-42dc-8d40-b25121a06139";

const commentHistory = document.querySelector(".comments__history");
const commentForm = document.querySelector(".comments__form");
document
  .getElementById("form__button")
  .addEventListener("click", createNewComment);

// Displays the comments on the html page
function displayComment(commentArray) {
  commentHistory.innerHTML = "";

  commentArray.forEach(function (item, index) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    commentHistory.appendChild(wrapper);

    const greyCircle = document.createElement("div");
    greyCircle.classList.add("grey-circle");
    greyCircle.innerHTML = "";
    wrapper.appendChild(greyCircle);

    const ul = document.createElement("ul");
    ul.classList.add("list-item");
    wrapper.appendChild(ul);

    const nameOnComment = document.createElement("li");
    nameOnComment.classList.add("list-item__name");
    nameOnComment.innerHTML = commentArray[index].name;
    ul.appendChild(nameOnComment);

    const dateOnComment = document.createElement("li");
    dateOnComment.classList.add("list-item__date");
    dateOnComment.innerHTML = formattedDate(commentArray[index].date);
    ul.appendChild(dateOnComment);

    const commentOnComment = document.createElement("li");
    commentOnComment.classList.add("list-item__comment");
    commentOnComment.innerHTML = commentArray[index].comment;
    ul.appendChild(commentOnComment);
  });
}

// Creates the new comment
function createNewComment(event) {
  event.preventDefault();
  let newName = document.getElementById("form__name").value;
  console.log(newName);
  let newComment = document.getElementById("form__comment").value;
  console.log(newComment);
  let newDate = new Date();
  console.log(newDate);

  if (newName !== "" && newComment !== "") {
    commentArray.push({
      name: newName,
      comment: newComment,
      date: newDate,
    });

    commentForm.reset();
    displayComment(sortCommentArray(commentArray));
  } else {
    alert("Please add a name and message");
  }
}

// Sorts the array by date
function sortCommentArray(array) {
  const sortComments = array.slice().sort((a, b) => b.date - a.date);
  return sortComments;
}

// Formats the date MM/DD/YYYY
function formattedDate(date) {
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  return formattedDate;
}

displayComment(sortCommentArray(commentArray));
