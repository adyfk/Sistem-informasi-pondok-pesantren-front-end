import { callAPIs } from "../../../config/network";
import { BedroomStudent, Bedroom } from "../../../libraries/api";
import { getQuery } from "../../../utils/api";

const useRepository = ({
  setStudentBedroom,
  setBedroom,
  addToast,
  setDetail,
  setAdd
  // setLoading,
}) => {
  const query = getQuery();
  const getBedroom = async () => {
    const configs = Bedroom.getBedroom(query.get("id"));
    let response;
    try {
      response = await callAPIs(configs);
      setBedroom(response.data);
    } catch (error) {
      addToast(error?.message || "Gagal Mengambil data class", {
        appearance: "error"
      });
    }
  };
  const listStudentBedroom = async () => {
    const configs = BedroomStudent.getStudentByRoomId({ id: query.get("id") });
    let response;
    try {
      response = await callAPIs(configs);
      setStudentBedroom(response.data);
    } catch (error) {
      addToast(error?.message || "Gagal Mengambil data class", {
        appearance: "error"
      });
    }
  };

  const checkoutStudent = async ({ id, studentId }) => {
    const configs = BedroomStudent.checkoutStudent({ id });

    try {
      await callAPIs(configs);
      setStudentBedroom(prev => prev.filter(item => item.id !== studentId));
      addToast("Santri sukses checkout", {
        appearance: "success"
      });
    } catch (error) {
      addToast(error?.message || "Gagal checkout student", {
        appearance: "error"
      });
    }
  };

  const getStudentNis = async ({ id }) => {
    const configs = BedroomStudent.getStudentNis({
      id,
      bedroomId: query.get("id")
    });
    try {
      const { data } = await callAPIs(configs);
      setDetail(data);
      setAdd("detail");
    } catch (error) {
      addToast(error?.message || "Gagal checkout student", {
        appearance: "error"
      });
    }
  };

  const addStudentToBedroom = async studentId => {
    const configs = BedroomStudent.adStudentToBedroom({
      studentId,
      bedroomId: query.get("id")
    });
    try {
      await callAPIs(configs);
      listStudentBedroom();
      addToast("Berhasil menambah santri", {
        appearance: "success"
      });
      setAdd(false);
    } catch (error) {
      addToast(error?.message || "Gagal checkout student", {
        appearance: "error"
      });
    }
  };

  return {
    listStudentBedroom,
    checkoutStudent,
    getBedroom,
    getStudentNis,
    addStudentToBedroom
  };
};

export default useRepository;
