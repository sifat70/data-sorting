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
        <button class="lg:mr-4 md:mr-3 mr-1  btn btn-outline btn-success"><a onclick="handleCategoryCard('${category.category_id}')" class="tab">${category.category}</a></button>
        `;
        categoryContainer.appendChild(div);
    })

}

const handleCategoryCard = async (categoryId) => {
    // console.log(categoryId);
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);

    const data = await response.json();

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    // if(data.length === 0){
    //     console.log('kam sarce');
    // }

    if ((data.data).length > 0) {
        data.data.forEach((software) => {
            const div = document.createElement('div');
            div.innerHTML = `
            <div  class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                        <img class="h-[200px]" src="${software?.thumbnail}" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        
                        <div class="flex gap-4">
                        <div class="relative">
                        <img class="h-12 w-12 rounded-full" src="${software?.authors[0].profile_picture}" alt="">
                        </div>
                        <div class="absolute bg-black text-white left-[100px] top-[200px]">${secondsToHoursAndMinutes(software?.others?.posted_date)}</div>
                        <div>
                        <h2 class="card-title">${software?.title?.slice(0, 14)}</h2>
                        <div class="flex"><a class="pr-2">${software?.authors[0]?.profile_name}</a> <a>${software.authors[0]?.verified ? '<img class="class="h-8 w-8 rounded-full" src="./images/varified.svg" alt=""></img>' : ""}</a></div>
                        <p>${software?.others?.views}</p>
                        </div>
                        </div>
                    </div>
                    </div>
            `;
            cardContainer.appendChild(div);
        })
    } else {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex justify-center items-center">
        <img class="lg:ml-[1100px] md:ml-[450px] ml-[50px] mt-[20px] md:mt-[50px] lg:mt-[100px]" src="./images/Icon.png" alt="">
        </div>
        `
        cardContainer.appendChild(div)
    }


}




function secondsToHoursAndMinutes(seconds) {
    const hours = Math.floor(seconds / 3600);

    const remainingSeconds = seconds % 3600;

    const minutes = Math.floor(remainingSeconds / 60);

    const set = `${hours} hours ${minutes} minutes ago`


    return set;
}




handleCategory();