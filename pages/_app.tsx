import { AppProvider } from "../features/common/provider/AppProvider";
import { DebitProvider } from "../features/debit/provider/DebitProvider";
import { UserProvider } from "../features/user/provider/UserProvider";
import { VehicleProvider } from "../features/vehicle/provider/VehicleProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <UserProvider>
        <DebitProvider>
          <VehicleProvider>
            <Component {...pageProps} />
          </VehicleProvider>
        </DebitProvider>
      </UserProvider>
    </AppProvider>
  );
}

export default MyApp;
