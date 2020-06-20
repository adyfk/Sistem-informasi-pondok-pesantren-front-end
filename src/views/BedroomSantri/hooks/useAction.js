import { useState, createContext, useEffect } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";

export const CtxClass = createContext({
  loading: {},
  bedroom: {},
  studentBedroom: []
});

export default function useAction() {
  const [loading, setLoading] = useState({});
  const [studentBedroom, setStudentBedroom] = useState([]);
  const [bedroom, setBedroom] = useState({});
  const useEdit = useState(false);
  const { addToast } = useToasts();

  const repository = useRepository({
    useEdit,
    setBedroom,
    setLoading,
    addToast,
    studentBedroom,
    setStudentBedroom
  });

  useEffect(() => {
    repository.getBedroom();
    repository.listStudentBedroom();
  }, []);

  const onDelete = ({ id, studentId }) => () => {
    repository.checkoutStudent({ id, studentId });
  };

  return {
    loading,
    bedroom,
    useEdit,
    studentBedroom,
    setLoading,
    onDelete
  };
}
