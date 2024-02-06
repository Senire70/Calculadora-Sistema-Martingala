let body = document.querySelector("body");
let form = document.querySelector(".element-2 form");
let btn = document.querySelector("#submit");
let text = document.querySelector("#number");
let text2 = document.querySelector("#number2");
let paraContainer = document.querySelector(".element-1");
let windowCount = 0;

// funcion que se encargará de añadir para al paraContainer
form.addEventListener("submit", function (event) {
    event.preventDefault(); //cancela/previene el reseteo de formulario

    //Comprueba si paraC
    while (paraContainer.firstChild) {
        paraContainer.firstChild.remove();
    }
    let para = document.createElement("p");
    para.innerHTML = calculate();
    if (typeof para === "undefined") {
        if (paraContainer.firstChild) {
            paraContainer.firstChild.remove();
        }

    } else {
        paraContainer.appendChild(para);
    }
});

function calculate() {
    let total = parseInt(text.value, 10);
    let paraContent = "";
    let increment = parseInt(text.value, 10);
    let oCount = 1;
    let increment2;
    let total2;
    let incrementBig;
    let totalBig;

    if (text.value === "" || text2.value === "") {
        if (windowCount <= 0) {
            windowMessage();
            return `Pulsa <ion-icon name="close-circle-outline"></ion-icon> en la parte superior para cerrar la ventana emergente`
        } else {
            return `Pulsa <ion-icon name="close-circle-outline"></ion-icon> en la parte superior para cerrar la ventana emergente`
        }
    } else {
        for (let i = 1; i <= text2.value; i++) {
            if (increment > 9007199254740991) {
                // paraContent += `<span class="red">Excede el valor máximo.</span>`;

                if (oCount === 1) {
                    increment2 = increment.toString();
                    total2 = total.toString();
                    incrementBig = BigInt(increment2);
                    totalBig = BigInt(total2);
                    oCount++;
                    if (i === 1) {
                        paraContent += `<h2>Elegiste el número: <span class="blue">${incrementBig}</span>, estos son los cálculos:</h2> <br> <b>${i}-</b>${incrementBig}<br>`;
                        totalBig = incrementBig;
                    } else {
                        incrementBig = incrementBig * 2n;
                        totalBig = totalBig + incrementBig;
                        paraContent =
                            paraContent + `<b>${i}-</b>${incrementBig} = ${totalBig}<br>`;
                    }
                } else {
                    incrementBig = incrementBig * 2n;
                    totalBig = totalBig + incrementBig;
                    paraContent = paraContent + `<b>${i}-</b>${incrementBig} = ${totalBig}<br>`;
                }
                // return `${paraContent}`;
                // break;
            } else {
                if (i === 1) {
                    paraContent += `<h2>Elegiste el número: <span class="blue">${increment}</span>, estos son los cálculos:</h2> <br> <b>${i}-</b>${increment}<br>`;
                    total = increment;
                } else {
                    increment = increment * 2;
                    total += increment;
                    paraContent += `<b>${i}-</b>${increment} = ${total}<br>`;
                }
            }
        };
        return `${paraContent}`;
    };

};

function windowMessage() {
    // create divs
    let windowAlert = document.createElement("div");
    let closeWindow = document.createElement("div");
    let windowMessage = document.createElement("div");;
    windowAlert.classList.add("window-alert");
    closeWindow.classList.add("close-window");
    windowMessage.classList.add("window-message");

    // create span
    let span1 = document.createElement("button");
    let span2 = document.createElement("span");

    // add content to element
    span1.innerHTML = `<ion-icon name="close-circle-outline"></ion-icon>`;
    windowMessage.textContent = "Debes completar los campos";
    span2.textContent = ":)";

    // merge
    closeWindow.appendChild(span1);
    windowAlert.appendChild(closeWindow);

    windowMessage.appendChild(span2);
    windowAlert.appendChild(windowMessage);

    body.appendChild(windowAlert);

    windowCount++;
    closeWindow.focus();

    closeWindow.addEventListener("click", () => {
        windowAlert.remove();
        paraContainer.textContent = " ";
        windowCount--;
        text.focus();
        console.log('click alert');
    });

};


text.focus();



