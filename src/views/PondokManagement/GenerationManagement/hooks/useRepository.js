import { callAPIs } from "../../../../config/network";
import { Generation } from "../../../../libraries/api";

const useRepository = ({ setGeneration, setLoading, addToast }) => {
  const listGeneration = async () => {
    const configs = Generation.getGeneration();
    setGeneration({ loading: true, data: {} });
    let response;
    try {
      response = await callAPIs(configs);
      setGeneration({
        loading: false,
        data: response.data
      });
    } catch (error) {
      addToast(error?.message || "Gagal Mengambil data generation", {
        autoDismiss: true,
        appearance: "error"
      });
      setGeneration({
        loading: false,
        data: {}
      });
    }
  };

  const resetDataGeneration = () => {
    setGeneration({
      loading: false,
      data: {}
    });
  };

  return {
    listGeneration,
    resetDataGeneration
  };
};

export default useRepository;
