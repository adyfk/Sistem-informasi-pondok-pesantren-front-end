import { useEffect } from "react";
import useActionAddress from "../../../../../libraries/hooks/address/useAction";

export default function useAction({
  reset,
  parent,
  setValue,
  getValues,
  watch
}) {
  const {
    listDistrict,
    listProvince,
    listRegency,
    repository: { getProvince, getDistrict, getRegency }
  } = useActionAddress();

  useEffect(() => {
    getProvince();
  }, []);

  useEffect(() => {
    reset(parent);
  }, [parent]);

  useEffect(() => {
    getRegency({ provinceId: getValues("province") });
    setValue([{ regency: "", district: "" }]);
  }, [watch("province")]);

  useEffect(() => {
    getDistrict({ regencyId: getValues("regency") });
    setValue([{ district: "" }]);
  }, [watch("regency")]);

  return {
    address: {
      listDistrict,
      listProvince,
      listRegency
    }
  };
}
