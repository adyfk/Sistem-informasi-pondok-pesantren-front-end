import { useState, createContext } from "react";
import useRepository from "./useRepository";

export const CtxUser = createContext({});

export default function useAction() {
  const [loading, setLoading] = useState({});
  const repository = useRepository();

  return {
    loading,
    setLoading,
    repository
  };
}
