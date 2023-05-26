const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLenght=15;
let passEl=document.getElementById("pass-el")



function passwordGenerator() {
    if (passEl.textContent.length===0) {
        for(let i=0;i<=passwordLenght;i++) {
            let randomCharacter1=Math.floor(Math.random()*characters.length)
            passEl.textContent+=characters[randomCharacter1]
        }
    }
}

function passwordCopy() {
    console.log(passEl)
    const copyText =passEl.textContent;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
    });
}

function passwordReseter() {
    passEl.textContent=""
}
