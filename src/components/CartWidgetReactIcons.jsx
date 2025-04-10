import { Badge } from "react-bootstrap"
import { IoMdCart } from "react-icons/io";

const CartWidgetReactIcons = () => {
    return(
        <div>
            <Badge bg="danger">4</Badge>
            <IoMdCart fontSize={'2.5rem'} />
        </div>
    )
}
export default CartWidgetReactIcons