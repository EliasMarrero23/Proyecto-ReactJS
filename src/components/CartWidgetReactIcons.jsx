import { useContext } from "react"
import { Badge } from "react-bootstrap"
import { IoMdCart } from "react-icons/io"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"

const CartWidgetReactIcons = () => {
    const {cartQuantity}= useContext(CartContext);

    return(
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
            <IoMdCart fontSize={'2.5rem'} />
        </Link>
    )
}
export default CartWidgetReactIcons