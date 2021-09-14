
/*header*/

const header = document.createElement("div");
root.appendChild(header);

const title = document.createElement("h1");
title.innerText += "BLING"
title.style.cssText = "padding-top : 1em;color :#2d2d2d;text-shadow: 2px 2px #f39c12;font-weight : bolder;font-size : 2em;text-align : center;;"
header.appendChild(title);

const main = document.createElement("div");
root.appendChild(main)
main.style.cssText = "color:black;display:flex; flex-direction: row;justify-content:space-around;margin-top:100px"


const left_main = document.createElement("div");
main.appendChild(left_main);
left_main.style.cssText = "width:50%,margin-top:5%"



const text_select_radio = document.createElement("div");
text_select_radio.style.cssText += "display : flex; justify-content:space-between; width:60vh "

/*Sizzle your life */
const left_main_first = document.createElement("h3");
left_main_first.innerText = "Sizzle your life"
left_main.appendChild(left_main_first);
left_main_first.style.cssText = "margin : 10px 0 10px 0"

/*Make a card */

const left_main_second = document.createElement("h1");
left_main_second.innerText = "Make a card"
left_main.appendChild(left_main_second);
left_main_second.style.cssText = "margin : 20px 0 10px 0;font-weight: bold;font-size: 30px;"

/*text box*/

const left_main_third = document.createElement("input");
left_main_third.placeholder = "...Title"
left_main_third.type = "text";
left_main_third.style.cssText= "margin : 20px 0px 10px 0px;"
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


color_list.forEach((item)=>{
    const options = document.createElement("option");
    options.value = item;
    options.innerText = item;
    left_main_fourth.appendChild(options)
    
})

left_main_fourth.addEventListener('change',changeColor)
function changeColor(e){
    right_main.style.backgroundColor = e.target.value;
    document.body.style.backgroundColor = e.target.value;
}


const left_main_fifth = document.createElement("div");
left_main_fifth.style.cssText = "margin : 20px 0px 10px 0px;"
left_main_fifth.style.backgroundColor = "black";
left_main_fifth.style.color = "white";
left_main_fifth.style.width = '8em';
left_main_fifth.style.paddingTop = "14px"
left_main_fifth.style.paddingLeft = '10px';
left_main_fifth.style.borderRadius ="10px"
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
right_main.style.cssText = "min-height :300px;min-width : 300px;display:flex;flex-direction:column;align-items : center;justify-content:space-between;"
main.appendChild(right_main);


/* paragraph above the image*/
const right_main_first = document.createElement("p");
right_main_first.style.fontSize = "50px";
right_main_first.style.fontWeight = "bold"
right_main_first.style.marginBottom = "100px"
right_main.appendChild(right_main_first);


let btnList = ["Polaroid","Tv","Traitor","Fall guy","Radio"]
let imageList = ["assets/images/polaroid.png","assets/images/tv.png","assets/images/among-us.png","assets/images/fall-guy-01.png","assets/images/radio-02.png"]

let image = document.createElement("img");
image.style.cssText = "width :150px;margin-bottom:100px;"

function showPicture(e) {
    if(e.target.style.backgroundColor !== "black")
    {
        let toWhite = document.querySelectorAll(".button");
        toWhite.forEach((ele) => {
            ele.style.backgroundColor = "white";
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
let cam_image = document.createElement("button");
cam_image.style.backgroundImage = `url('assets/images/camera.png')`
cam_image.style.padding ="15px 15px";
cam_image.style.boxShadow = "5px 3px 3px black";
cam_image.style.backgroundSize = "50%"
cam_image.style.backgroundPosition = "center";
cam_image.style.backgroundRepeat = "no-repeat" ;

cam_image.addEventListener('click',cloneDiv);
function cloneDiv(e){
    const clone = right_main.cloneNode(true);
    clone.style.border = "1px solid black";
    clone.style.boxShadow = "5px 3px 3px black";
    
    clone.style.margin = "50px"
    clone.style.position = "relative";
    /*close button */
    const close_btn = document.createElement("img");
    close_btn.src = 'assets/images/icon_delete.png'
    close_btn.style.position = "absolute"
    close_btn.style.height = "50px";
    close_btn.style.top = "-15px"
    close_btn.style.right = "-15px"
    close_btn.addEventListener('click',()=>clone.remove())
    /*close_btn.style.top = "-20px"
    close_btn.style.right = "-20px"*/
    clone.appendChild(close_btn)
    card_div.insertBefore(clone,card_div.children[0])
    
}
/*image button */

btnList.forEach((items,index)=>{
const button = document.createElement("button");
button.className += "button";
button.innerText=items;
button.value = imageList[index];
button.style.borderRadius = "0.5em";
button.style.cssText ="color: black;font-size: 16px; margin-top:20px;margin-right:16px;background-color:inherit"
button.style.boxShadow = "5px 3px 3px black";
button.addEventListener('click',showPicture);
left_main.appendChild(button)
})
right_main.appendChild(image);

/* Card div */
const card_div = document.createElement("div");
card_div.style.cssText = " display:flex; justify-content : space-around;flex-wrap :wrap;"
root.appendChild(card_div);

/*footer*/
let footer = document.createElement("footer");

/*footer.innerText = "🖤 Credits : Polaroid TV Traitor Fall Guy Radio";*/

footer.style.display = "flex";
footer.style.paddingTop = "15%";
footer.style.marginBottom ="3%"
footer.style.width = "100%";
footer.style.justifyContent = "center";
let footer_ele =["🖤 Credits :","Polaroid","TV","Traitor","Fall Guy","Radio"]
let a;
footer_ele.forEach((items,index)=>{
    if(index == 0){
     a = document.createElement("p");
    }
    else{
     a = document.createElement("a");
     a.href = "#"
     a.style.textDecoration = "none"
     a.style.color = "black"
     a.style.marginLeft = "10px"
     a.addEventListener('mouseover',(e)=>{
         e.target.style.cssText += "border-bottom:2px solid black;"
     })
     a.addEventListener('mouseout',(e)=>{
         e.target.style.cssText += "border-bottom: 0px;"
     })
    }
    
    a.innerText = items
   
    footer.appendChild(a)
})
root.append(footer);




left_main.appendChild(text_select_radio)
left_main.appendChild(cam_image)
text_select_radio.appendChild(left_main_third);
text_select_radio.appendChild(left_main_fourth);
text_select_radio.appendChild(left_main_fifth);
