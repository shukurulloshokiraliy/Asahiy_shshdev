document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("Popular Categories");
  
    const caruselDiv = document.createElement("div");
    caruselDiv.className = "Carusel";
  
    const section = document.createElement("section");
    section.className = "w-full max-w-[1320px] mx-auto mt-10 px-4";
  
    const headerDiv = document.createElement("div");
    headerDiv.className = "flex justify-between items-center mb-6";
  
    const h2 = document.createElement("h2");
    h2.className = "text-2xl font-semibold";
    h2.textContent = "Popular Categories";
  
    const a = document.createElement("a");
    a.href = "#";
    a.className = "text-green-600 font-medium flex items-center gap-1";
    a.textContent = "View All →";
  
    headerDiv.append(h2, a);
  
    const grid = document.createElement("div");
    grid.className =
      "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4";
  
    const categories = [
      { img: "./images/c1.svg", title: "Fresh Fruit" },
      { img: "./images/c2.svg", title: "Fresh Vegetables", active: true },
      { img: "./images/c3.svg", title: "Meat & Fish" },
      { img: "./images/c4.svg", title: "Snacks" },
      { img: "./images/c5.svg", title: "Beverages" },
      { img: "./images/c6.svg", title: "Beauty & Health" },
      { img: "./images/c7.svg", title: "Bread & Bakery" },
      { img: "./images/c8.svg", title: "Baking Needs" },
      { img: "./images/c9.svg", title: "Cooking" },
      { img: "./images/c10.svg", title: "Diabetic Food" },
      { img: "./images/c11.svg", title: "Dish Detergents" },
      { img: "./images/c12.svg", title: "Oil" },
    ];
  
    categories.forEach((cat) => {
      const card = document.createElement("div");
      card.className =
        "w-[200px] h-[213px] border border-[#E5E5E5] rounded-[5px] flex flex-col " +
        "items-center pt-4 pb-6 gap-4 shadow-sm hover:shadow-lg hover:border-green-500 " +
        "transition mx-auto";
  
      const img = document.createElement("img");
      img.src = cat.img;
      img.alt = cat.title;
      img.className = "w-[190px] h-[130px] object-contain";
  
      const p = document.createElement("p");
      p.className =
        "font-[Poppins] font-medium text-[18px] text-center" +
        (cat.active ? " text-green-600" : "");
      p.textContent = cat.title;
  
      card.append(img, p);
      grid.appendChild(card);
    });
  
    section.append(headerDiv, grid);
    caruselDiv.appendChild(section);
  
    
    root.appendChild(caruselDiv);
  });
// POPULAR PRODUCTS CARDS
document.addEventListener("DOMContentLoaded", function () {
    // ROOT
    var productsGrid = document.getElementById("productsGrid");
  
    // GRID
    var grid = document.createElement("div");
    grid.className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5";
  
    // PRODUCTS
    var products = [
      { img: "./images/p1.svg", name: "American Apple", price: "$20.00", rating: 4, hoverIcons: true },
      { img: "./images/p2.svg", name: "Fresh Indian Malta", price: "$20.00", rating: 4 },
      { img: "./images/p3.svg", name: "Chinese Cabbage", price: "$12.00", rating: 4 },
      { img: "./images/p4.svg", name: "Green Lettuce", price: "$9.00", rating: 4 },
      { img: "./images/p5.svg", name: "Eggplant", price: "$34.00", rating: 4 },
      { img: "./images/p6.svg", name: "Big Potatoes", price: "$20.00", rating: 4 },
      { img: "./images/p7.svg", name: "Corn", price: "$20.00", rating: 4 },
      { img: "./images/p8.svg", name: "Fresh Cauliflower", price: "$12.00", rating: 4 },
      { img: "./images/p9.svg", name: "Green Capsicum", price: "$9.00", rating: 4 },
      { img: "./images/p10.svg", name: "Green Chili", price: "$34.00", rating: 4 }
    ];
  
    // LOOP
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
  
      // CARD
      var card = document.createElement("div");
      card.className = "group w-full max-w-[264px] h-[327px] border border-[#E5E5E5] rounded-md bg-white relative hover:shadow-lg hover:border-green-500 transition mx-auto";
  
      // IMAGE
      var img = document.createElement("img");
      img.src = product.img;
      img.alt = product.name;
      if (i === 0) {
        img.className = "w-[250px] h-[230px] object-contain p-4 mx-auto";
      } else {
        img.className = "w-[254px] h-[230px] object-contain mx-auto mt-2";
      }
      card.appendChild(img);
  
    
      if (product.hoverIcons) {
        var iconDiv = document.createElement("div");
        iconDiv.className = "absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition";
  
        var loveBtn = document.createElement("button");
        loveBtn.className = "w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100";
        loveBtn.innerHTML = '<img src="./images/love.svg" alt="Love" class="w-4 h-4" />';
  
        var eyeBtn = document.createElement("button");
        eyeBtn.className = "w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100";
        eyeBtn.innerHTML = '<img src="./images/eye.svg" alt="View" class="w-4 h-4" />';
  
        iconDiv.appendChild(loveBtn);
        iconDiv.appendChild(eyeBtn);
        card.appendChild(iconDiv);
      }
  
      // TEXT
      var textDiv = document.createElement("div");
      textDiv.className = "px-4";
  
      var h3 = document.createElement("h3");
      h3.className = "font-poppins font-medium text-[16px] text-center mt-3";
      h3.textContent = product.name;
  
      var p = document.createElement("p");
      p.className = "font-poppins font-semibold text-[14px] text-center text-gray-800";
      p.textContent = product.price;
  
      var btn = document.createElement("button");
      btn.setAttribute("data-modal-target", "crud-modal");
      btn.setAttribute("data-modal-toggle", "crud-modal");
      btn.type = "button";
      btn.className = "absolute bottom-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#F2F2F2] hover:bg-green-500";
      btn.innerHTML = '<img src="./images/p_icon.svg" alt="Add" class="w-5 h-5" />';
  
      // RATING 
      var stars = "";
      for (var s = 0; s < 5; s++) {
        if (s < product.rating) {
          stars += "⭐";
        } else {
          stars += "⭐";
        }
      }
      var starsDiv = document.createElement("div");
      starsDiv.className = "flex justify-center space-x-1 mt-1";
      starsDiv.innerHTML = '<span class="text-orange-500">' + stars + "</span>";
  
      textDiv.appendChild(h3);
      textDiv.appendChild(p);
      textDiv.appendChild(btn);
      textDiv.appendChild(starsDiv);
  
      card.appendChild(textDiv);
      grid.appendChild(card);
    }
  
    productsGrid.appendChild(grid);
  });
  
  