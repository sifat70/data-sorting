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

    data.data.forEach((news) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div  class="card bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
                    <img class="h-[200px]" src="${news?.thumbnail}" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
        `;
        cardContainer.appendChild(div)
    })

}

handleCategory();