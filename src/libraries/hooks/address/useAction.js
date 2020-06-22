import { useState, createContext } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";

export const CtxAddress = createContext({
  loadingAddress: {},
  listProvince: [],
  listDorp: [],
  listRegency: [],
  listDistrict: []
});

export default function useAction() {
  const [loadingAddress, setLoading] = useState({});
  const [listProvince, setProvince] = useState([]);
  const [listDorp, setDorp] = useState([]);
  const [listRegency, setRegency] = useState([]);
  const [listDistrict, setDistrict] = useState([]);

  const { addToast } = useToasts();

  const repository = useRepository({
    listProvince,
    listDorp,
    listRegency,
    listDistrict,
    setRegency,
    setProvince,
    setDorp,
    setDistrict,
    setLoading,
    addToast
  });

  return {
    loadingAddress,
    listDistrict,
    listDorp,
    listProvince,
    listRegency,
    repository
  };
}
