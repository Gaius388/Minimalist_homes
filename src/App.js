import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import HomePage from "./components/homepage/HomePage";
import Properties from "./components/properties/Properties";
import Agent from "./components/agent/Agent";
import Blog from "./components/blog/Blog";

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="properties" element={<Properties />} />
          <Route path="agent" element={<Agent />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
