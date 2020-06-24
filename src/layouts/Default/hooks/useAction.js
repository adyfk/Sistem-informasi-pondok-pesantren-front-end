import { useState, createContext, useEffect } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";

export const CtxUserProfile = createContext({});

export default function useAction() {
  const [loading, setLoading] = useState({});
  const [profile, setProfile] = useState({});
  const { addToast } = useToasts();
  const repository = useRepository({
    setProfile,
    addToast
  });
  useEffect(() => {
    if (!window.location.pathname.includes("/login")) {
      repository.getProfile({});
    }
  }, []);
  return {
    loading,
    profile,
    setProfile,
    setLoading,
    repository
  };
}
