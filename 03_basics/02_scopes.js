// agar bahar kuch declare kar rhe h toh uska global scope hoga
let a = 300 // yeh print hoga 

if(true){ // iske andar jo bhi h wo block scope h
    const a = 10 // agar iske andar ek log.console karte toh yeh waala print hota
    let b = 20
    var c = 30
}

console.log(a);
//console.log(b);
//console.log(c); // c print ho jaata

//pehle 2 mei error dikhayega kyu ki wo out os scope ho jaata
// but var mei scope issues hote h
// isliye hum var itna use nhi karte

// scope level and nested scope

//Nested functions jo hote h wo parent function ke variables ko access kar paate h
//but vice versa not possible

function one(){
    const username = "Sahil"

    function two(){
        website = "youtube"
        console.log(username);
    }
    //console.log(website);
    
    two()
}

one()

// ismei wo parent ko access kar paa rhe h
//agar two() hata de tab one() nhi chalega

if(true){
    const user_name = "jana"
    if(user_name === "jana"){
        const web = " youtube"
        console.log(user_name + web);
    }
    console.log(web);
}
console.log(user_name);
// yeh dono hi error denge kyu ki "web" waale ka scope nested if mei khatam ho jaata h aur "user_name" ka scope bhi pehle if mei khatam ho jaata h

// ++++++++++++++++++ interesting ++++++++++++++++++ // hoisting


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
