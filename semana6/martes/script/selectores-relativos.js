const ul = document.querySelector("ul");

console.log("ul",ul);

// first element children

console.log("first",ul.firstElementChild);

console.log("last",ul.lastElementChild);

// children

console.log("children",ul.children);
console.log("children",ul.children[0]);
console.log("children",ul.children[1]);

// sibbling previous elements

console.log(ul.previousElementSibling.previousElementSibling);


// sibbling next elements

console.log(ul.nextElementSibling);

// parent
console.log(ul.parentElement); //body
console.log(ul.parentElement.querySelector("h1")); //h1

// clesest
console.log(document.querySelector("li").closest("html").querySelector("h1"));
// te lleva al ancestro padre que tu le indique
