import { callAPIs } from "../../../../../config/network";
import { Document, Santri } from "../../../../../libraries/api";
import { getQuery } from "../../../../../utils/api";
// import produce from "immer";

const useRepository = ({ addToast, setLoading, setDocument }) => {
  const uploadFile = ({ file, name }) =>
    new Promise(async (res, rej) => {
      const query = getQuery();
      const params = new FormData();
      console.log(file, name);
      params.append("file", file);
      params.append("name", name);
      setLoading({ [name]: true });
      const config = Document.upload({ params }, query.get("id"));
      try {
        const response = await callAPIs(config);
        const updatePayload = {
          [name]: response.data.fileName
        };
        const configSub = Santri.updateDocument(updatePayload, query.get("id"));
        const responseSub = await callAPIs(configSub);
        setDocument(responseSub.data);
      } catch (error) {
        addToast(error?.message || "Gagal Mengambil data santri", {
          appearance: "error"
        });
      } finally {
        setLoading({ [name]: false });
        res({ done: true });
      }
    });

  return {
    uploadFile
  };
};

export default useRepository;
