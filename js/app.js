// DOM elementlarni chaqirib olamiz
const elHome_page = document.getElementById("Home_page");
const elShop_page = document.getElementById("shop_page");
const elShop_button = document.getElementById("shop_button");

// Bosilganda ishlaydigan mantiq
elShop_button.addEventListener("click", () => {
  if (elHome_page.classList.contains("hidden")) {
    // Agar home yashirilgan bo‘lsa → qaytish
    elHome_page.classList.remove("hidden");
    elShop_page.classList.add("hidden");
    elShop_button.textContent = "My Shop_page";
  } else {
    // Agar home ko‘rinib turgan bo‘lsa → shop ochiladi
    elHome_page.classList.add("hidden");
    elShop_page.classList.remove("hidden");
    elShop_button.textContent = "Back Home";
  }
});


// +- card
document.querySelectorAll("tr").forEach((row) => {
  const decrementBtn = row.querySelector(".decrement");
  const incrementBtn = row.querySelector(".increment");
  const quantityEl = row.querySelector(".quantity");
  const subtotalEl = row.querySelector(".subtotal");
  const priceText = row.querySelector("td:nth-child(2)");

  if (decrementBtn && incrementBtn && quantityEl && subtotalEl && priceText) {
    const price = parseFloat(priceText.textContent.replace("$", ""));
    let quantity = parseInt(quantityEl.textContent);

    const updateSubtotal = () => {
      subtotalEl.textContent = `$${(price * quantity).toFixed(2)}`;
      updateCartTotal();
    };

    decrementBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantityEl.textContent = quantity;
        updateSubtotal();
      }
    });

    incrementBtn.addEventListener("click", () => {
      quantity++;
      quantityEl.textContent = quantity;
      updateSubtotal();
    });

    updateSubtotal();
  }
});

function updateCartTotal() {
  let total = 0;
  document.querySelectorAll(".subtotal").forEach((el) => {
    total += parseFloat(el.textContent.replace("$", ""));
  });
  document.getElementById("cart-subtotal").textContent = `$${total.toFixed(2)}`;
  document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;
}

//  love btn
const loveBtns = document.querySelectorAll(".loveBtn");
// Barcha eye buttonlar
const eyeBtns = document.querySelectorAll(".eyeBtn");

// Love btn active
loveBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("bg-red-500"); 
    btn.classList.toggle("text-white"); 
  });
});

// Eye button action
eyeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Men seni ko'ryapman Olma 👀");
  });
});

// DROPDOWN
const dropdowns = [
    { button: "dropdownHomeLink", icon: "iconHome" },
    { button: "dropdownShopLink", icon: "iconShop" },
    { button: "dropdownPagesLink", icon: "iconPages" },
    { button: "dropdownBlogLink", icon: "iconBlog" }
  ];
  
  dropdowns.forEach(d => {
    const btn = document.getElementById(d.button);
    const icon = document.getElementById(d.icon);
  
    if (btn && icon) {
      btn.addEventListener("click", () => {
        icon.classList.toggle("rotate-180");
      });
    }
  });

  // Countdown 
const countdownDate = new Date().getTime() + (2 * 60 * 60 + 18 * 60 + 46) * 1000;

// Timer element
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#mins");
const secsEl = document.querySelector("#secs");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    daysEl.innerText = "00";
    hoursEl.innerText = "00";
    minsEl.innerText = "00";
    secsEl.innerText = "00";
    clearInterval(timerInterval);
    return;
  }


  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);


  daysEl.innerText = String(days).padStart(2, "0");
  hoursEl.innerText = String(hours).padStart(2, "0");
  minsEl.innerText = String(minutes).padStart(2, "0");
  secsEl.innerText = String(seconds).padStart(2, "0");
}


const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();


const btnModal = document.getElementById('btn-modal');
const overlayModal = document.getElementById('overlay-modal');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');

btnModal.addEventListener('click', () => {
  overlayModal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('scale-0');
    modal.classList.add('scale-100');
  }, 10);
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('scale-100');
  modal.classList.add('scale-0');
  setTimeout(() => {
    overlayModal.classList.add('hidden');
  }, 300);
});

const btnDrawer = document.getElementById('btn-drawer');
const closeDrawer = document.getElementById('close-drawer');
const overlayDrawer = document.getElementById('overlay-drawer');
const drawer = document.getElementById('drawer');

btnDrawer.addEventListener('click', () => {
  overlayDrawer.classList.remove('hidden');
  setTimeout(() => {
    drawer.classList.remove('translate-x-full');
  }, 10);
});

closeDrawer.addEventListener('click', () => {
  drawer.classList.add('translate-x-full');
  setTimeout(() => {
    overlayDrawer.classList.add('hidden');
  }, 300);
});
// Get remove button 
const removeButtons = document.querySelectorAll('.remove-btn');

removeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.flex.items-center');
    if (product) {
      product.remove();
    }
  });
});
