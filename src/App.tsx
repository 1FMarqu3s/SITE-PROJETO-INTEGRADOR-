import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./PAGINAS/Index.tsx";
import NotFound from "./PAGINAS/NotFound.tsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
