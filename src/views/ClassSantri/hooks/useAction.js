import { useState, createContext, useEffect } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";

export const CtxClassSantri = createContext({
  loading: {},
  class: {},
  studentClass: []
});

export default function useAction() {
  const [loading, setLoading] = useState({});
  const [studentClass, setStudentClass] = useState([]);
  const [add, setAdd] = useState("");
  const [detail, setDetail] = useState({});
  const [classx, setClass] = useState({});
  const useEdit = useState(false);
  const { addToast } = useToasts();

  const repository = useRepository({
    useEdit,
    setClass,
    setDetail,
    setLoading,
    setAdd,
    addToast,
    studentClass,
    setStudentClass
  });

  useEffect(() => {
    repository.getClass();
    repository.listStudentClass();
  }, []);

  const onDelete = ({ id, studentId }) => () => {
    repository.checkoutStudent({ id, studentId });
  };

  return {
    loading,
    classx,
    useEdit,
    add,
    repository,
    setAdd,
    detail,
    studentClass,
    setLoading,
    onDelete
  };
}
