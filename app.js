const container = document.createElement("div");
container.className += "container";
document.body.appendChild(container);

const header = document.createElement("div");
header.className += "header";
container.appendChild(header);

const title = document.createElement("h1");
title.className += "title";
title.innerText += "Bling"
title.style.cssText = "padding: 30px;text-align: center;color:black;font-size: 30px;"
header.appendChild(title);

const main = document.createElement("div");
main.className += "main";
container.appendChild(main)
main.style.cssText = "color:black;"


const left_main = document.createElement("div");
left_main.className += "left_main";
main.appendChild(left_main);
left_main.style.cssText = "margin-left:10%;width:50%,margin-top:5%"


const left_main_first = document.createElement("h3");
left_main_first.className += "left_main_first";
left_main_first.innerText = "Sizzle your life"
left_main.appendChild(left_main_first);
left_main_first.style.cssText = "margin : 10px 0 10px 0"


const left_main_second = document.createElement("h1");
left_main_second.className += "left_main_second";
left_main_second.innerText = "Make a card"
left_main.appendChild(left_main_second);
left_main_second.style.cssText = "margin : 20px 0 10px 0;font-weight: bold;font-size: 30px;"

const left_main_third = document.createElement("input");
left_main_third.type = Text;
left_main_third.className += "left_main_third";
left_main_third.style.cssText= "display:block;margin : 20px 0 10px 0;"
left_main_third.addEventListener('input',updateValue);

function updateValue(e) {
    right_main_first.textContent = e.target.value;
}

let color_list = ["Snow","DodgerBlue","LightSalmon","LightCoral","LightPink","OrangeRed","Tomato","DarkOrchid","SpringGreen","Thistle"]
const left_main_fourth = document.createElement("select");

color_list.forEach((item)=>{
    const options = document.createElement("option");
    options.className += "options";
    options.value = item;
    options.innerText = item;
    left_main_fourth.appendChild(options)
    left_main_fourth.style.cssText = "display :block;";
})
left_main_fourth.addEventListener('change',changeColor)
function changeColor(e){
    document.body.style.backgroundColor = e.target.value;
}


const right_main = document.createElement("div");
right_main.className += "right_main";
main.appendChild(right_main);
right_main.style.cssText = "float : right;margin-right:300px;margin-top:2px"

const right_main_first = document.createElement("p");
right_main_first.className += "right_main_first";
right_main.appendChild(right_main_first);


let btnList = ["Polaroid","Tv","Traitor","Fall guy","Radio"]
let imageList = ["assets/images/polaroid.png","assets/images/tv.png","assets/images/among-us.png","assets/images/fall-guy-01.png","assets/images/radio-02.png"]

let image = document.createElement("img");
image.className = "image";
image.style.cssText = "width :200px;margin-top:10px "



function showPicture(e) {
    image.src = e.target.value;    
}

btnList.forEach((items,index)=>{
const button = document.createElement("button");
button.className += "button";
button.innerText=items;
button.value = imageList[index];
button.style.cssText ="color: black;font-size: 16px; margin-top:20px;margin-right:16px;"
button.addEventListener('click',showPicture);
left_main.appendChild(button)
})
right_main.appendChild(image);
left_main.appendChild(left_main_third);
left_main.appendChild(left_main_fourth);
