import { useState, createContext, useEffect } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";
// const initParams = {
//   page: 1,
//   size: 10
// };

const defaultContext = {
  loading: false,
  generation: {
    loading: false,
    data: {}
  }
};

export const CtxGenerationManagement = createContext(defaultContext);

export default function useAction() {
  const [loading, setLoading] = useState(defaultContext.loading);
  const [generation, setGeneration] = useState(defaultContext.generation);
  const { addToast } = useToasts();
  const repository = useRepository({
    setLoading,
    setGeneration,
    addToast
  });

  const loadDataGenertion = () => {
    repository.listGeneration();
  };

  useEffect(() => {
    loadDataGenertion();
  }, []);

  return {
    loading,
    generation,
    setLoading,
    setGeneration
  };
}
