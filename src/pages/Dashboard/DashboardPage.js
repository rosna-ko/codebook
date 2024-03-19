import { useEffect, useState } from "react";
import { useTitle } from '../../hooks';
import { DashbaordCard } from "./components/DashboardCard"
import { DashbaordEmpty } from "./components/DashboardEmpty"
import { getUserOrders } from "../../services";
import { toast } from "react-toastify";

export const DashbaordPage = () => {
const [orders, serOrders] = useState([]);
useTitle("Dashboard");

    useEffect(() => {
        async function fetchOrders() {
          try {
            const data = await getUserOrders()
            serOrders(data);
          } catch(error) {
            toast.error(error.message, { position: 'bottom-center' });
         }
        }
        fetchOrders();
      }, []);

    return (
      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        </section>

        <section>
            { orders.length && orders.map((order) => (
                <DashbaordCard key={order.id} order={order}/>
            ))}
        </section>

        <section>
            { orders.length === 0 && <DashbaordEmpty/>}
        </section>
      </main>
    )
  }