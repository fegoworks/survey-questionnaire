import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/HomePage";
import Questionnaire from "./components/pages/QuestionnairePage";
import { ROUTE_HOME, ROUTE_QUESTIONNAIRE } from "./constants";
import { QuestionContextProvider } from "./providers/context";

function App() {
  return (
    <div className="App">
      <QuestionContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTE_HOME} element={<Home />} />
            <Route path={ROUTE_QUESTIONNAIRE} element={<Questionnaire />} />
            <Route path={`${ROUTE_QUESTIONNAIRE}/:questionnaireId`} element={<Questionnaire />} />
          </Routes>
        </BrowserRouter>
      </QuestionContextProvider>
    </div>
  );
}

export default App;
