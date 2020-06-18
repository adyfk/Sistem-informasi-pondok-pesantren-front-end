import { useState, createContext } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";

export const CtxAddress = createContext({
  loadingAddress: {},
  listProvince: [],
  listDorp: [],
  listDistrict: []
});

export default function useAction() {
  const [loadingAddress, setLoading] = useState({});
  const [listProvince, setProvince] = useState([]);
  const [listDorp, setDorp] = useState([]);
  const [listDistrict, setDistrict] = useState([]);

  const { addToast } = useToasts();

  const repository = useRepository({
    listProvince,
    listDorp,
    listDistrict,
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
    repository
  };
}
