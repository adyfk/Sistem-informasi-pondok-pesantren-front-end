import { useState, useEffect, createContext } from "react";
import useRepository from "./useRepository";
import { useToasts } from "react-toast-notifications";
import useActionAddress from "../../../libraries/hooks/address/useAction";
// import { useFormContext } from "react-hook-form";
export const CtxAddSantriManagement = createContext({ payload: {} });

export default function useAction({ formMethods }) {
  const {
    loadingAddress,
    listDistrict,
    listProvince,
    listDorp,
    repository: { getProvince, getDistrict, getDorp }
  } = useActionAddress();
  const { watch, getValues, setValue } = formMethods;
  const [loading, setLoading] = useState({});
  const [payload, setPayload] = useState({});
  const { addToast } = useToasts();
  const repository = useRepository({
    payload,
    setPayload,
    addToast,
    setLoading
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

  return {
    loading,
    loadingAddress,
    payload,
    setPayload,
    setLoading,
    repository,
    address: {
      listDistrict,
      listProvince,
      listDorp
    }
  };
}
