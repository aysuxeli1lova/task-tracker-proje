let second=document.querySelector(".second .add");
let sort=document.querySelector(".sort");
let text=document.querySelector("input");
let text1=document.querySelector(".circle");
let div=document.createElement("div");
let main2=document.querySelector(".main2");
let ol=document.createElement("ul");
let secondBtn=document.querySelector(".second");
let plus=document.querySelector(".plus");
let ascending=true;
ol.style.listStyleType="none";
main2.appendChild(div);
div.appendChild(ol);
div.style.width="286px";
div.style.minHeight="44px";
div.style.display="none";
div.style.border="1px solid #c4c4c4";
div.style.borderRadius="10px";
div.style.marginLeft="23px";
div.style.marginTop="36px";
text.style.paddingLeft="10px"
let counter="0";
second.addEventListener("click",()=>{
    if(text.value.trim() === "") {
        text.style.display = "none";
        text1.style.display = "none";
        return;
    }
    counter++
    text.style.display="none";
    text1.style.display="none";
    div.style.display="block";
    let li=document.createElement("li");
    li.style.marginLeft="15px";
    ol.appendChild(li);
    let img=document.createElement("img");
    let span=document.createElement("span");
    span.textContent = counter + "." + " " + text.value;
    text.value = "";
    li.appendChild(span);
    li.appendChild(img);
    img.src="rengsiz.svg";
    img.style.cursor="pointer";
    img.style.position="absolute";
    img.style.right="26px";
    img.style.marginTop="20px";
    img.style.color="#c4c4c4";
    img.style.display="block";
    li.style.position="relative";
    li.style.paddingBottom="10px";
    secondBtn.style.marginBottom="17px";
    img.style.bottom="10px";
    div.style.paddingTop="12px";
    img.addEventListener("click",()=>{
        li.remove();
        if(ol.children.length == 0){
            text.style.display="block";
            text1.style.display="block";
            div.style.display="none";
            text1.style.marginTop="11px";
            text1.addEventListener("click",()=>{
                text.value="";
            })
        }
    });

    img.addEventListener("mouseenter",()=>{
        img.src="rengli.svg";
    });
    img.addEventListener("mouseleave",()=>{
        img.src="rengsiz.svg";
    });
});
plus.addEventListener("click",()=>{
    text.style.display="block";
    text1.style.display="block";
    text1.style.marginTop="11px";
});
sort.addEventListener("click", () => {
    let a = Array.from(document.querySelectorAll("li"));
    a.sort((li1,li2) => {
        let v1 = li1.querySelector("span").textContent.split(". ")[1];
        let v2 = li2.querySelector("span").textContent.split(". ")[1];
        let n1 = Number(v1);
        let n2 = Number(v2);
        if (!isNaN(n1) && !isNaN(n2)) {
            return ascending ? n1 - n2 : n2 - n1;
        } else {
            return ascending ? v1.localeCompare(v2) : v2.localeCompare(v1);
        }
    });
    a.forEach(li => ol.appendChild(li));
    let icon=document.querySelector(".sort");
    icon.addEventListener("mouseenter",()=>{
        if(ascending){
            icon.src="down-black.svg";
        } else {
            icon.src="up-black.svg";
        }
    });
    icon.addEventListener("mouseleave",()=>{
        if(ascending){
            icon.src="down-white.svg";
        } else {
            icon.src="up-white.svg";
        }
    });
    if(ascending){
        icon.src="up-black.svg";
    } else {
        icon.src="down-black.svg";
    }
    ascending = !ascending;
});
second.addEventListener("mouseenter",()=>{
    plus.style.backgroundColor="#9759deff";
    secondBtn.style.backgroundColor="#7638c1ff";
});
second.addEventListener("mouseleave",()=>{
    plus.style.backgroundColor="#9953F1";
    secondBtn.style.backgroundColor="blueviolet";
});
