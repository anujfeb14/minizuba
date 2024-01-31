import { Provider } from "react-redux";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import appStore from "./utils/Redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <MainContainer />
    </Provider>
  );
}

export default App;
