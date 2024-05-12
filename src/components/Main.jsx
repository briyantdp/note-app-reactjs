import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import ArchivedPage from "../pages/ArchivedPage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";

function Main() {
  return (
    <main className="px-8">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/new" element={<AddPage />} />
        <Route path="/archives" element={<ArchivedPage />} />
        <Route path="/notes/:id" element={<DetailPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default Main;
