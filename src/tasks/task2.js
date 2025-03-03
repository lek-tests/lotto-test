const createCats = () => {
    let cats = [];
    for (let i = 0; i < 10; i++) {
        let cat = function() {
            console.log(`My index is ${i}`);
        };
        cats.push(cat);
    }
    return cats;
}


let animals = createCats();
console.log(animals[0]());
console.log(animals[5]());

