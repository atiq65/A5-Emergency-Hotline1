let heartCount = 0;
const heartCountElement = document.getElementById("nav-heart-icon");
const allHeartIcons = document.querySelectorAll(".card-heart-icon");

for (let i = 0; i < allHeartIcons.length; i++) {
  allHeartIcons[i].addEventListener("click", function () {
    heartCount++;
    heartCountElement.textContent = heartCount;
  });
}

// call function
let coins = 100;
const coinProvide = document.getElementById("100-coin");
const callHistory = document.getElementById("call-history");
const clearBtn = callHistory.querySelector("button");

// all button select
const callAllButtons = document.querySelectorAll(".call-btn");
callAllButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const serviceCard = btn.closest(".card");
    const serviceName = serviceCard.querySelector(".card-title").innerText;
    const serviceNumber = serviceCard.querySelector("span.font-bold").innerText;
    //change the coins
    if (coins < 20) {
      alert("You do not have enough coins to make a call");
      return;
    }
    //alert show on screen
    alert(`Calling ${serviceName} (${serviceNumber})`);
    //coins decrease total 100 coins
    coins -= 20;
    coinProvide.innerText = coins;

    // add current time on the history section
    const currentTime = new Date();
    const isTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // add to call history
    const addHistoryItem = document.createElement("div");
    addHistoryItem.classList.add(
      "flex",
      "justify-between",
      "mt-3",
      "p-2",
      "border",
      "rounded-xl"
    );

    addHistoryItem.innerHTML = `<div>
    <h4 class= 'font-bold'>${serviceName} </h4>
    <p class = 'text-gray-400 '> ${serviceNumber}</p>
    </div>
    <div>
    <p class="text-xs text-[#111111]">${isTime} </p>
    </div>`;
    callHistory.appendChild(addHistoryItem);
  });
});
// clear button

clearBtn.addEventListener("click", () => {
  const addHistoryItems = callHistory.querySelectorAll("div.mt-3");
  addHistoryItems.forEach((item) => item.remove());
});

//copy count button
const copyCountButton = document.querySelector("nav button");
let copyCount = 0;
// copy btn
const copyButtons = document.querySelectorAll(
  ".card-actions button:first-child"
);
copyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const hotLineNumbers = card.querySelector("div h2 span").innerText;
    // click on copy
    navigator.clipboard.writeText(hotLineNumbers).then(() => {
      alert(`Hotline number ${hotLineNumbers} copied!`);
      // how to copy count increase
      copyCount++;
      copyCountButton.innerText = `${copyCount} copy`;
    });
  });
});
