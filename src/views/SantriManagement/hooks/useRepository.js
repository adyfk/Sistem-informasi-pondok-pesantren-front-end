import { callAPIs } from "../../../config/network";
import { Santri } from "../../../libraries/api";
// import produce from "immer";

const useRepository = ({ setSantris, setLoading, addToast }) => {
  const listSantri = async params => {
    const configs = Santri.getSantri(params);
    let response;
    setLoading({ listSantri: true });
    try {
      response = await callAPIs(configs);
      const { data } = response;
      setSantris(data);
    } catch (error) {
      addToast(error?.message || "Gagal Mengambil data santri", {
        appearance: "error"
      });
    } finally {
      setLoading({});
    }
  };

  return {
    listSantri
  };
};

export default useRepository;
