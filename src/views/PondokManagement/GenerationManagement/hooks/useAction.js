import { useState, createContext, useEffect } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";

export const CtxGenerationManagement = createContext({
  loading: {},
  generation: {},
  generationDetail: []
});

export default function useAction() {
  const [loading, setLoading] = useState({});
  const [generation, setGeneration] = useState({});
  const [generationDetail, setGenerationDetail] = useState([]);
  const useEdit = useState(false);
  const { addToast } = useToasts();
  const repository = useRepository({
    generation,
    generationDetail,
    useEdit,
    setLoading,
    setGeneration,
    addToast,
    setGenerationDetail
  });

  useEffect(() => {
    repository.listGeneration();
  }, []);

  const setEmptyGenerationDetail = () => {
    setGenerationDetail(prev => [...prev, {}]);
    useEdit[1]("new");
  };
  const removeEmptyGenerationDetail = () => {
    setGenerationDetail(prev => [...prev].filter(item => item.id));
  };

  const saveFormDetailGeneration = ({ id, index }) => params => {
    if (useEdit[0] === "new") {
      repository.createGenerationDeatail({ index, params });
    } else {
      repository.updateGenerationDetail({ id, params });
    }
  };

  const deleteGenerationDetail = ({ id }) => () => {
    repository.deleteGenerationDeatail({ id });
  };

  return {
    loading,
    generation,
    repository,
    useEdit,
    generationDetail,
    setLoading,
    setGeneration,
    setEmptyGenerationDetail,
    removeEmptyGenerationDetail,
    saveFormDetailGeneration,
    deleteGenerationDetail
  };
}
