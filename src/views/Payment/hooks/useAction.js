import { useState, createContext, useEffect } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";
export const CtxPaymentManagement = createContext({
  santri: {},
  payment: {}
});

export default function useAction() {
  const [loading, setLoading] = useState({
    listPayment: "empty"
  });
  const [search, setSearch] = useState("");
  const [santri, setSantri] = useState({});
  const [payment, setPayment] = useState([]);
  const { addToast } = useToasts();
  const repository = useRepository({
    setPayment,
    setSantri,
    addToast,
    setLoading
  });

  useEffect(() => {
    if (search.length === 11) {
      repository.listPayment(search);
    } else if (search.length === 0) {
      setLoading({ listPayment: "empty" });
      setSantri({});
      setPayment([]);
    }
  }, [search]);

  return {
    loading,
    santri,
    payment,
    search,
    setSearch,
    setLoading
  };
}
