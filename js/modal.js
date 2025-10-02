document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("drinkModal");
  const closeBtn = document.getElementById("closeModal");

  const modalImg = document.getElementById("modalImg");
  const modalName = document.getElementById("modalName");
  const modalChinese = document.getElementById("modalChinese");
  const modalKcal = document.getElementById("modalKcal");
  const modalPrice = document.getElementById("modalPrice");
  const modalDesc = document.getElementById("modalDesc");

  const menuItems = document.querySelectorAll(".menu-item");

  //Loop each menu item and bind click
  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      const drink = drinks[index]; 

      // Fill modal content
      modalImg.src = drink.img;
      modalName.textContent = drink.name;
      modalChinese.textContent = drink.chinese;
      modalKcal.textContent = drink.kcal;
      modalPrice.textContent = drink.price;
      modalDesc.textContent = drink.desc;

      // Show modal, always centered
      modal.style.display = "flex";
    });
  });

  //Close modal with X button
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  //Close modal when clicking outside content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
