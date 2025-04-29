import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useGeoLocation from "./Hooks/useGeoLocation";
import Home from "./Pages/Home";

const queryClient = new QueryClient();
function App() {
  const { location, loading, error } = useGeoLocation();
  const { city, country, state, stateCode, zip} = location || {};
  const cityState = city && state ? `${city}, ${state}` : "New York, NY";

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home city={city} country={country} state={state} stateCode={stateCode} zip={zip} cityState={cityState}/>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
