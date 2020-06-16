import { callAPIs } from "../../../../config/network";
import { Bedroom } from "../../../../libraries/api";
import produce from "immer";

const useRepository = ({
  useEdit,
  bedroom,
  setBedroom,
  setLoading,
  addToast
}) => {
  const listBedroom = async () => {
    const configs = Bedroom.getBedroom();
    let response;
    try {
      response = await callAPIs(configs);
      setBedroom(response.data)
    } catch (error) {
      addToast(error?.message || "Gagal Mengambil data bedroom", {
        appearance: "error"
      });
    }
  }

  const updateBedroom = async ({ id, params }) => {
    const configs = Bedroom.updateBedroom({ id, params });
    let response;
    setLoading(true);
    try {
      response = await callAPIs(configs);
      const stateNew = produce(bedroom, tempBedroom => {
        const index = tempBedroom.findIndex(data => data.id === id);
        tempBedroom[index] = response.data;
      });
      setBedroom(stateNew);
      addToast("Sukses update data  bedroom", {
        appearance: "success"
      });
    } catch (error) {
      addToast(error?.message || "Gagal update data  bedroom", {
        appearance: "error"
      });
    } finally {
      setLoading(false);
      useEdit[1](false);
    }
  };

  const createBedroom = async ({ index, params }) => {
    const configs = Bedroom.createBedroom({ params });
    let response;
    setLoading(true);
    try {
      response = await callAPIs(configs);
      const stateNew = produce(bedroom, tempBedroom => {
        tempBedroom[index] = response.data;
      });
      setBedroom(stateNew);
      addToast("Sukses tambah data  bedroom", {
        appearance: "success"
      });
    } catch (error) {
      addToast(error?.message || "Gagal tambah data  bedroom", {
        appearance: "error"
      });
    } finally {
      setLoading(false);
      useEdit[1](false);
    }
  };

  return {
    listBedroom,
    createBedroom,
    updateBedroom,
  };
};

export default useRepository;
