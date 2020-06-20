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
    listDorp,
    repository: { getProvince, getDistrict, getDorp }
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
    getDorp({ provinceId: getValues("province") });
    setValue([{ dorp: "", district: "" }]);
  }, [watch("province")]);

  useEffect(() => {
    getDistrict({ dorpId: getValues("dorp") });
    setValue([{ district: "" }]);
  }, [watch("dorp")]);

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
      listDorp
    },
    notice,
    setPayload,
    setLoading,
    onSubmit,
    toggleNotice
  };
}
