export default function formatCart(cart) {
  const sizeFormat = (size) => {
	let fixedSize;
	switch (size) {
		case "fiveg":
			fixedSize = "5 Grams of ";
			break;
		case "twentyg":
			fixedSize = "20 Grams of ";
			break;
		case "fiftyg":
			fixedSize = "50 Grams of ";
			break;
		case "hundredg":
			fixedSize = "100 Grams of ";
			break;
		case "fivehundg":
			fixedSize = "500 Grams of ";
			break;
		case "thousandg":
			fixedSize = "1000 Grams of ";
			break;
		default:
			fixedSize = "N/A";
	}
	return fixedSize;
};
  let newCart = []
  for (let item in cart) {
    let newItem = {}
    if(cart[item].fiveg) {

    }
  }
}