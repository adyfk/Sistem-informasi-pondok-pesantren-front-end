import { callAPIs } from "../../../config/network";
import { Payment } from "../../../libraries/api";
// import produce from "immer";

const useRepository = ({ setSantri, setPayment, setLoading, addToast }) => {
  const listPayment = async id => {
    const configs = Payment.getBill({
      id: "RQ.2017.001"
    });
    let response;
    setLoading({ listPayment: true });
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
      setLoading({});
    }
  };

  return {
    listPayment
  };
};

export default useRepository;
