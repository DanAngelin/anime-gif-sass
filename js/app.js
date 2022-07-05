

const htmlImage = `<img src="assets/dance.gif" class="section__anime-img__gif">
<h4>Dance</h4>
<img src="assets/dance.gif" class="section__anime-img__gif">
<h4>Dance</h4>`

const headerImg = async(category) => {
    try {
        const response = await fetch(`https://nekos.best/api/v2/${category}?amount=2`);
        const {results} = await response.json();
        const [{anime_name: anime1, url: img1}, {anime_name: anime2, url: img2}] = results;
        console.log(anime1, img1)
        console.log(anime2, img2)
        const htmlCategory = document.querySelector(`.${category}`);
        htmlCategory.innerHTML = "";
        htmlCategory.insertAdjacentHTML("afterbegin", `
            <h4>${anime1}</h4>
            <img src="${img1}" class="section__anime-img__gif">
            <h4>${anime2}</h4>
            <img src="${img2}" class="section__anime-img__gif">
        `)
    } catch(err) {
        console.log(err)
    }
}

headerImg("dance");
headerImg("happy");
headerImg("laugh");
headerImg("think");
headerImg("wink");