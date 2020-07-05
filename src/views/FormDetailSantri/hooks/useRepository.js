import { callAPIs } from "../../../config/network";
import { Santri } from "../../../libraries/api";
import { getQuery } from "../../../utils/api";
// import produce from "immer";

const useRepository = ({ setSantri, setParent, setDocument, setInfo }) => {
  const getProfile = async () => {
    const query = getQuery();
    const config = Santri.getSantri({}, query.get("id"));
    try {
      const {
        data: {
          Parent,
          StudentDocument,
          User,
          StudentDetail: { Generation, ...detail },
          ...santri
        }
      } = await callAPIs(config);
      setParent({
        ...Parent,
        dateOfBirth: new Date(Parent.dateOfBirth).toLocaleDateString("en-CA")
      });
      setSantri({
        ...santri,
        dateOfBirth: new Date(santri.dateOfBirth).toLocaleDateString("en-CA")
      });
      setDocument(StudentDocument);
      setInfo({
        User,
        StudentDetail: {
          ...detail,
          titleGeneration: Generation.title
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateSantri = values =>
    new Promise(async res => {
      const query = getQuery();
      const configs = Santri.updateSantri(values, query.get("id"));

      try {
        const { data } = await callAPIs(configs);
        setSantri(data);
      } catch (error) {
        console.log(error);
        alert("failed simpan santri");
      } finally {
        res(true);
      }
    });

  const updateParent = values =>
    new Promise(async res => {
      const query = getQuery();
      const configs = Santri.updateParent(values, query.get("id"));

      try {
        const { data } = await callAPIs(configs);
        setParent(data);
      } catch (error) {
        console.log(error);
        alert("failed simpan santri");
      } finally {
        res(true);
      }
    });

  return {
    getProfile,
    updateParent,
    updateSantri
  };
};

export default useRepository;
