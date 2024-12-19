import { useContext } from "react"
import { ShoppingCartContext } from "../context/shoppingCartContext"

const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext)
}

export default useShoppingCartContext;
