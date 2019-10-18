const getUnauthenticatedCartProducts = () => (localStorage.getItem('OS_UNAUTHENTICATED_USER_CART') ? JSON.parse(localStorage.getItem('OS_UNAUTHENTICATED_USER_CART')) : []);

export default getUnauthenticatedCartProducts;
