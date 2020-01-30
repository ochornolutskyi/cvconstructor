document.addEventListener("DOMContentLoaded", function() {
    //change color of title
    let i = 0,
        colors = ["EDE04B", "68E3AD"];
    function nextColor() {
        if (document.getElementById("headerTitle") == undefined) {
            return false;
        } else {
            document.getElementById("headerTitle").style.color =
                "#" + colors[i++];
            if (i >= colors.length) i = 0;
        }
    }
    setInterval(nextColor, 5000);
    //login pulse
    function animationLogin() {
        let login = document.getElementById("auth");
        if (login == undefined) {
            return false;
        } else
            login.addEventListener("click", function(event) {
                event.preventDefault();
            });
    }
    animationLogin();

    //view CV
    // document
    //     .getElementById("viewCV")
    //     .addEventListener("click", function(event) {
    //         event.preventDefault();
    //     });
    //FIXME
    function addError() {
        let divError = document.createElement("div");
        divError.id = "divError";
        divError.innerHTML =
            "Sorry, this section is in development. Automatically close after 3s";
        divError.style = `max-width: 600px;
        width: 100%;
        min-height: 45px;
        padding: 10px;
        font-size: 20px;
        background-color: rgba(154,190,170, 0.9);
        box-shadow: 0 0 25px rgba(154,190,170, 0.9);
        position: fixed;
        line-height: 45px;
        border-radius: 6px;
        top: 40%;
        left: 50%;
        margin-left: -23%;
        text-align: center;
        d`;
        document.body.append(divError);
    }
    function closeError() {
        return document.getElementById("divError").remove();
    }
    let lockLink = element => {
        return (element.style.pointerEvents = "none");
    };
    let unlockLink = element => {
        return (element.style.pointerEvents = "auto");
    };
    //add error
    let createCV = document.getElementById("create");
    createCV.addEventListener("click", function(event) {
        event.preventDefault();
        lockLink(this);
        addError();
        setTimeout(() => closeError(), 3000);
        setTimeout(() => unlockLink(this), 3000);
    });
    let auth = document.getElementById("auth");
    auth.addEventListener("click", function(event) {
        event.preventDefault();
        lockLink(this);
        addError();
        setTimeout(() => closeError(), 3000);
        setTimeout(() => unlockLink(this), 3000);
    });
    //view button bounce
    let pulseView = document.getElementById("introduce");
    pulseView.onmouseover = function(event) {
        document.getElementById("viewCV").style =
            "animation: bounce 1s linear infinite; text-shadow: 0px 0px 7px #000;";
    };
    pulseView.onmouseout = function(event) {
        document.getElementById("viewCV").style = "animation: none;";
    };
});
