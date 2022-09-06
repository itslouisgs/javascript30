const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const deleteBtn = document.getElementById("delete");
const items = JSON.parse(localStorage.getItem("items")) || [];

const addItem = (e) => {
    e.preventDefault();
    const text = e.target.querySelector("[name=item]").value;
    const item = {
        value: text,
        done: false,
    };
    items.push(item);
    populateList();

    localStorage.setItem("items", JSON.stringify(items));
    e.target.reset();
};

const populateList = () => {
    itemsList.innerHTML = items
        .map((item, index) => {
            return `
                <li>
                    <input type="checkbox" data-index=${index} id="item-${index}"
                        ${item.done ? "checked" : ""} />
                    <label for="item-${index}">${item.value}</label>
                </li>
            `;
        })
        .join("");
};

const checkItem = (e) => {
    const element = e.target;

    if (!element.matches("input")) return;
    else {
        items[element.dataset.index].done = !items[element.dataset.index].done;
        localStorage.setItem("items", JSON.stringify(items));
    }
};

const deleteAll = (e) => {
    items.length = 0;
    populateList();
    localStorage.removeItem("items");
};

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", checkItem);
deleteBtn.addEventListener("click", deleteAll);

document.onload = populateList();
