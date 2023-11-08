window.addEventListener("DOMContentLoaded", () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fetching error");
      }
      return response.json();
    })
    .then((booksArr) => {
      const row = document.getElementsByClassName("row")[0];
      console.log(booksArr);
      booksArr.forEach((book) => {
        if (book.img) {
          const col = document.createElement("div");
          col.classList.add("col-6", "col-md-4", "col-xl-3");
          row.appendChild(col);
          const cardDiv = document.createElement("div");
          cardDiv.classList.add("card");

          const cardImg = document.createElement("img");
          cardImg.classList.add("card-img-top");
          cardImg.src = book.img;
          cardDiv.appendChild(cardImg);

          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
          cardDiv.appendChild(cardBody);

          const bookTitle = document.createElement("h5");
          bookTitle.classList.add("card-title");
          bookTitle.innerText = book.title;
          cardBody.appendChild(bookTitle);

          const bookCategory = document.createElement("p");
          bookCategory.classList.add("card-text");
          bookCategory.innerText = book.category;
          cardBody.appendChild(bookCategory);

          const bookPrice = document.createElement("p");
          bookPrice.classList.add("card-text");
          bookPrice.innerText = book.price;
          cardBody.appendChild(bookPrice);

          const removeBtn = document.createElement("button");
          removeBtn.type = "button";
          removeBtn.innerText = "Remove";
          removeBtn.classList.add("btn", "btn-secondary");
          removeBtn.onclick = function (e) {
            e.currentTarget.parentNode.parentNode.parentNode.remove();
          };
          cardBody.appendChild(removeBtn);

          col.appendChild(cardDiv);
        }
      });
    })
    .catch((error) => console.log("ERROR: ", error));
});
