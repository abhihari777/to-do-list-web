let searchBtn = document.querySelector(".back");

const enableAnimation = () => {
    searchBtn.addEventListener('click', () => {
    searchBtn.classList.add('active');
    setTimeout(() => searchBtn.classList.remove('active'), 1000);
})
};

enableAnimation();

let button = document.querySelector(".btn");
let input = document.querySelector(".add-text");
let maindiv = document.querySelector(".your-task");


button.addEventListener('click', addMessage);
input.addEventListener('keypress', (e) => {
    if(e.key === "Enter"){addMessage();}
});


function addMessage() {

    const displaymessageincontainer = () => {

        const content = input.value;

        if(content === "")return;
        
        const newContainer = document.createElement("div");
        newContainer.classList.add("task-box");

        const newContainerpara = document.createElement("p");
        newContainerpara.classList.add("task");

        newContainerpara.textContent = content;

        maindiv.appendChild(newContainer);
        newContainer.appendChild(newContainerpara);
        
    

   
        const newBoxes = document.createElement("div");
        newBoxes.classList.add("boxes");
        newContainer.appendChild(newBoxes);

        const newDeleteButton = document.createElement("p");
        newDeleteButton.classList.add("remove-box");
        newDeleteButton.innerHTML = '<i class="fa-solid fa-x"></i>';

        newBoxes.appendChild(newDeleteButton);

        const newTickButton = document.createElement("p");
        newTickButton.classList.add("tick-box");
        newTickButton.innerHTML = '<i class="fa-solid fa-check"></i>';

        newBoxes.appendChild(newTickButton);

        input.value = "";



        newTickButton.addEventListener('click', () => {
            newContainerpara.innerHTML = "Great job!";
            newContainerpara.classList.add("vanish");
            newBoxes.classList.add("vanish");
            setTimeout(()=> {newContainer.remove()},1000);
        })

        newDeleteButton.addEventListener('click', () => {
            newContainerpara.classList.add("vanish");
            newBoxes.classList.add("vanish");
            setTimeout(()=> {newContainer.remove()},1000);
        })

       
    }  

    displaymessageincontainer();

}






