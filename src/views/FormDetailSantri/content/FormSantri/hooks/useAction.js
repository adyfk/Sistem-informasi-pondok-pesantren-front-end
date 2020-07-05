import { useEffect, useRef } from "react";
import useActionAddress from "../../../../../libraries/hooks/address/useAction";
import { isEmpty } from "../../../../../utils/object";

export default function useAction({
  reset,
  santri,
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

  const mount = useRef(false);
  useEffect(() => {
    getProvince();
  }, []);

  useEffect(() => {
    reset(santri);
    if (!isEmpty(santri)) {
      setTimeout(() => {
        getRegency({ provinceId: getValues("province") });
        getDistrict({ regencyId: getValues("regency") });
        mount.current = true;
      }, 1000);
    }
  }, [santri]);

  useEffect(() => {
    getRegency({ provinceId: getValues("province") });
    if (mount.current) {
      setValue([{ regency: "", district: "" }]);
    }
  }, [watch("province")]);

  useEffect(() => {
    getDistrict({ regencyId: getValues("regency") });
    if (mount.current) {
      setValue([{ district: "" }]);
    }
  }, [watch("regency")]);

  return {
    listDistrict,
    listProvince,
    listRegency
  };
}
