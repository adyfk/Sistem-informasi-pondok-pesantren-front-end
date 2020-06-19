import { callAPIs } from "../../../config/network";
import { User } from "../../../libraries/api";

const useRepository = ({ addToast, setProfile }) => {
  const getProfile = async () => {
    const configs = User.profile();
    try {
      const response = await callAPIs(configs);
      setProfile(response.data);
    } catch (e) {
      addToast(e?.message || "Gagal get profile user", {
        appearance: "error"
      });
    }
  };

  return {
    getProfile
  };
};

export default useRepository;
