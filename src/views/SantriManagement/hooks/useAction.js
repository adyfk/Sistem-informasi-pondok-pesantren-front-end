import { useState, createContext, useEffect } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";
import { queryParams } from "../../../utils/api";
export const CtxSantriManagement = createContext({
  loading: {},
  santris: {
    docs: [],
    pages: 1,
    total: 1
  }
});

export default function useAction() {
  const [loading, setLoading] = useState({});
  const [search, setSearch] = useState("");
  const [santris, setSantris] = useState({
    docs: [],
    pages: 1
  });
  const { addToast } = useToasts();
  const repository = useRepository({
    santris,
    setSantris,
    addToast,
    setLoading
  });

  useEffect(() => {
    getListSantri();
  }, []);

  useEffect(() => {
    if (santris.pages === 1) {
      getListSantri();
    } else {
      setSantris(prev => ({ ...prev, pages: 1 }));
    }
  }, [search]);

  useEffect(() => {
    getListSantri();
  }, [santris.pages]);

  const getListSantri = () => {
    const params = queryParams({
      page: santris.pages,
      search
    });
    repository.listSantri(params);
  };

  return {
    loading,
    santris,
    search,
    setSearch,
    setLoading
  };
}
