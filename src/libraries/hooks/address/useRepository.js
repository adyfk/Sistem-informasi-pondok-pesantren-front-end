import { callAPIs } from "../../../config/network";
import { Address } from "../../api";
// import produce from "immer";

const useRepository = ({
  setLoading,
  setProvince,
  setDistrict,
  setRegency,
  addToast
}) => {
  const getProvince = async () => {
    const configs = Address.province();
    let response;
    try {
      setLoading({ province: true });
      response = await callAPIs(configs);
      setProvince(
        response.data?.map(item => ({ value: item.id, label: item.nama })) || []
      );
    } catch (error) {
      addToast(error?.message || "Gagal Mengambil data province", {
        appearance: "error"
      });
    } finally {
      setLoading({});
    }
  };
  const getRegency = async ({ provinceId }) => {
    const configs = Address.regency({ params: { provinceId } });
    let response;
    try {
      setLoading({ dorp: true });
      response = await callAPIs(configs);
      setRegency(
        response.data?.map(item => ({ value: item.id, label: item.nama })) || []
      );
    } catch (error) {
      addToast(error?.message || "Gagal Mengambil data dorp", {
        appearance: "error"
      });
    } finally {
      setLoading({});
    }
  };
  const getDistrict = async ({ regencyId }) => {
    const configs = Address.district({ params: { regencyId } });
    let response;
    try {
      setLoading({ district: true });
      response = await callAPIs(configs);
      setDistrict(
        response.data?.map(item => ({ value: item.id, label: item.nama })) || []
      );
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
    getRegency
  };
};

export default useRepository;
