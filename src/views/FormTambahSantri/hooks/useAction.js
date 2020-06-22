import { useState, useEffect, createContext } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";
import useActionAddress from "../../../libraries/hooks/address/useAction";
// import { useFormContext } from "react-hook-form";
export const CtxAddSantriManagement = createContext({ payload: {} });

export default function useAction({ formMethods }) {
  const {
    listDistrict,
    listProvince,
    listRegency,
    repository: { getProvince, getDistrict, getRegency }
  } = useActionAddress();
  const { watch, getValues, setValue } = formMethods;
  const [notice, setNotice] = useState(false);
  const [loading, setLoading] = useState({});
  const [payload, setPayload] = useState({});
  const { addToast } = useToasts();
  const repository = useRepository({
    payload,
    setPayload,
    addToast,
    setLoading,
    setNotice
  });

  useEffect(() => {
    getProvince();
  }, []);

  useEffect(() => {
    getRegency({ provinceId: getValues("province") });
    setValue([{ regency: "", district: "" }]);
  }, [watch("province")]);

  useEffect(() => {
    getDistrict({ regencyId: getValues("regency") });
    setValue([{ district: "" }]);
  }, [watch("regency")]);

  const onSubmit = values => {
    repository.saveSantri(values);
  };

  const toggleNotice = () => {
    setNotice(prev => !prev);
  };

  return {
    loading,
    payload,
    repository,
    address: {
      listDistrict,
      listProvince,
      listRegency
    },
    notice,
    setPayload,
    setLoading,
    onSubmit,
    toggleNotice
  };
}
