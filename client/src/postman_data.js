//UPDATE clothes
//SET picture = 'https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', materials = 'cotton'
//WHERE id = 1;
//UPDATE clothes
//SET picture = 'https://images.unsplash.com/photo-1552558636-f6a8f071c2b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', materials = 'linen', price = 120
//WHERE id = 3;

export default [
  {
    id: 1000,
    picture:
      "https://images.unsplash.com/photo-1590674752807-05e0ca142f01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    extra_pic: "",
    closet_section: "home",
    date_purchase: "2013-02-02",
    price: 100,
    shop: "Mercade del Ferrocarril",
    brand: "Ecola",
    season: "winter",
    new_or_not: 1,
    ready_to_use: 0,
    materials: "wool",
    wash_sched: "yearly",
    wash_info: "handwash",
    feeling: 4,
    upgrade: 1,
    notes: "my beautiful undyed portuguese wool blanket",
  },

  {
    id: 2000,
    picture:
      "https://images.unsplash.com/photo-1615599521184-e8796c4ca465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    extra_pic: "",
    closet_section: "home",
    date_purchase: "2005-02-02",
    price: 35,
    shop: "Zara Home",
    brand: "Zara Home",
    season: "spring",
    new_or_not: 1,
    ready_to_use: 0,
    materials: "linen",
    wash_sched: "weekly",
    wash_info: "cold",
    feeling: 2,
    upgrade: 1,
    notes: "gray duvet cover. It's a bit too big for the duvet.",
  },
  {
    id: 3000,
    picture:
      "https://images.unsplash.com/photo-1598535746036-87d13382f6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGlsbG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    extra_pic: "",
    closet_section: "home",
    date_purchase: "2015-02-02",
    price: 15,
    shop: "Ikea",
    brand: "Ikea",
    season: "all",
    new_or_not: 0,
    ready_to_use: 0,
    materials: "cotton",
    wash_sched: "weekly",
    wash_info: "60 degrees",
    feeling: 3,
    upgrade: 1,
    notes: "basic white sheets. ",
  },
  {
    id: 4000,
    picture:
      "https://images.unsplash.com/photo-1571189416642-9d145805cfd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    extra_pic: "",
    closet_section: "home",
    date_purchase: "2016-02-02",
    price: 120,
    shop: "Ikea",
    brand: "Ikea",
    season: "all",
    new_or_not: 0,
    ready_to_use: 0,
    materials: "polyester blend",
    wash_sched: "yearly",
    wash_info: "machine wash 40",
    feeling: 2,
    upgrade: 0,
    notes: "couch cover, getting a little deformed and tired.",
  },
  {
    id: 5000,
    picture: "made to be deleted",
    extra_pic: "let us be hopeful",
    closet_section: "other",
    date_purchase: "2001-02-02",
    price: 3,
    shop: "street market",
    brand: "Pepita",
    season: "spring",
    new_or_not: 1,
    ready_to_use: 0,
    materials: "wool",
    wash_sched: "monthly",
    wash_info: "handwash",
    feeling: 3,
    upgrade: 1,
    notes: "trying delete",
  },
];

// [
//   //end of array
//   //BOOKS
//   //sql syntax error :(
//   {
//     picture: "fotolibro",
//     extra_pic: "extrafotolibro",
//     genre: "poetry",
//     date_purchase: "1999-12-12",
//     price: "12",
//     shop: "Casa del Libro",
//     publisher: "Anagrama",
//     new_or_not: 0,
//     read_or_not: 0,
//     title: "Todo es inventado",
//     author: "Perico de los Palotes",
//     date_publish: "1950-12-12",
//     more_from_author: 0,
//     feeling: 3,
//     upgrade: 1,
//     notes: "esto va lento",
//   },
// ];

// [
//   {
//     "hanging clothes":
//       "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

//     "colorful blakets":
//       "https://images.unsplash.com/photo-1561578428-5d58d0d965ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxhbmtldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//   },
// ];
// //array for cgrid
