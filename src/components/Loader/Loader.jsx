import { Oval } from "react-loader-spinner";
import {StyledLoaderBackground} from "./Loader.styled"
const Loader = () => {
  return (
    <StyledLoaderBackground>
    <Oval
  visible={true}
  height="80"
  width="80"
  color="#3470FF"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </StyledLoaderBackground>
  );
};

export default Loader