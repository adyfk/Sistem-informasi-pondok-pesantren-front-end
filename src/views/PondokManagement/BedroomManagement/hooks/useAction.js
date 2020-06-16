import { useState, createContext, useEffect } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";

export const CtxBedroom = createContext({
  loading: {},
  bedroom: []
});

export default function useAction() {
  const [loading, setLoading] = useState({});
  const [bedroom, setBedroom] = useState([]);
  const useEdit = useState(false);
  const { addToast } = useToasts();
  const repository = useRepository({
    bedroom,
    useEdit,
    setLoading,
    addToast,
    setBedroom
  });

  useEffect(() => {
    repository.listBedroom();
  }, []);

  const setEmptyBedroom = () => {
    setBedroom(prev => [...prev, {}]);
    useEdit[1]("new");
  };
  const removeEmptyBedroom = () => {
    setBedroom(prev => [...prev].filter(item => item.id));
  };

  const saveFormBedroom = ({ id, index }) => params => {
    if (useEdit[0] === "new") {
      repository.createBedroom({ index, params });
    } else {
      repository.updateBedroom({ id, params });
    }
  };

  return {
    loading,
    repository,
    useEdit,
    bedroom,
    setLoading,
    setEmptyBedroom,
    removeEmptyBedroom,
    saveFormBedroom
  };
}
