


import { TypiCodeListData } from "../utilities/ApiConstant";
import axios from "axios";
import { AnyAction, Dispatch } from "redux";
import { setLoadingState } from "../redux/reducers/user/UserReducer";


export const ListUpAction = (dispatch: Dispatch<AnyAction>) => {
  return new Promise((resolve) => {
    dispatch(setLoadingState(true));
  
    axios
      .get(TypiCodeListData)
      .then((response: any) => {
         
        console.log("-----response", JSON.stringify(response.data))
resolve(response);
dispatch(setLoadingState(false));

      
      })
      .catch((error: any) => {
          console.log("-----error", JSON.stringify(error));
        resolve(false);
      
      });
  });
};





function setLoader(arg0: boolean): any {
  throw new Error("Function not implemented.");
}

