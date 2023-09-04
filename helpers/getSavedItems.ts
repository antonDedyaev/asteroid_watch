import IAsteroid from 'models/IAsteroid';

const getSavedAsteroids = (): IAsteroid[] => {
    const cartItems = localStorage.getItem("cartItems");
	return cartItems && JSON.parse(cartItems);
};

export default getSavedAsteroids;