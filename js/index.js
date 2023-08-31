const handleCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    // console.log(data);


    const categoryContainer = document.getElementById('tab-container');

    const categories = data.data;
    // console.log(categories);

    categories.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleCategoryCard('${category.category_id}')" class="tab">${category.category}</a>
        `;
        categoryContainer.appendChild(div);
    })

}

const handleCategoryCard = async (categoryId) => {
    // console.log(categoryId);
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);

    const data = await response.json();

    const cardContainer = document.getElementById('card-container');

    data.data.forEach((software) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div  class="card bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
                    <img class="h-[200px]" src="${software?.thumbnail}" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body">
                    
                    <div class="flex gap-4">
                    <div>
                    <img class="h-8 w-12 rounded-full" src="${software?.authors[0].profile_picture}" alt="">
                    </div>
                    <div>
                    <h2 class="card-title">${software?.title?.slice(0,14)}</h2>
                    <a>${software?.authors[0]?.profile_name}<span>${software.authors[0]?.verified ? '<img class="h-3 w-4 rounded-full" src="./images/varified.svg" alt=""></img>' : ""}</span></a>
                    <p>${software?.others?.views}</p>
                    
                    </div>
                    </div>
                </div>
                </div>
        `;
        cardContainer.appendChild(div)
    })

}

handleCategory();