let responseData;

document.addEventListener("DOMContentLoaded", function () {
  fetchData();

  const fetchNewQuote = document.getElementById("quoteBtn");
  fetchNewQuote.addEventListener("click", fetchData);
});

async function fetchData() {
  const apiUrl = "https://api.kanye.rest";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    responseData = await response.json();

    console.log("Data from API: ", responseData);
    displayData();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayData() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!responseData || !responseData.quote) {
    resultDiv.innerHTML = "<p>No quote available</p>";
    return;
  }

  const quoteDiv = document.createElement("div");
  quoteDiv.classList.add("quote");

  const content = `<p>${responseData.quote}</p>`;
  quoteDiv.innerHTML = content;

  resultDiv.appendChild(quoteDiv);
}

displayData();
