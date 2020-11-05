const products = [
  //default dample products
  {
   
    name: "Airpods Wireless Bluetooth Headphones",
    image: "/images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    
    name: "iPhone 11 Pro 256GB Memory",
    image: "/images/phone.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    
    name: "Cannon EOS 80D DSLR Camera",
    image: "/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    
    name: "Sony Playstation 4 Pro White Version",
    image: "/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
   
    name: "Logitech G-Series Gaming Mouse",
    image: "/images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 8,
    rating: 3.5,
    numReviews: 10,
  },
  {
   
    name: "Amazon Echo Dot 3rd Generation",
    image: "/images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  //books
  {
   
    name: "The Power of Your Subconscious Mind",
    image: "/images/book1.jpg",
    description:
      "The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION) ",
    author: "Joseph Murphy",
    category: "Books",
    price: 999.00,
    countInStock: 10,
    rating: 3.5,
    numReviews: 12,
  },
  {
    
    name: "The Diary of A Young Girl",
    image: "/images/book2.jpg",
    description:
      "Anne Frank's remarkable diary is a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit",
    author: "Annie Frank",
    category: "Books",
    price: 150.00,
    countInStock: 7,
    rating: 4.4,
    numReviews: 8,
  },
  {
    
    name: "The Very Best of Panchatantra Stories  ",
    image: "/images/book3.jpg",
    description:
      "The Panchatantra is the oldest collection of Indian fables. The stories of the Panchatantra teach us: how to understand people. How to choose trustworthy friends. How to solve problems through tact and wisdom. How to live in peace and harmony. Each story has a moral",
    author: "Om Books Editorial Team",
    category: "Books",
    price: 331.00,
    countInStock: 5,
    rating: 2.0,
    numReviews: 12,
  },
  {
    
    name: "Treasure Trove of Arabian Nights",
    image: "/images/book4.jpg",
    description:
      "The Arabian Nights is a collection of middle Eastern and South Asian folktales compiled during the Islamic Golden age. Read about the three children who set out to find the magical singing tree, talking bird and Golden water.",
    author: "Om Books Editorial Team",
    category: "Books",
    price: 192.00,
    countInStock: 11,
    rating: 4.4,
    numReviews: 12,
  },
  {
   
    name: "Encyclopedia: Space (Space Encyclopedia)",
    image: "/images/book5.jpg",
    description:
      "This book is packed with interesting facts about the incredible milkyway galaxy, the brightest stars, the solar system, the dwarf planets and much more! This book is a boon for all budding astronauts and space wizards!.",
    author: "Om Books Editorial Team",
    category: "Books",
    price: 99.00,
    countInStock: 8,
    rating: 4.4,
    numReviews: 10,
  },
  {
   
    name: "The Treasury of the Encyclopaedia Britannica",
    image: "/images/book6.jpg",
    description:
      "A compendium of articles from the archives of The Encyclopaedia Britannica traces the growth of knowledge in different fields and features writings by brilliant contributors on their subjects of expertise. 75,000 first printing. $75,000 ad/promo. BOMC.",
    author: "Clifton Fadiman",
    category: "Books",
    price:  1885.00,
    countInStock: 0,
    rating: 4.3,
    numReviews: 12,
  },
  {
   
    name: "The Discovery of India",
    image: "/images/book7.jpg",
    description:
      "Jawaharlal Nehru wrote the book ‘The Discovery of India’, during his imprisonment at Ahmednagar fort for participating in the Quit India Movement (1942 – 1946). The book was written during Nehru’s four years of confinement to solitude in prison and is his way of paying an homage to his beloved country and its rich culture.",
    author: "Jawaharlal Nehru",
    category: "Books",
    price:  419.00,
    countInStock: 0,
    rating: 4.5,
    numReviews: 12,
  },
  //electronics
  {
   
    name: "boAt Airdopes 121v2 TWS Earbuds",
    image: "/images/headphones.jpg",
    description:
      "boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0, Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design(Active Black)",
    brand: "boAt",
    category: "Electronics",
    price: 999.00,
    countInStock: 10,
    rating: 3.5,
    numReviews: 12,
  },
  {
    
    name: "Samsung Galaxy Tab A7",
    image: "/images/tab1.jpg",
    description:
      "Samsung Galaxy Tab A7 (10.4 inch, RAM 3 GB, ROM 32 GB, Wi-Fi-only), Grey",
    brand: "Samsung",
    category: "Electronics",
    price: 16999.00,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    
    name: "Lenovo Tab M10 ",
    image: "/images/tab2.jpg",
    description:
      "Lenovo Tab M10 HD Tablet (10.1-inch, 2GB, 32GB, Wi-Fi + 4G LTE, Volte Calling), Slate Black",
    brand: "Lenovo",
    category: "Electronics",
    price: 13350.00,
    countInStock: 5,
    rating: 3.8,
    numReviews: 12,
  },
  {
    
    name: "HONOR Pad 5 8",
    image: "/images/tab3.jpg",
    description:
      "HONOR Pad 5 8 (8-inch, 4+64GB, FHD Display, Wi-Fi + 4G LTE, Voice Calling, Dual Stereo Speakers, Dolby Atmos Surround Sound, GPU Turbo 2.0, Face Unlocking, Glacial Blue)",
    brand: "Honor",
    category: "Electronics",
    price: 14999.00,
    countInStock: 11,
    rating: 4.4,
    numReviews: 12,
  },
  {
   
    name: "Panasonic 1.5 Ton AC ",
    image: "/images/ac1.jpg",
    description:
      "Panasonic 1.5 Ton 5 Star Wi-Fi Twin Cool Inverter Split AC (Copper, PM 2.5 Filter, 2020 Model, CS/CU-NU18WKYW White)",
    brand: "Panasonic",
    category: "Electronics",
    price: 39990.00,
    countInStock: 8,
    rating: 4.4,
    numReviews: 10,
  },
  {
   
    name: "TCL 138.78 cm Smart LED TV",
    image: "/images/tv1.jpg",
    description:
      "TCL 138.78 cm (55 inches)  AI 4K UHD Certified Android Smart LED TV 55P8 (Black) (2019 Model)",
    brand: "TCL",
    category: "Electronics",
    price:  34999.00,
    countInStock: 0,
    rating: 4.1,
    numReviews: 12,
  },
  {
   
    name: "Mi TV 4A PRO Android LED TV",
    image: "/images/tv2.jpg",
    description:
      "Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver",
    brand: "MI",
    category: "Electronics",
    price: 13499.00,
    countInStock: 10,
    rating: 4.1,
    numReviews: 12,
  },

  {
   
    name: "GIKSO 100 Maths Puzzles Book",
    image: "/images/toy1.jpg",
    description:
      "GIKSO 100 Maths Puzzles Book - Brain Boosting Mathematical Activities for Age 7+ Years Old Kids | Game Book (English)",
    brand: "GIKSO",
    category: "Toys",
    price: 999.00,
    countInStock: 10,
    rating: 3.5,
    numReviews: 12,
  },
  //Toys
  {
    
    name: "Storio Cars 1:32 Diecast Metal Pullback Toy car",
    image: "/images/toy2.jpg",
    description:
      "Storio Cars 1:32 Diecast Metal Pullback Toy car for Kids Best Gifts Toys for Kids Boys - Black. Made of Fine Metal : The material used in this kids car is of top quality and is used to give it absolutely clear finish hence it's best toys for boys.",
    brand: "Storio",
    category: "Toys",
    price: 584.00,
    countInStock: 7,
    rating: 4.2,
    numReviews: 8,
  },
  {
    
    name: "Zephyr Metal Mechanix - 3",
    image: "/images/toy3.jpg",
    description:
      "Zephyr Metal Mechanix - 3, Construction Toy,Building Blocks,Educational Toys,for 6+ yrs Boys and Girls. Many new parts are incorporated in this set including flexible steel parts to make just that little bit extra special.",
    brand: "Zephyr",
    category: "Toys",
    price: 896.00,
    countInStock: 5,
    rating: 4.4,
    numReviews: 12,
  },
  {
    
    name: "CocoMoco Kids World Box Activity Kit Geography Game",
    image: "/images/toy4.jpg",
    description:
      "CocoMoco Kids World Box Activity Kit Geography Game - Includes World Map for Kids, Passport, Scrapbook, Country Trump Card Game, Educational Learning STEM Toy for Age 5-12 Year Boys and Girls. Inspire your young explorer to learn about the world with this perfect gift and the best birthday gift idea for kids or giveaway as birthday return gifts. Learn through Play!",
    brand: "CocoMoco",
    category: "Toys",
    price: 759.00,
    countInStock: 11,
    rating: 4.1,
    numReviews: 12,
  },
  {
   
    name: "Cable World Dancing Robot Toy",
    image: "/images/toy5.jpg",
    description:
      "Cable World Robot is made of quality material, safe, simple and easy to use. Absolutely Safe for your Kids as it is Non-Toxic and goes through product safety certification inspection... buy once and enjoy for years!",
    brand: "Cable World",
    category: "Toys",
    price: 490.00,
    countInStock: 0,
    rating: 4.4,
    numReviews: 10,
  },  
  
];

export default products;
