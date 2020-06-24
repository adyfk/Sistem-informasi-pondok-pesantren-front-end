import { callAPIs } from "../../../config/network";
import { ClassStudent, Classx } from "../../../libraries/api";
import { getQuery } from "../../../utils/api";

const useRepository = ({
  setStudentClass,
  setClass,
  addToast,
  setDetail,
  setAdd
  // setLoading,
}) => {
  const query = getQuery();
  const getClass = async () => {
    const configs = Classx.getClass(query.get("id"));
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
  const listStudentClass = async () => {
    const configs = ClassStudent.getStudentByClassId({ id: query.get("id") });
    let response;
    try {
      response = await callAPIs(configs);
      setStudentClass(response.data);
    } catch (error) {
      addToast(error?.message || "Gagal Mengambil data class", {
        appearance: "error"
      });
    }
  };

  const checkoutStudent = async ({ id, studentId }) => {
    const configs = ClassStudent.checkoutStudent({ id });

    try {
      await callAPIs(configs);
      setStudentClass(prev => prev.filter(item => item.id !== studentId));
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
    const configs = ClassStudent.getStudentNis({
      id,
      bedroomId: query.get("id")
    });
    try {
      const { data } = await callAPIs(configs);
      setDetail(data);
      setAdd("detail");
    } catch (error) {
      addToast(error?.message || "Gagal menambah santri", {
        appearance: "error"
      });
    }
  };

  const addStudentToClass = async studentId => {
    const configs = ClassStudent.addStudentToClass({
      studentId,
      classId: query.get("id")
    });
    try {
      await callAPIs(configs);
      listStudentClass();
      addToast("Berhasil menambah santri", {
        appearance: "success"
      });
      setAdd(false);
    } catch (error) {
      addToast(error?.message || "Gagal menambah santri", {
        appearance: "error"
      });
    }
  };

  return {
    listStudentClass,
    checkoutStudent,
    getClass,
    getStudentNis,
    addStudentToClass
  };
};

export default useRepository;
