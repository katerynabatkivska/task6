const colorPrices = {
  blue: 100,
  red: 110,
  green: 120,
  orange: 130,
  black: 140,
};

const sizePrices = {
  "size-6": 100,
  "size-7": 110,
  "size-8": 120,
  "size-9": 130,
  "size-10": 140,
};

const variationPrices = {
  "new": 100,
  "discount": 80,
};

const colors = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");
const variations = document.querySelectorAll(".new");
const priceBlock = document.querySelector(".price h1");

colors.forEach(color => {
  color.addEventListener("click", () => {
    const selectedColor = color.getAttribute("color");
    const price = colorPrices[selectedColor];
    priceBlock.textContent = `${price} $`;
  });
});

sizes.forEach(size => {
  size.addEventListener("click", () => {
    const selectedSize = size.getAttribute("size");
    const price = sizePrices[selectedSize];
    priceBlock.textContent = `${price} $`;
  });
});

variations.forEach(variation => {
  variation.addEventListener("click", () => {
    const selectedVariation = variation.getAttribute("variation");
    const price = variationPrices[selectedVariation];
    priceBlock.textContent = `${price} $`;
  });
});
