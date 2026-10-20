function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(crt, product, qnt) { 
	//return notImplemented();
	if(qnt == 0)
		throw new RangeError("не принимает нулевое количество");
	if(qnt > product.stock)
		throw new RangeError("не позволяет добавить больше товара, чем есть на складе");
	if(crt.map((prod) => prod.id).includes(product.id))
		crt.find((prod) => prod.id === product.id).quantity += qnt;
	else
		crt.push({...product, quantity: qnt});
	return crt; 
}
function changeQuantity(crt, id, qnt) { 
	return notImplemented();	
}
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
