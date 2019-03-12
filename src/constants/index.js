export const SECTIONS = ['Men', 'Women', 'Kids', 'Baby'];

export const TYPES = {
  Men: ['Shirts', 'Jeans', 'Pants', 'Jackets & Coats'],
  Women: ['Dresses', 'Knitwear', 'Tops', 'Skirts'],
  Kids: ['Tops', 'Pants', 'Jackets & Coats', 'Accessories'],
  Baby: ['Special', 'Newborn', 'Toddler', 'Socks & Accessories'],
};

export const ROUTES = {
  home: '/home',
  register: '/register',
  logIn: '/login',
  products: '/products/:section/:type',
  product: '/product/:id',
};

export const SUCCESS = 'SUCCESS';

export const FAILURE = 'FAILURE';
