import { useLocation } from "react-router-dom";
import { useTitle } from '../../hooks';
import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";

export const OrderPage = () => {
const { state } = useLocation();
useTitle("Order Summary");

    return (
      <main>
        { state.status ? <OrderSuccess order={state.data}/> : <OrderFail/>}
      </main>
    )
  }