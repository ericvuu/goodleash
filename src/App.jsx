import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useGeoLocation from "./Hooks/useGeoLocation";
import Home from "./Pages/Home";
import Breed from "./Pages/Breed";
import Organizations from "./Pages/Organizations";

const queryClient = new QueryClient();

function App() {
  const { location, loading, error } = useGeoLocation();
  const { city, country, state, stateCode, zip } = location || {};
  const cityState = city && state ? `${city}, ${state}` : "";

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                city={city}
                country={country}
                state={state}
                stateCode={stateCode}
                zip={zip}
                cityState={cityState}
              />
            }
          />
          <Route
            path="/breed"
            element={
              <Breed
                city={city}
                country={country}
                state={state}
                stateCode={stateCode}
                zip={zip}
                cityState={cityState}
              />
            }
          />
          <Route
            path="/organizations"
            element={
              <Organizations
                city={city}
                country={country}
                state={state}
                stateCode={stateCode}
                zip={zip}
                cityState={cityState}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
