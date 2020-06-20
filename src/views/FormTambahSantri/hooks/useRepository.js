import { callAPIs } from "../../../config/network";
import { Santri } from "../../../libraries/api";
// import produce from "immer";

const useRepository = ({ setNotice }) => {
  const saveSantri = async values => {
    const configs = Santri.saveSantri(values);

    try {
      const { data } = await callAPIs(configs);
      setNotice(data.id);
    } catch (error) {
      console.log(error);
      alert("failed simpan santri");
    }
  };

  return {
    saveSantri
  };
};

export default useRepository;
