const handleCategory = async() =>{
    const responce = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await responce.json();
    // console.log(data);


    const categoryContainer  = document.getElementById('tab-container');

    const categories = data.data
    // console.log(categories);

    categories.forEach((category) =>{
        const div = document.createElement('div');
        div.innerHTML = `
        <a class="tab">${category.category}</a>
        `;
        categoryContainer.appendChild(div);
    })

}

handleCategory();