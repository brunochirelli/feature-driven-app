import { VehicleProvider } from "../features/vehicle/provider/VehicleProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <VehicleProvider>
      <Component {...pageProps} />
    </VehicleProvider>
  );
}

export default MyApp;
