import { useState, createContext, useEffect } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";
// import { queryParams } from "../../../utils/api";
export const CtxAddSantriManagement = createContext({ payload: {} });

export default function useAction() {
  const [loading, setLoading] = useState({});
  const [payload, setPayload] = useState({});
  const { addToast } = useToasts();
  const repository = useRepository({
    payload,
    setPayload,
    addToast,
    setLoading
  });

  useEffect(() => {}, []);

  return {
    loading,
    payload,
    setPayload,
    setLoading,
    repository
  };
}
