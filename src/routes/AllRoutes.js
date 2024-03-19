import { Route, Routes } from "react-router-dom"
import { CartPage, DashbaordPage, HomePage, Login, OrderPage, PageNotFound, ProductDetails, ProductList, Register } from "../pages"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const AllRoutes = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/products/:id" element={<ProductDetails/>}/>

                <Route path="/cart" element={<ProtectedRoutes><CartPage/></ProtectedRoutes>}/>
                <Route path="/order" element={<ProtectedRoutes><OrderPage/></ProtectedRoutes>}/>
                <Route path="/dashboard" element={<ProtectedRoutes><DashbaordPage/></ProtectedRoutes>}/>

                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>

                <Route path="*" element={<PageNotFound/>}/>

            </Routes>
        </>
    )
}