import { useState, createContext, useEffect } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";

export const CtxClass = createContext({
  loading: {},
  classes: []
});

export default function useAction() {
  const [loading, setLoading] = useState({});
  const [classes, setClass] = useState([]);
  const useEdit = useState(false);
  const { addToast } = useToasts();
  const repository = useRepository({
    classes,
    useEdit,
    setLoading,
    addToast,
    setClass
  });

  useEffect(() => {
    repository.listClass();
  }, []);

  const setEmptyClass = () => {
    setClass(prev => [...prev, {}]);
    useEdit[1]("new");
  };
  const removeEmptyClass = () => {
    setClass(prev => [...prev].filter(item => item.id));
  };

  const saveFormClass = ({ id, index }) => params => {
    if (useEdit[0] === "new") {
      repository.createClass({ index, params });
    } else {
      repository.updateClass({ id, params });
    }
  };

  return {
    loading,
    repository,
    useEdit,
    classes,
    setLoading,
    setEmptyClass,
    removeEmptyClass,
    saveFormClass
  };
}
