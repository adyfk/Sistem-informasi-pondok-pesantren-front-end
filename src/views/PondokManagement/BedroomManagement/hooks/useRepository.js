import { callAPIs } from "../../../../config/network";
import { Generation } from "../../../../libraries/api";
import produce from "immer";

const useRepository = ({
  useEdit,
  generationDetail,
  setGeneration,
  setGenerationDetail,
  setLoading,
  addToast
}) => {
  const listGeneration = async () => {
    const configs = Generation.getGeneration();
    let response;
    try {
      response = await callAPIs(configs);
      const { GenerationDetails, ...generation } = response.data;
      setGeneration(generation);
      setGenerationDetail(GenerationDetails);
    } catch (error) {
      addToast(error?.message || "Gagal Mengambil data generation", {
        appearance: "error"
      });
    }
  };

  const updateGenerationDetail = async ({ id, params }) => {
    const configs = Generation.updateDetailGeneration({ id, params });
    let response;
    setLoading(true);
    try {
      response = await callAPIs(configs);
      const stateNew = produce(generationDetail, tempGenerationDetail => {
        const index = tempGenerationDetail.findIndex(data => data.id === id);
        tempGenerationDetail[index] = response.data;
      });
      setGenerationDetail(stateNew);
      addToast("Sukses update data detail generation", {
        appearance: "success"
      });
    } catch (error) {
      addToast(error?.message || "Gagal update data detail generation", {
        appearance: "error"
      });
    } finally {
      setLoading(false);
      useEdit[1](false);
    }
  };

  const createGenerationDeatail = async ({ index, params }) => {
    const configs = Generation.createDetailGeneration({ params });
    let response;
    setLoading(true);
    try {
      response = await callAPIs(configs);
      const stateNew = produce(generationDetail, tempGenerationDetail => {
        tempGenerationDetail[index] = response.data;
      });
      setGenerationDetail(stateNew);
      addToast("Sukses tambah data detail generation", {
        appearance: "success"
      });
    } catch (error) {
      addToast(error?.message || "Gagal tambah data detail generation", {
        appearance: "error"
      });
    } finally {
      setLoading(false);
      useEdit[1](false);
    }
  };

  const deleteGenerationDeatail = async ({ id }) => {
    const configs = Generation.deleteDetailGeneration({ id });
    setLoading(true);
    try {
      await callAPIs(configs);
      setGenerationDetail(generationDetail.filter(item => item.id !== id));
      addToast("Sukses hapus data detail generation", {
        appearance: "success"
      });
    } catch (error) {
      addToast(error?.message || "Gagal hapus data detail generation", {
        appearance: "error"
      });
    } finally {
      setLoading(false);
      useEdit[1](false);
    }
  };

  const generateNewGeneration = async () => {
    const configs = Generation.generateNewGeneration();
    setLoading(true);
    let response;
    try {
      response = await callAPIs(configs);
      const { GenerationDetails, ...generation } = response.data;
      setGeneration(generation);
      setGenerationDetail(GenerationDetails);
      addToast(response?.message || "Sukse generate data generation", {
        appearance: "success"
      });
    } catch (error) {
      addToast(error?.message || "Gagal generate data generation", {
        appearance: "error"
      });
    }
  };

  return {
    listGeneration,
    createGenerationDeatail,
    updateGenerationDetail,
    deleteGenerationDeatail,
    generateNewGeneration
  };
};

export default useRepository;
