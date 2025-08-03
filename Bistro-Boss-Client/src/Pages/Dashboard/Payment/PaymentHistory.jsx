import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/Shared/SectionTitle";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();

  const { data: payment = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <div>
        <SectionTitle
          title={"---At a Glance!---"}
          heading={"PAYMENT HISTORY"}
        ></SectionTitle>
      </div>
      <div className="w-[900px] h-[970px] bg-gray-100 ml-10 my-10">
        <h1 className="uppercase text-2xl font-semibold p-4">
          total payments: {payment?.length}
        </h1>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Price</th>
                <th>Transaction Id</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.price}</td>
                  <td>{item.transactionId}</td>
                  <td>{item.date}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
