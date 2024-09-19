const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

if (!id) {
  id = "B00068";
}

fetch(`https://pmkgzigtfvpgwndydjei.supabase.co/rest/v1/products?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBta2d6aWd0ZnZwZ3duZHlkamVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NzExNDYsImV4cCI6MjA0MTU0NzE0Nn0.MApsdRSxWPYZGSSUB_7bw0kohpF6YOs5Y97fhfNODxk",
  },
})
  .then((res) => res.json())
  .then(showSingle);

function showSingle(produkts) {
  console.log(produkts);

  const product = produkts[0];
  console.log(id, product);

  document.querySelector("img").src = `imgs/${product.img}`;

  document.querySelector("#product_title").textContent = product.productname;
  document.querySelector("#product_description").textContent = product.description;
}
