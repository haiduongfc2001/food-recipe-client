export const Foods = [];

for (let i = 0; i < 8; i++) {
  Foods.push({
    id: i + 1,
    name: "Food " + (i + 1),
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400",
    cooking_time: "00:10:00",
    rating: 4.0,
  });
}

export const Ingredients = [
  { name: "Gà", type: "checkbox" },
  { name: "Lợn", type: "checkbox" },
  { name: "Bò", type: "checkbox" },
  { name: "Cá", type: "checkbox" },
  { name: "Tôm", type: "checkbox" },
  { name: "Cua", type: "checkbox" },
  { name: "Vịt", type: "checkbox" },
  { name: "Ngan", type: "checkbox" },
].map((ingredient, index) => ({ id: index + 1, ...ingredient }));

export const CookingTime = [
  {
    name: "Dưới 20'",
    type: "radio",
  },
  {
    name: "20' - 40'",
    type: "radio",
  },
  {
    name: "40' - 1h",
    type: "radio",
  },
  {
    name: "1 - 2h",
    type: "radio",
  },
  {
    name: "Trên 2h",
    type: "radio",
  },
].map((time, index) => ({ id: index + 1, ...time }));

export const Ratings = [
  {
    name: "Dưới 1 sao'",
    type: "radio",
  },
  {
    name: "1 - 2 sao'",
    type: "radio",
  },
  {
    name: "2 - 3 sao",
    type: "radio",
  },
  {
    name: "3 -4 sao",
    type: "radio",
  },
  {
    name: "4 - 5 sao",
    type: "radio",
  },
].map((rate, index) => ({ id: index + 1, ...rate }));

export const SortOptions = [
  {
    title: "Mới nhất",
    sort: "desc",
    by: "updated_at",
  },
  {
    title: "Cũ nhất",
    sort: "asc",
    by: "updated_at",
  },
  {
    title: "Đánh giá cao",
    sort: "desc",
    by: "rating",
  },
  {
    title: "Đánh giá thấp",
    sort: "asc",
    by: "rating",
  },
];
