import { jwtDecode } from "jwt-decode";
import Storage from "../services/Storage";
import { Navigate } from "react-router-dom";

//Decode JWT
function DecodeToken(token) {
  try {
    const decodedToken = jwtDecode(token);

    return decodedToken;
  } catch (error) {
    Storage.clearLocal();
    return <Navigate to="/" />;
  }
}

export default DecodeToken;
