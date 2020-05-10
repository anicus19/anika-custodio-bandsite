const apiKey = "anika-custodio";

const url = `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`;

let commentArray = [];

// gets the Data from the api and then displays the sorted comment
function getData() {
  return axios
    .get(url)
    .then((response) => {
      commentForm.reset();
      displayComment(sortCommentArray(response.data));
    })
    .catch((error) => {
      console.error(error);
    });
}

getData();

const commentHistory = document.querySelector(".comments__history");
const commentForm = document.querySelector(".comments__form");
document
  .getElementById("form__button")
  .addEventListener("click", createNewComment);

// Displays the comments on the html page
function displayComment(commentArray) {
  console.log(commentArray);

  commentHistory.innerHTML = "";

  // commentArray.forEach(function (item, index)
  commentArray.forEach(function (data) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    commentHistory.appendChild(wrapper);

    // Grey circle
    const greyCircle = document.createElement("div");
    greyCircle.classList.add("grey-circle");
    greyCircle.innerHTML = "";
    wrapper.appendChild(greyCircle);

    const ul = document.createElement("ul");
    ul.classList.add("list-item");
    wrapper.appendChild(ul);

    // Name
    const nameOnComment = document.createElement("li");
    nameOnComment.classList.add("list-item__name");
    nameOnComment.innerHTML = data.name;
    ul.appendChild(nameOnComment);

    // Time
    const dateOnComment = document.createElement("li");
    dateOnComment.classList.add("list-item__date");
    dateOnComment.innerHTML = formatDate(data.timestamp);
    ul.appendChild(dateOnComment);

    // Comment
    const commentOnComment = document.createElement("li");
    commentOnComment.classList.add("list-item__comment");
    commentOnComment.innerHTML = data.comment;
    ul.appendChild(commentOnComment);

    // Delete
    const deleteOnComment = document.createElement("li");
    deleteOnComment.classList.add("list-item__delete");
    ul.appendChild(deleteOnComment);

    const deleteWrapper = document.createElement("div");
    deleteWrapper.classList.add("delete-wrapper");
    deleteOnComment.appendChild(deleteWrapper);

    const deleteButton = document.createElement("button");
    console.log(data.id);
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "X";
    deleteWrapper.appendChild(deleteButton);
    deleteButton.addEventListener("click", function (event) {
      deleteComment(data.id);
    });
  });
}

// Deletes the comment
function deleteComment(id) {
  console.warn(id);
  const deleteUrl = `https://project-1-api.herokuapp.com/comments/${id}?api_key=${apiKey}`;
  console.log(deleteUrl);
  return axios
    .delete(deleteUrl)
    .then((response) => {
      console.log(response.id);
      getData();
    })
    .catch((error) => {
      console.error(error);
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
    axios
      .post(url, {
        name: newName,
        comment: newComment,
      })
      .then((response) => {
        console.log(response);
        getData();
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    alert("Please add a name and message");
  }
}

// Sorts the array by date
function sortCommentArray(array) {
  console.log(array);
  const sortComments = array.slice().sort((a, b) => b.timestamp - a.timestamp);
  return sortComments;
}

// Formats the date MM/DD/YYYY
function formatDate(date) {
  console.log(date);
  const d = new Date(date);
  console.log(d);
  const formattedDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  return formattedDate;
}
