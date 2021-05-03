const _ = require('loadsh');
const HashMap = require('hashmap')
// #JS-1.3

let object = {
    a : "mr",
    c : "ms"
};
console.log(object);

object.b = "mrs";
console.log(object);

delete object.a;
console.log(object);


Object.entries(object).forEach(([key, value]) => {
    console.log(`${key} ${value}`); 
});

Object.values(object).forEach(value => {
    console.log(`${value}`); 
});

Object.keys(object).forEach(key => {
    console.log(`${key}`); 
});

// #JS-1.4

let arr = [66, 54, 23, 12, 54];
console.log(arr);

arr.push(90);
console.log(arr);

arr.unshift(1);
console.log(arr);

arr.pop();
console.log(arr);

// удаление элемента по индексу
arr.splice(3, 1);
console.log(arr);

// удаление одного элемента по значению, учитывается первое вхождение элемента

e = 66;

if(arr.indexOf(e) >= 0) {
   arr.splice(arr.indexOf(e), 1);
};

console.log(arr);

// удаление всех элементов с указанным значением

e = 54;

arr = arr.filter(n => {return n != e});
console.log(arr);

// #JS-1.5

// поверхностное копирование, отсылка к исходному объекту, изменения отражаются в обоих объектах
object2 = object;
console.log(object2);

delete object2.b;
console.log(object2);
console.log(object);

object2.d = "dr";
console.log(object2);
console.log(object);

// глубокое копирование, дублирование всех объектов, изменения отражаются только в созданном объекте

let object3 = _.cloneDeep(object);

delete object3.d;
console.log(object3);
console.log(object);

object3.a = "pr";
console.log(object3);
console.log(object);

// #JS-2.1

const sum = (arr) => {
    let result = arr.reduce((acc, num) => acc + num, 0);
    console.log(result);
}

sum(arr);

let result = arr.reduce((acc, num) => acc + num, 0);
console.log(result);

// #JS-2.2

// передача в функцию по значению, изменения переменной не сохраняются
const dec = (n) => {
    n--;
    console.log(n);
};

let n = 10;
console.log(n);

dec(n);
console.log(n);

// передача по ссылке, изменения отражаются в объекте
const clearC = (obj) => {
    obj.c = "";
};

console.log(object);

clearC(object);
console.log(object);

// #JS-2.3

const display = (a) => console.log(a);
const inc = (a, func) => {
    a++;
    func(a);
}

inc(n, display);

// #JS-2.4

let promise1 = new Promise(function(resolve, reject) {  
    let n = 5;
    if (n > 3) {
        setTimeout(() => resolve("nice done"), 2000);
    } else{
        setTimeout(() => reject(new Error("hoho")), 1000); 
    }
})
.then(
   result => console.log(result), 
   error => console.log(error) 
);

let promise2 = new Promise(function(resolve, reject) {  
    let n = 5;
    if (n > 7) {
        setTimeout(() => resolve("nice done"), 2000);
    } else{
        setTimeout(() => reject(new Error("hoho")), 1000); 
    }
    
})
.catch(error => console.log(error));

// ассинхронное выполнение, так как иначе блок блок кода завершится до выполнения promise и catch не отловит ошибку
(async() => {
    try{
        let promise3 = new Promise(function(resolve, reject) {  
            let n = 5;
            if (n > 7) {
                setTimeout(() => resolve("nice done"), 3000);
            } else{
                setTimeout(() => reject(new Error("hoho")), 1000); 
            }
            
        });

        const result = await promise3;
        console.log(result);

    } catch(error){
        console.log(error);
    }
})();

// #JS-2.5

let nums = [2, 7, 11, 15];
let target = 9;

let pairs = new HashMap();

for(let i = 0; i < nums.length; i++){
    if (pairs.has(nums[i])){
        console.log(i + ", " + nums.indexOf(pairs.get(nums[i])))
    }
    else{
        pairs.set(target - nums[i], nums[i]);
    }
}

