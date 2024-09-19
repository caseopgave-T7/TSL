const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`https://axcgppzsihqhelmllyrd.supabase.co/rest/v1/T&SL?asset_id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y2dwcHpzaWhxaGVsbWxseXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTg3NDgsImV4cCI6MjA0MTUzNDc0OH0.ZRk78YiB5wffWcrQYr-CRsh2yrb7ISHSGx4V7rQuO_8",
  },
})
  .then((res) => res.json())
  .then(showSingle);

function showSingle(produkt) {
  console.log(produkt);
}
