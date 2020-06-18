import { callAPIs } from "../../../../config/network";
import { Address } from "../../../api";
import { queryParams } from "../../../../utils/api";
// import produce from "immer";

const useRepository = ({
  setLoading,
  setProvince,
  setDorp,
  setDistrict,
  addToast
}) => {
  const getProvince = async () => {
    const configs = Address.getProvince()();
    let response;
    try {
      setLoading({ province: true });
      response = await callAPIs(configs);
      setProvince(response.data);
    } catch (error) {
      addToast(error?.message || "Gagal Mengambil data province", {
        appearance: "error"
      });
    } finally {
      setLoading({});
    }
  };
  const getDorp = async ({ provinceId }) => {
    const params = queryParams({
      provinceId
    });
    const configs = Address.getDrop({ params });
    let response;
    try {
      setLoading({ dorp: true });
      response = await callAPIs(configs);
      setDorp(response.data);
    } catch (error) {
      addToast(error?.message || "Gagal Mengambil data dorp", {
        appearance: "error"
      });
    } finally {
      setLoading({});
    }
  };
  const getDistrict = async ({ dorpId }) => {
    const params = queryParams({
      dorpId
    });
    const configs = Address.getProvince({ params });
    let response;
    try {
      setLoading({ district: true });
      response = await callAPIs(configs);
      setDistrict(response.data);
    } catch (error) {
      addToast(error?.message || "Gagal Mengambil data district", {
        appearance: "error"
      });
    } finally {
      setLoading();
    }
  };

  return {
    getProvince,
    getDistrict,
    getDorp
  };
};

export default useRepository;
