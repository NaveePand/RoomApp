
import { 

} from "react-native";



// validation regular expression
export const emailPattern =
  /^(?=.{1,64}@.{1,255}$)(?=[^\s@]+@[^\s@]+\.[^\s@]{2,}$)(?!.*\.\.)[a-zA-Z0-9!#$%&'*+\-\/=?^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+\-\/=?^_`{|}~]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?(?:\.(?:com|org|io|net|in))$/;

export const mediumRegex = new RegExp(
  // "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
);

