const { resolve } = require("path");
const puppeteer=require("puppeteer");
const fs=require("fs");
const { serialize } = require("v8");
const browseropen=puppeteer.launch({
    headless:false,

    args:['--start-maximized'],
    defaultViewport:null
});
const writup=fs.readFileSync("answer.txt");
let data="";
data=data+writup;

const email="omprakashdipu99@gmail.com";
const password="Omprakash#2066";
const loginlink="https://www.hackerrank.com/auth/login";
let page;
browseropen.then(function(browserobj)
{
    let broswernewpage=browserobj.newPage();
    return broswernewpage;
}).then(function(newtab){
     page=newtab;
    let tabopened=page.goto(loginlink);
    return tabopened;
}).then(function(){
    let emailentered=page.type("input[id='input-1']",email,{delay:50});
    return emailentered;
    
}).then(function(){
    let passwordentered=page.type("input[id='input-2']",password,{delary:50});
    return passwordentered;
}).then(function(){
    let mouseclick=page.click("button[data-analytics='LoginPassword']",{delay:50});
    return mouseclick;
}).then(function(){
   let algorithmselected= waitandrun(".topic-item.bold [data-automation='algorithms']",page);
    return algorithmselected;
    
}).then(function(){
    let problemselect=waitandrun(".ui-content.has-icon.align-icon-right",page);
    return problemselect;
}).then(function(){
    let positionclick=waitandrun(".custom-holder.inset",page);
    return positionclick;
}).then(function(){
    let outclick=waitandrun("#input-1",page);
    return outclick;
}).then(function(){
    let entertainment=page.type("#input-1",data);
    return entertainment;
}).then(function(){
    page.focus("#input-1")
    let one=page.keyboard.down('Control');
    return one;
}).then(function(){
    let two=page.keyboard.press('A');
    return two;
}).then(function(){
    let three=page.keyboard.press('C');
    return three;
}).then(function(){
  let four= page.keyboard.up('Control');
  return four;
}).then(function(){
    let five=page.click(".hr-monaco-editor-with-statusbar");
    return five;
}).then(function(){
    let six=page.keyboard.down('Control');
    return six;
}).then(function(){
    let seven=page.keyboard.press('A');
    return seven;
}).then(function(){

   let eight= page.keyboard.up('Control');
   return eight;
}).then(function(){
   let nine= page.keyboard.press('Backspace');
   return nine;
}).then(function(){
    let maybe=page.keyboard.down('Control');
    return maybe;
}).then(function(){
   let ten= page.keyboard.press('V');
   return ten;
}).then(function(){
    
let elecven=page.keyboard.up('Control');
return elecven;
}).then(function()
{
    let finalresult=page.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled",{delay:50});
    return finalresult;
}).catch(function(){
    console.log("error occurred");
})
















function waitandrun(selector,cpage)
{
    return new Promise(function(resolve,reject){
        let waitandcontinue=cpage.waitForSelector(selector);
        waitandcontinue.then(function(){
            let clickmodel=page.click(selector);
            return clickmodel;
        }).then(function(){
            resolve();
        }).catch(function(){
            reject();
        })
    })
}
