import { useState, createContext, useEffect } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";
export const CtxPaymentManagement = createContext({
  santri: {},
  payment: {},
  detail: {
    list: []
  }
});

export default function useAction() {
  const [loading, setLoading] = useState({
    listPayment: "empty"
  });
  const [search, setSearch] = useState("");
  const [santri, setSantri] = useState({});
  const [payment, setPayment] = useState([]);
  const [dialog, setDialog] = useState({});
  const [detail, setDetail] = useState({
    list: []
  });

  const { addToast } = useToasts();
  const repository = useRepository({
    setPayment,
    setSantri,
    addToast,
    setLoading: value => setLoading(prev => ({ ...prev, ...value })),
    setDetail
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
  const onDetail = index => () => {
    setDetail({
      index,
      list: []
    });
    repository.getDetailBill({ paymentId: payment[index].id });
    setDialog({
      detail: true
    });
  };

  const onBayar = paid => {
    return repository.payBill({
      id: santri.id,
      paymentId: payment[detail.index].id,
      paid
    });
  };
  return {
    loading,
    santri,
    payment,
    search,
    detail,
    dialog,
    onBayar,
    setSearch,
    onDetail,
    setLoading,
    setDialog
  };
}
