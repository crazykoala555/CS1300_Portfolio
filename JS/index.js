const getStartedButton = document.querySelector("#intro-button button");
getStartedButton.addEventListener("click", scrollHandler);


function scrollHandler(e) {
    e.preventDefault();
    const offsetTop = document.getElementById("intro-portfolio").offsetTop

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}