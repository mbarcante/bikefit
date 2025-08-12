import AppRoutes from "./AppRoutes";
import { BikeFitProvider } from "./context/BikeFitContext";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BikeFitProvider>
        <AppRoutes />
      </BikeFitProvider>
    </div>
  )
};
export default App;
