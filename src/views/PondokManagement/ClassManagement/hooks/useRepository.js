import { callAPIs } from "../../../../config/network";
import { Classx } from "../../../../libraries/api";
import produce from "immer";

const useRepository = ({
  useEdit,
  classes,
  setClass,
  setLoading,
  addToast
}) => {
  const listClass = async () => {
    const configs = Classx.getClass();
    let response;
    try {
      response = await callAPIs(configs);
      setClass(response.data);
    } catch (error) {
      addToast(error?.message || "Gagal Mengambil data class", {
        appearance: "error"
      });
    }
  };

  const updateClass = async ({ id, params }) => {
    const configs = Classx.updateClass({ id, params });
    let response;
    setLoading(true);
    try {
      response = await callAPIs(configs);
      const stateNew = produce(classes, tempClass => {
        const index = tempClass.findIndex(data => data.id === id);
        tempClass[index] = response.data;
      });
      setClass(stateNew);
      addToast("Sukses update data  class", {
        appearance: "success"
      });
    } catch (error) {
      addToast(error?.message || "Gagal update data  class", {
        appearance: "error"
      });
    } finally {
      setLoading(false);
      useEdit[1](false);
    }
  };

  const createClass = async ({ index, params }) => {
    const configs = Classx.createClass({ params });
    let response;
    setLoading(true);
    try {
      response = await callAPIs(configs);
      const stateNew = produce(classes, tempClass => {
        tempClass[index] = response.data;
      });
      setClass(stateNew);
      addToast("Sukses tambah data  class", {
        appearance: "success"
      });
    } catch (error) {
      addToast(error?.message || "Gagal tambah data  class", {
        appearance: "error"
      });
    } finally {
      setLoading(false);
      useEdit[1](false);
    }
  };

  return {
    listClass,
    createClass,
    updateClass
  };
};

export default useRepository;
