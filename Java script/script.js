let Oke = document.getElementById('Test');


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Clicked() {
    let User = "bambang"
    let text_Pesan = document.getElementById('Test1').value;
    let sapa = ["Hai, ada yang bisa saya bantu ?", "Apakah saya dapat membantu anata ?", "Apa yang bisa saya berikan, untuk anda ?"];

    
    let rumus = Math.random() * sapa.length;
    const rumus_1 = Math.floor(rumus)
    const Sapaan = sapa[rumus_1]
    
    
    let hasil = document.getElementById('Result');
    const node = document.createElement("p");
    const textnode = document.createTextNode(`${User} : ${text_Pesan}`);
    node.appendChild(textnode);
    hasil.appendChild(node);
    
    
    if (text_Pesan === "/help") {
        hasil.innerHTML = "Esdeath : Help Command : <br> /help - Melihat semua command <br> /ping - Cek server <br> /echo - Balas pesanmu";
    } else if (text_Pesan === "hai") {
        await delay(1000);
        const node = document.createElement("p");
        const textnode = document.createTextNode(`Esdeath : ${Sapaan}`);
        node.appendChild(textnode);
        hasil.appendChild(node);
        } else if (text_Pesan === "Tunjukan Prestasimu") {
            await delay(1500);
            hasil.innerHTML = "Esdeath : Ini adalah Prestasi Saya <br> ";
        }
}