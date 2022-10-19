const element = document.createElement("div");
document.body.append(element);
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);


const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

const elements = document.getElementById("main");
elements.style.height = "300px";
elements.style.backgroundColor = "#27647B";
element.style.fontSize = "24px";
elements.style.marginLeft = "30px";
elements.style.lineHeight = 2;

element.className = "pet-listing dog";
element.classList.remove("dog");
element.classList.add("cat", "sale");
///////////////////////////
someElement.removeChild(someChildElement);

const un_li = document.getElementsByTagName("ul")[0];
const secondChild = un_li.querySelector("li:nth-child(2)");
un_li.removeChild(secondChild);

un_li.remove();
