const result = document.querySelector(".result");

const getUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((users) => {
      users.forEach((user) => {
        result.innerHTML += `<p>${user.name}</p>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getUser();
