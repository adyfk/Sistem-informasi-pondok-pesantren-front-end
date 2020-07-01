import { useState, useEffect, createContext } from "react";
import useRepository from "./useRepository";
// import { useFormContext } from "react-hook-form";
const initialValues = {
  santri: {},
  parent: {},
  document: {},
  info: {
    StudentDetail: {
      Generation: {}
    },
    User: {}
  }
};
export const CtxDetailSantriManagement = createContext();

export default function useAction() {
  const [santri, setSantri] = useState(initialValues.santri);
  const [parent, setParent] = useState(initialValues.parent);
  const [document, setDocument] = useState(initialValues.document);
  const [info, setInfo] = useState(initialValues.info);

  const repository = useRepository({
    setParent,
    setSantri,
    setDocument,
    setInfo
  });

  useEffect(() => {
    repository.getProfile();
  }, []);

  const onSubmitStudent = values => repository.updateSantri(values);
  const onSubmitParent = values => repository.updateParent(values);

  return {
    repository,
    info,
    santri,
    parent,
    document,
    setSantri,
    setParent,
    setDocument,
    setInfo,
    onSubmitStudent,
    onSubmitParent
  };
}
