import { useState } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";

export default function useAction({ setDocument }) {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState({});
  const repository = useRepository({
    setLoading,
    setDocument,
    addToast
  });

  const handleUpload = ({ name }) => async e => {
    await repository.uploadFile({ name, file: e.target.files[0] });
  };
  return { loading, handleUpload };
}
