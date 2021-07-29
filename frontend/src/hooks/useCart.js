import { useCookies } from "react-cookie";
export default function useCart() {
	const [cookies, setCookie] = useCookies(["Cart"]);
	const getCart = () => {
		return cookies["Cart"];
	};

	const addProduct = (itemId, itemObj) => {
		if (!itemObj.quantity > 0) {
			return "No items to add";
		}
		if (!cookies["Cart"]) {
			setCookie("Cart", { [itemId]: itemObj }, { path: "/" });
			return cookies["Cart"];
		} else {
			if (!cookies["Cart"][itemId]) {
				let newCart = cookies["Cart"];
				newCart[itemId] = itemObj;
				setCookie("Cart", newCart, { path: "/" });
				return cookies["Cart"];
			} else {
				let newCart = cookies["Cart"];
				newCart[itemId].quantity = Number(newCart[itemId].quantity) + Number(itemObj.quantity);
				setCookie("Cart", newCart, { path: "/" });
				return cookies["Cart"];
			}
		}
	};

  const editProduct = (itemId, quantity) => {
    let newCart = cookies["Cart"];
    quantity = Number(quantity)
    if (quantity < 0) {
      return ('Invalid Value');
    } else if (quantity === 0) {
			delete newCart[itemId];
			setCookie("Cart", newCart, { path: "/" });
			return cookies["Cart"];
    } else {
      newCart[itemId].quantity = quantity;
      setCookie("Cart", newCart, { path: "/" });
			return cookies["Cart"];
    }
  }

	const removeProduct = (itemId, itemObj) => {
		let newCart = cookies["Cart"];
		if ((newCart[itemId].quantity - itemObj.quantity) < 1) {
			delete newCart[itemId];
			setCookie("Cart", newCart, { path: "/" });
			return cookies["Cart"];
		} else {
      newCart[itemId].quantity = newCart[itemId].quantity - itemObj.quantity;
      setCookie("Cart", newCart, { path: "/" });
      return cookies["Cart"];
    }
	};

	const removeAllProducts = () => {
		setCookie("Cart", {}, { path: "/" });
	};

	return {
		getCart,
		addProduct,
    editProduct,
		removeProduct,
		removeAllProducts,
	};
}
