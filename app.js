
/*header*/

const header = document.createElement("div");
root.appendChild(header);
root.style.padding = "20px"
root.style.display = 'flex'
root.style.fontFamily = `'Montserrat'`
root.style.flexFlow = "column wrap"
root.style.alignItems = "center"

const title = document.createElement("h1");
title.innerText += "BLING!"
title.style.paddingTop = "2em";
title.style.color  ="#2d2d2d";
title.style.textShadow = "2px 2px #f39c12";
title.style.fontWeight = "900";
title.style.fontSize = "2em";
title.style.textAlign = "center";
header.appendChild(title);

const main = document.createElement("div");
main.className = "main"
root.appendChild(main)
main.style.color = "black";
main.style.width = "100%"
main.style.display = "flex";
main.style.flexDirection = "row";
main.style.flexWrap = "wrap";
main.style.justifyContent = "space-around";
main.style.marginTop = "100px"

const left_main = document.createElement("div");
main.appendChild(left_main);
left_main.style.display = "flex";
left_main.style.flexDirection = "column"
left_main.style.flexWrap = "wrap";


/*Sizzle your life */
const left_main_first = document.createElement("h3");
left_main_first.innerText = "Sizzle your life"
left_main_first.style.margin = "10px 0 10px 0";
left_main_first.style.fontSize = "40px"
left_main.appendChild(left_main_first);

/*Make a card */

const left_main_second = document.createElement("h1");
left_main_second.innerText = "Make a card"
left_main.appendChild(left_main_second);
left_main_second.style.margin = "20px 0 10px 0";
left_main_second.style.fontWeight = "bold";
left_main_second.style.fontSize = "65px"

/*text box*/

const left_main_third = document.createElement("input");
left_main_third.placeholder = "Name your Bling!"
left_main_third.type = "text";
left_main_third.style.margin = "20px 0px 10px 0px "
left_main_third.style.backgroundColor = "black";
left_main_third.style.color = "white";
left_main_third.style.borderRadius ="10px"
left_main_third.addEventListener('input',updateValue);

function updateValue(e) {
    right_main_first.textContent = e.target.value;
}
/* color */

let color_list = ["Snow","DodgerBlue","LightSalmon","LightCoral","LightPink","OrangeRed","Tomato","DarkOrchid","SpringGreen","Thistle"]
const left_main_fourth = document.createElement("select");
left_main_fourth.style.margin = "20px 0px 10px 0px"
left_main_fourth.style.backgroundColor = "black";
left_main_fourth.style.color = "white";
left_main_fourth.style.borderRadius ="10px"
left_main_fourth.style.padding = "15px"
left_main_fourth.style.cursor = "pointer"


color_list.forEach((item)=>{
    const options = document.createElement("option");
    options.value = item;
    options.innerText = item;
    left_main_fourth.appendChild(options)
    
})

left_main_fourth.addEventListener('change',changeColor)
function changeColor(e){
  cam_image.style.backgroundColor = e.target.value;

    right_main.style.backgroundColor = e.target.value;
    document.body.style.backgroundColor = e.target.value;
}


const left_main_fifth = document.createElement("div");
left_main_fifth.style.cssText = "margin : 20px 0px 10px 0px;"
left_main_fifth.style.backgroundColor = "black";
left_main_fifth.style.color = "white";
left_main_fifth.style.width = '9em';
left_main_fifth.style.paddingTop = "14px"
left_main_fifth.style.paddingLeft = '10px';
left_main_fifth.style.borderRadius ="10px"
left_main_fifth.style.cursor = "pointer"

/*radio button(blob) */

const radio_one = document.createElement("input");
radio_one.setAttribute("type", "radio");
radio_one.name = "radio";
left_main_fifth.appendChild(radio_one)
radio_one.addEventListener('change',changeBackGroundImage)

function changeBackGroundImage(e){
    right_main.style.backgroundImage = `url('assets/images/blob.png')`
    right_main.style.backgroundSize = "100%"
    right_main.style.backgroundRepeat = "no-repeat"  
    right_main.style.backgroundPosition = "0px 50px"

    
}
/*radio button(blob) label*/

const radio_one_label = document.createElement("label");
radio_one_label.innerText ="blob";
left_main_fifth.appendChild(radio_one_label);

/*radio button(none)*/

const radio_two = document.createElement("input");
radio_two.setAttribute("type", "radio");
radio_two.name = "radio";
left_main_fifth.appendChild(radio_two);

radio_two.addEventListener('change',removeBackGroundImage)

function removeBackGroundImage(e){
    right_main.style.background = 'none';

}

/*radio button(none) label*/

const radio_two_label = document.createElement("label");
radio_two_label.innerText ="none";
left_main_fifth.appendChild(radio_two_label);

const right_main = document.createElement("div");
right_main.style.minHeight = "300px";
right_main.style.Width = "300px";
right_main.style.display = "flex";
right_main.style.flexDirection = "column";
right_main.style.alignItems = "center";
right_main.style.justifyContent = "space-between";
right_main.style.backgroundColor = "snow";
main.appendChild(right_main);

/* text,select,radio div */
const text_select_radio = document.createElement("div");
text_select_radio.style.display = "flex";
text_select_radio.style.justifyContent = "space-between";
text_select_radio.style.flexWrap = "wrap";
text_select_radio.style.marginTop = "30px"


/* paragraph above the image*/
const right_main_first = document.createElement("h2");
right_main_first.style.fontSize = "4rem";
right_main_first.style.wordBreak = "break-all"
right_main_first.style.textAlign = "center"
right_main_first.style.fontWeight = "900"
right_main_first.style.width = "300px";
right_main_first.style.marginBottom = "100px"
right_main.appendChild(right_main_first);


let btnList = ["Polaroid","Tv","Traitor","Fall guy","Radio"]
let imageList = ["assets/images/polaroid.png","assets/images/tv.png","assets/images/among-us.png","assets/images/fall-guy-01.png","assets/images/radio-02.png"]

let image = document.createElement("img");
image.style.width = "150px";
image.style.marginBottom = "100px"

function showPicture(e) {
    if(e.target.style.backgroundColor !== "black")
    {
        let toWhite = document.querySelectorAll(".button");
        toWhite.forEach((ele) => {
            ele.style.backgroundColor = "inherit"
            ele.style.color = "black";
        })
        image.src = e.target.value; 
        e.target.style.backgroundColor = "black";
        e.target.style.color ="white"
    }
    else{
        image.src = ""
        e.target.style.backgroundColor = "white";
        e.target.style.color ="black"
    }
}

/*camera image*/
let cam_image_div = document.createElement("div");


let cam_image = document.createElement("button");
cam_image.style.backgroundImage = `url('assets/images/camera.png')`
cam_image.style.padding ="30px 30px";
cam_image.style.boxShadow = "5px 3px 3px black";
cam_image.style.backgroundSize = "50%"
cam_image.style.backgroundPosition = "center";
cam_image.style.backgroundRepeat = "no-repeat" ;
cam_image.style.borderRadius = "10px"
cam_image.style.marginTop = "10px"
cam_image.style.cursor = "pointer"
cam_image.style.backgroundColor = "inherit"
cam_image.addEventListener('mousedown',changeBackgroundColor);
cam_image.addEventListener('mouseup',removeBackgroundColor);

function changeBackgroundColor (e){
    cam_image.style.backgroundColor = "white"
}
function removeBackgroundColor (e){
    cam_image.style.backgroundColor = document.body.style.backgroundColor;
}
cam_image.addEventListener('click',cloneDiv);
function cloneDiv(e){
  
    const clone = right_main.cloneNode(true);
    clone.style.border = "1px solid black";
    clone.style.boxShadow = "5px 3px 3px black";
    clone.style.borderRadius = "10px"
    
    clone.style.margin = "50px"
    clone.style.position = "relative";
    /*close button */
    const close_btn = document.createElement("img");
    close_btn.src = 'assets/images/icon_delete.png'
    close_btn.style.position = "absolute"
    close_btn.style.height = "50px";
    close_btn.style.top = "-15px"
    close_btn.style.right = "-15px"
    close_btn.style.cursor = "pointer"
    close_btn.addEventListener('click',()=>clone.remove())
    clone.appendChild(close_btn)
    card_div.insertBefore(clone,card_div.children[0])
    
}
/*image button */
let btn_div = document.createElement("div");
btn_div.style.display = "flex";
btn_div.style.justifyContent = "space-between"
btn_div.flexWrap = "wrap"
btn_div.style.cssText = "box-sizing: border-box;"
left_main.appendChild(btn_div)


btnList.forEach((items,index)=>{
const button = document.createElement("button");
button.className += "button";
button.innerText=items;
button.value = imageList[index];
button.style.color = "black";
button.style.minWidth = "50px";
button.style.fontSize = "16px";
button.style.marginTop = "20px";
button.style.marginRight = "16px";
button.style.backgroundColor = "inherit";
button.style.borderRadius = "10px";
button.style.padding ="10px";
button.style.boxShadow = "5px 3px 3px black";
button.style.cursor = "pointer";

button.addEventListener('click',showPicture);
btn_div.appendChild(button)
})
right_main.appendChild(image);

/* Card div */
const card_div = document.createElement("div");
card_div.style.cssText = " display:flex; justify-content : space-around;flex-wrap :wrap;"
root.appendChild(card_div);

/*footer*/

const footer = document.createElement("div");
footer.style.textAlign = "center";
footer.style.fontSize = "18px";
footer.style.fontWeight = "bold";
footer.style.paddingTop = "50px";
footer.style.verticalAlign = "bottom";

const ul = document.createElement("ul");
ul.style.listStyleType = "none";
ul.style.margin = 0;
ul.style.padding = 0;
ul.style.overflow = "hidden";
ul.style.display = "inline-block";
const creditList = ["🖤 Credits:","Polaroid","TV","Traitor","Fall Guy","Radio",];
  
  creditList.forEach((credit, index) => {
    const li = document.createElement("li");
    li.style.float = "left";
  
    const a = document.createElement("a");
    a.textContent = credit;
    a.style.display = "block";
    a.style.color = "white";
    a.style.textAlign = "center";
    a.style.margin = "14px 16px";
    a.style.textDecoration = "none";
    a.style.color = "black";
    if (index) a.href = "#";
  
    li.append(a);
    ul.append(li);
  });
  
  ul.onmouseover = (e) => {
    if (e.target.tagName == "A" && e.target.text != "🖤 Credits:") {
      e.target.style.borderBottom = "3px solid black";
      e.target.style.paddingBottom = "10px";
    }
  };
  
  ul.onmouseout = (e) => {
    if (e.target.tagName == "A") {
      e.target.style.borderBottom = "";
      e.target.style.paddingBottom = "";
    }
  };
  
  footer.append(ul);
left_main.appendChild(text_select_radio)
left_main.appendChild(cam_image_div)
cam_image_div.appendChild(cam_image)
text_select_radio.appendChild(left_main_third);
text_select_radio.appendChild(left_main_fourth);
text_select_radio.appendChild(left_main_fifth);
root.append(footer)