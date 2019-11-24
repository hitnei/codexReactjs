import * as types from '../constants/ActionTypes'

var initialState = [
  {
    id: 1,
    status: 30,
    name: "Floral Jackquard Pullover",
    price: 120.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-1.jpg",
    category: 1,
    isCart: false,
    quatity: 0,
    rate: 3,
  },
  {
    id: 2,
    status: 50,
    name: "Floral Pullover",
    price: 150.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-2.webp",
    category: 1,
    isCart: false,
    quatity: 0,
    rate: 2,
  },
  {
    id: 3,
    status: 10,
    name: "Floral Jackquard Pullover",
    price: 130.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-3.webp",
    category: 2,
    isCart: false,
    quatity: 0,
    rate: 5,
  },
  {
    id: 4,
    status: 30,
    name: "Floral Jackquard Pullover",
    price: 120.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-4.webp",
    category: 3,
    isCart: false,
    quatity: 0,
    rate: 0,
  },
  {
    id: 5,
    status: 30,
    name: "Floral Jackquard Pullover",
    price: 120.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-5.webp",
    category: 4,
    isCart: false,
    quatity: 0,
    rate: 2,
  },
  {
    id: 6,
    status: 30,
    name: "Floral Jackquard Pullover",
    price: 120.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-1.jpg",
    category: 1,
    isCart: false,
    quatity: 0,
    rate: 4,
  },
  {
    id: 7,
    status: 50,
    name: "Floral Pullover",
    price: 150.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-2.webp",
    category: 1,
    isCart: false,
    quatity: 0,
    rate: 0,
  },
  {
    id: 8,
    status: 10,
    name: "Floral Jackquard Pullover",
    price: 130.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-3.webp",
    category: 2,
    isCart: false,
    quatity: 0,
    rate: 0,
  },
  {
    id: 9,
    status: 30,
    name: "Floral Jackquard Pullover",
    price: 120.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-4.webp",
    category: 3,
    isCart: false,
    quatity: 0,
    rate: 3,
  },
  {
    id: 10,
    status: 30,
    name: "Floral Jackquard Pullover",
    price: 120.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-5.webp",
    category: 4,
    isCart: false,
    quatity: 0,
    rate: 2,
  },
  {
    id: 11,
    status: 30,
    name: "Floral Jackquard Pullover",
    price: 120.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-1.jpg",
    category: 1,
    isCart: false,
    quatity: 0,
    rate: 3,
  },
  {
    id: 12,
    status: 50,
    name: "Floral Pullover",
    price: 150.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-2.webp",
    category: 1,
    isCart: false,
    quatity: 0,
    rate: 2,
  },
  {
    id: 13,
    status: 10,
    name: "Floral Jackquard Pullover",
    price: 130.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-3.webp",
    category: 2,
    isCart: false,
    quatity: 0,
    rate: 5,
  },
  {
    id: 14,
    status: 30,
    name: "Floral Jackquard Pullover",
    price: 120.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-4.webp",
    category: 3,
    isCart: false,
    quatity: 0,
    rate: 0,
  },
  {
    id: 15,
    status: 30,
    name: "Floral Jackquard Pullover",
    price: 120.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-5.webp",
    category: 4,
    isCart: false,
    quatity: 0,
    rate: 2,
  },
  {
    id: 16,
    status: 30,
    name: "Floral Jackquard Pullover",
    price: 120.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-1.jpg",
    category: 1,
    isCart: false,
    quatity: 0,
    rate: 4,
  },
  {
    id: 17,
    status: 50,
    name: "Floral Pullover",
    price: 150.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-2.webp",
    category: 1,
    isCart: false,
    quatity: 0,
    rate: 0,
  },
  {
    id: 18,
    status: 10,
    name: "Floral Jackquard Pullover",
    price: 130.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-3.webp",
    category: 2,
    isCart: false,
    quatity: 0,
    rate: 0,
  },
  {
    id: 19,
    status: 30,
    name: "Floral Jackquard Pullover",
    price: 120.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-4.webp",
    category: 3,
    isCart: false,
    quatity: 0,
    rate: 3,
  },
  {
    id: 20,
    status: 30,
    name: "Floral Jackquard Pullover",
    price: 120.00,
    link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-5.webp",
    category: 4,
    isCart: false,
    quatity: 0,
    rate: 2,
  },
]

var reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return [...state]
    case types.CHANGE_LIST:
      return [...action.list]
    default:
      return state
  }
}

export default reducer