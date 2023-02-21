//your JS code here. If required.
let image = [];
 for(let i = 0;i<5;i++)
 {
 let t = document.createElement("IMG");
 t.setAttribute("data-ns-test",`img${i+1}`);
 t.width = 100;
 t.height = 100;
 t.onclick = (e)=>captchaClick(e);
 t.src = `images/${i+1}.jpg`;
 image.push(t);
 }
 let temp = Math.floor(Math.random()*5);
 let t = document.createElement("IMG");
 t.setAttribute("data-ns-test",`img${temp+1}
`);
 t.width = 100;
 t.height = 100;
 t.onclick = (e)=>captchaClick(e);
 t.src = `images/${temp+1}.jpg`;
 image.push(t);
 image.sort(() => Math.random() - 0.5);
 for(let i = 0;i<6;i++)
 {
 document.getElementById("main").
appendChild(image[i]);
 }
 let captcha = [];
 function clearCaptcha()
 {
 // console.log("Clearing captcha");
 for(let i = 0;i<6;i++)
 {
 image[i].onclick = (e)=>captchaClick(e);
 }
 captcha = [];
 try{
 document.getElementById("para").
remove();
 }
 catch(e){
 }
 try{
 document.getElementById("btn").
remove();
 }
 catch(e){
 }