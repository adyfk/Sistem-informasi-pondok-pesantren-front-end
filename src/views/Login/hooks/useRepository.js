import { callAPIs } from "../../../config/network";
import { User } from "../../../libraries/api";
import { setToken } from "../../../utils/auth";

const useRepository = () => {
  const login = (params) => {
    const configs = User.login({ params })
    let response;
    return new Promise(async(res,rej)=>{
      try {
        response = await callAPIs(configs);
        const { token } = response;
        setToken(token)
        res({})
      } catch (e) {
        console.log(e)
        const errors = []
        Object.keys(e.message).forEach((err)=>{
          const error = {
            name: err,
            message : e.message[err],
            type:'message-from-be'
          }
          errors.push(error)
        })
        rej(errors)
      }
    })
  };

  return {
    login
  };
};

export default useRepository;
