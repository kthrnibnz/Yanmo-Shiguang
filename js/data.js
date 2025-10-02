const drinks = [
  {
    id: "ratLatte",
    name: "Rat’s Caramel Latte",
    chinese: "机灵焦糖拿铁",
    kcal: "220–260 kcal",
    price: "$3.75",
    img: "css/menu/1.png", 
    desc: "Smooth espresso with a golden drizzle of caramel — clever, comforting, and quick. Just like the Rat, this latte brings warmth and energy to those always thinking ahead."
  },
  {
    id: "oxLatte",
    name: "Ox’s Steady Tiramisu",
    chinese: "踏实提拉米苏拿铁",
    kcal: "230–280 kcal",
    price: "$4.00",
    img: "css/menu/2.png",  
    desc: "A strong tiramisu latte with creamy cocoa tones — steady and grounded, just like the Ox."
  },
  {
    id: "tigerLatte",
    name: "Tiger’s Bold Mocha",
    chinese: "勇猛摩卡",
    kcal: "240–300 kcal",
    price: "$4.25",
    img: "css/menu/3.png",
    desc: "Rich mocha layered with espresso and dark chocolate — fierce, bold, and full of energy like the Tiger."
  },
  {
    id: "rabbitLatte",
    name: "Rabbit’s Rose Latte",
    chinese: "温柔玫瑰拿铁",
    kcal: "200–250 kcal",
    price: "$3.90",
    img: "css/menu/4.png",
    desc: "Gentle rose-infused latte with floral sweetness — delicate, kind, and graceful like the Rabbit."
  },
  {
    id: "dragonLatte",
    name: "Dragon’s Fire Chai",
    chinese: "火龙香料茶拿铁",
    kcal: "250–320 kcal",
    price: "$4.50",
    img: "css/menu/5.png",
    desc: "Spiced chai latte with fiery warmth — bold, passionate, and unstoppable like the Dragon."
  },
  {
    id: "snakeLatte",
    name: "Snake’s Matcha Latte",
    chinese: "自然抹茶拿铁",
    kcal: "180–220 kcal",
    price: "$3.80",
    img: "css/menu/6.png",
    desc: "Smooth Japanese matcha blended with milk — wise, calming, and natural like the Snake."
  },
  {
    id: "horseLatte",
    name: "Horse’s Cinnamon Latte",
    chinese: "自由肉桂拿铁",
    kcal: "230–270 kcal",
    price: "$4.00",
    img: "css/menu/7.png",
    desc: "Warm cinnamon spice latte — free-spirited, bold, and adventurous like the Horse."
  },
  {
    id: "goatLatte",
    name: "Goat’s Honey Latte",
    chinese: "温情蜂蜜拿铁",
    kcal: "210–250 kcal",
    price: "$3.95",
    img: "css/menu/8.png",
    desc: "Golden honey drizzled latte — gentle, caring, and comforting like the Goat."
  },
  {
    id: "monkeyLatte",
    name: "Monkey’s Hazelnut Latte",
    chinese: "聪明榛果拿铁",
    kcal: "240–300 kcal",
    price: "$4.20",
    img: "css/menu/9(2).png",
    desc: "Nutty hazelnut latte with playful sweetness — clever, witty, and lively like the Monkey."
  },
  {
    id: "roosterLatte",
    name: "Rooster’s Vanilla Latte",
    chinese: "自信香草拿铁",
    kcal: "220–260 kcal",
    price: "$3.90",
    img: "css/menu/10.png",
    desc: "Classic vanilla latte with smooth, confident notes — bold and dependable like the Rooster."
  },
  {
    id: "dogLatte",
    name: "Dog’s Toffee Latte",
    chinese: "忠诚太妃拿铁",
    kcal: "230–280 kcal",
    price: "$4.10",
    img: "css/menu/11.png",
    desc: "Caramel-toffee latte with warm sweetness — loyal, comforting, and dependable like the Dog."
  },
  {
    id: "pigLatte",
    name: "Pig’s Chocolate Latte",
    chinese: "满足巧克力拿铁",
    kcal: "260–320 kcal",
    price: "$4.30",
    img: "css/menu/12.png",
    desc: "Indulgent chocolate latte with creamy richness — joyful, generous, and indulgent like the Pig."
  },

  //Zodiac Non-Coffee & Tea
{
  id: "dragonTea",
  name: "Dragon’s Pomegranate",
  chinese: "龙之石榴茶",
  kcal: "150–200 kcal",
  price: "$4.40",
  img: "css/menu/13.png",
  desc: "Vibrant, magnetic, and full of life. Bold pomegranate, passionfruit, and citrus — much like the Dragon, it sparks attention and celebration in every sip."
},
{
  id: "snakeTea",
  name: "Snake’s Osmanthus",
  chinese: "蛇之桂花茶",
  kcal: "180–200 kcal",
  price: "$4.25",
  img: "css/menu/14.png",
  desc: "Mysterious and refined. Oolong tea infused with golden osmanthus blossoms, topped with soft cream — elegant and serene, just like the Snake."
},
{
  id: "tigerTea",
  name: "Tiger’s Sunset",
  chinese: "虎之落日饮",
  kcal: "80–120 kcal",
  price: "$3.50",
  img: "css/menu/15.png",
  desc: "Fierce, radiant, and impossible to ignore. A zesty blend of jasmine tea, lemon, and orange slices — bold, bright, and unstoppable like the Tiger."
},
{
  id: "rabbitTea",
  name: "Rabbit’s Rosemary",
  chinese: "兔子迷迭香饮",
  kcal: "100–120 kcal",
  price: "$3.75",
  img: "css/menu/16.png",
  desc: "Gentle, calming, and quietly elegant. Jasmine tea with fragrant rosemary — graceful and sweet, much like the Rabbit."
},

//Snacks
{
  id: "bunnyMochi",
  name: "Bunny Mochi",
  chinese: "兔子麻薯",
  kcal: "120 kcal per piece",
  price: "$4.00",
  img: "css/menu/17.png",
  desc: "Soft, chewy mochi shaped like little bunnies. Filled with sweet red bean paste — melts in your mouth."
},
{
  id: "snakeCake",
  name: "Serpent Layer Cake",
  chinese: "蛇之千层蛋糕",
  kcal: "320 kcal per slice",
  price: "$5.70",
  img: "css/menu/18.png",
  desc: "A mesmerizing mille crepe cake with endless thin layers — symbolizing wisdom and transformation, just like the Snake."
},
{
  id: "piggyTruffles",
  name: "Piggy Truffles",
  chinese: "小猪巧克力",
  kcal: "180 kcal per piece",
  price: "$3.25",
  img: "css/menu/19.png",
  desc: "Creamy, bite-sized truffles shaped like adorable piglets — sweet, playful, and impossible to resist."
},
{
  id: "oxCheesecake",
  name: "Ox Cheesecake",
  chinese: "牛芝士蛋糕",
  kcal: "420 kcal per slice",
  price: "$6.25",
  img: "css/menu/20.png",
  desc: "Rich, creamy cheesecake with a strong, grounding flavor — perfect for the dependable Ox."
}

];
