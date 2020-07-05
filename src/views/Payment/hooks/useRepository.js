import { callAPIs } from "../../../config/network";
import { Payment } from "../../../libraries/api";
// import produce from "immer";

const useRepository = ({
  setSantri,
  setPayment,
  setLoading,
  addToast,
  setDetail
}) => {
  const listPayment = id => {
    const configs = Payment.getBill({
      id
    });
    let response;
    setLoading({ listPayment: "loading" });
    setTimeout(async () => {
      try {
        response = await callAPIs(configs);
        const { data } = response;
        setSantri({ name: data[0].name, id: data[0].id });
        setPayment(data[0].Payments);
      } catch (error) {
        setSantri({});
        setPayment([]);
        addToast(error?.message || "Gagal Mengambil data santri", {
          appearance: "error"
        });
      } finally {
        setLoading({ listPayment: "done" });
      }
    }, 3000);
  };

  const getDetailBill = async ({ paymentId }) => {
    const configs = Payment.getDetailBill(paymentId);
    try {
      setLoading({
        detail: true
      });
      const { data } = await callAPIs(configs);
      setDetail(prev => ({ ...prev, list: data }));
    } catch (error) {
    } finally {
      setLoading({
        detail: false
      });
    }
  };

  const payBill = ({ paymentId, paid, id }) => {
    return new Promise(async res => {
      try {
        let response;

        await callAPIs(Payment.payBill({ paymentId, paid }));

        response = await callAPIs(Payment.getBill({ id }));
        let { data } = response;
        setSantri({ name: data[0].name, id: data[0].id });
        setPayment(data[0].Payments);

        response = await callAPIs(Payment.getDetailBill(paymentId));
        setDetail(prev => ({ ...prev, list: response.data }));
      } catch (error) {
      } finally {
        res(true);
      }
    });
  };

  return {
    listPayment,
    getDetailBill,
    payBill
  };
};

export default useRepository;
