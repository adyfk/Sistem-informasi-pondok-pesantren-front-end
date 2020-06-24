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
      setParent(Parent);
      setSantri(santri);
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

  return {
    getProfile
  };
};

export default useRepository;
