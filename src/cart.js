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
	//return notImplemented();
	if(crt.map((prod) => prod.id).includes(id))
		crt.find((prod) => prod.id == id).quantity = qnt;
	else
		return crt;
	if(qnt == 0)
		throw new RangeError('не принимает нулевое количество');
	if(crt.find((prod) => prod.id === id).stock < qnt)
		throw new RangeError('не позволяет указать количество больше остатка');
	return crt; 
}
function removeFromCart(crt, ind) { 
	//return notImplemented();
	const index =  crt.map((prod) => prod.id).indexOf(ind);
	if(index != -1)
		crt.splice(index, 1);
	return crt;
}
function calculateCartSubtotal(crt) { 
	//return notImplemented();
	const init = 0;
	return crt.reduce((accum, current) => accum + current.price*current.quantity, init);	
}
function calculateOrderTotal(crt, promo) { 
	//return notImplemented();
	const init = 0;
	const sbttl = crt.reduce((accum, current) => accum + current.price*current.quantity, init);
	const dscnt = (promo == "SAVE10" && sbttl >= 20000) ? sbttl*0.1 : 0;
	const dlvr = sbttl < 50000 ? 30000 : 0;
	const ttl = sbttl - dscnt + dlvr;	
	return {subtotal: sbttl, discount: dscnt, delivery: dlvr, total: ttl};
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
