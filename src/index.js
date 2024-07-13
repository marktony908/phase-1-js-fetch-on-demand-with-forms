const init = () => {
    document.addEventListener("DOMContentLoaded", init)
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit",(Event) => {
        Event.preventDefault();
        const input =document.querySelector("input#searchByID");

fetch(`http://localhost:3000/movies/1${input.Value}`)
.then((Response) => Response.json())
.then((data) => {
    const title = document.querySelector("section#movieDetails h4");
    const summary = document.querySelector("section#movieDetails p");

    title.innerText = data.title;
        summary.innerText = data.summary;

});
    });
};
  



document.addEventListener('DOMContentLoaded', init);