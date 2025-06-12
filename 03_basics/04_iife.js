// Immediately invoked function expression (IIFE)
// fucntions ko immediately execute karane mei help karta h
// syntax = ()() pehle function wrap karta h aur dusra parenthesis function call ke liye

(function chai (){ // named iife
    console.log(`DB connected`);
})();

//jab hum dusra function likhenge similar way mei using iife tab humei ek semicolon pehle waale mei lagana hoga warna error aayega
// semicolon lagane ke baad agar arrow bhi use kar lenge toh koi error nhi aayega

( ()=>{ // unnamed iife
    console.log(`DB connected two`);
} )();

// agar variable use karna h toh

( (name)=>{ // parameter waali iife
    console.log(`Hello , ${name}`);
} )('Sahil')