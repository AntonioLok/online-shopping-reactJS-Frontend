export const SECTIONS = ['Men', 'Women', 'Boys', 'Girls'];

export const TYPES = {
  Men: ['Shirts', 'Jeans', 'Pants', 'Jackets & Coats'],
  Women: ['Dresses', 'Knitwear', 'Tops', 'Skirts'],
  Boys: ['Shirts', 'Jeans', 'Pants', 'Shoes'],
  Girls: ['Tops & T-shirts', 'Jeans', 'Jumpsuits', 'Shorts'],
};

export const ROUTES = {
  home: '/home',
  register: '/register',
  login: '/login',
  products: '/products/:section/:type',
  product: '/product/:id',
  cart: '/cart',
};

export const HTTP_STATUS_CODE = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500,
};

export const FORM_STATUS_RESPONSE_MESSAGE = {
  [HTTP_STATUS_CODE.OK]: 'Form submission was successful.',
  [HTTP_STATUS_CODE.BAD_REQUEST]: 'One or more fields appears to be invalid. Please check the form and try again.',
  [HTTP_STATUS_CODE.UNAUTHORIZED]: 'Unauthorized.',
  [HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: 'An unknown error has occurred. Please try again.',
};

export const FALLBACK_ERROR_MESSAGE_FORM = 'An unknown error has occurred. Please try again.';

export const SUCCESS = 'SUCCESS';

export const FAILURE = 'FAILURE';

export const FIELDS_TYPE = {
  TEXT_INPUT: 'TEXT_INPUT',
  SELECT_INPUT: 'SELECT_INPUT',
};

export const ORDER_TOTAL_ITEMS_LABELS = {
  ORDER_VALUE: 'ORDER VALUE',
  DELIVERY: 'DELIVERY',
  TOTAL: 'TOTAL',
};

export const DELIVERY_PRICE = 10;
