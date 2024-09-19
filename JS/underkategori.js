const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");


fetch(`https://pmkgzigtfvpgwndydjei.supabase.co/rest/v1/products`, {
    method: "GET",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBta2d6aWd0ZnZwZ3duZHlkamVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NzExNDYsImV4cCI6MjA0MTU0NzE0Nn0.MApsdRSxWPYZGSSUB_7bw0kohpF6YOs5Y97fhfNODxk",
    },
})
    .then((res) => res.json())
    .then((data) => showCategories(data));

function showCategories(categories) {
    // Begrænsning til 6 kategorier
    const limitedCategories = categories.slice(0, 6);
    limitedCategories.forEach(showCategory);
}


function showCategory(category) {
    console.log(category)

    const template = document.querySelector("template").content;

    const clone = template.cloneNode(true);

    clone.querySelector("h3").textContent = category.productname;
    // clone.querySelector("img").src = `imgs/${category.img}`
    clone.querySelector("img").src = `imgs/kamera.jpeg`


    // HUSK ALTID MED TEMPLATE
    document.querySelector("main").appendChild(clone);


}


//   document.querySelector("img").src = `imgs/${product.img}`;

//   document.querySelector("#product_title").textContent = product.productname;
//   document.querySelector("#product_description").textContent = product.description;
