import { useState, createContext, useEffect } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";

export const CtxBedroomSantri = createContext({
  loading: {},
  bedroom: {},
  studentBedroom: []
});

export default function useAction() {
  const [loading, setLoading] = useState({});
  const [studentBedroom, setStudentBedroom] = useState([]);
  const [add, setAdd] = useState("");
  const [detail, setDetail] = useState({});
  const [bedroom, setBedroom] = useState({});
  const useEdit = useState(false);
  const { addToast } = useToasts();

  const repository = useRepository({
    useEdit,
    setBedroom,
    setDetail,
    setLoading,
    setAdd,
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
    add,
    repository,
    setAdd,
    detail,
    studentBedroom,
    setLoading,
    onDelete
  };
}
