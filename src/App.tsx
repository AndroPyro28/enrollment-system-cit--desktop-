import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import BaseLayout from "./components/providers/BaseLayout";
import { syncThemeWithLocal } from "./helpers/theme_helpers";
import { useTranslation } from "react-i18next";
import "./localization/i18n";
import { updateAppLanguage } from "./helpers/language_helpers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentsPage from "./pages/students/page";
import RegistrationPage from "./pages/registration/page";
import Provider from "./components/providers/Provider";
import StudentDetailsPage from "./pages/student-details";
import DashBoardHomePage from "./pages/dashboard/page";
import YearLevelsPage from "./pages/year-level/page";
export default function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        syncThemeWithLocal();
        updateAppLanguage(i18n);
    }, []);

    return (
        <div className="overflow-y-auto max-h-[1050px] overflow-x-hidden">
            <Router>
                <Provider>
                    <Routes>
                        <Route path="/" index element={<DashBoardHomePage />} />
                        <Route path="/students" element={<StudentsPage />} />
                        <Route path="/students/:id" element={<StudentDetailsPage />} />
                        <Route path="/registration" element={<RegistrationPage />} />
                        <Route path="/year-level" element={<YearLevelsPage />} />
                    </Routes>
                </Provider>
            </Router>
        </div>
    );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
