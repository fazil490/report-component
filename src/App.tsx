import { useState } from "react";
import ReportFloatBtn from "./components/ReportFloatBtn";
import ReportPopUp from "./components/ReportPopUp";
import Reported from "./components/Reported";

const App: React.FC = () => {
  const [showReport, setShowReport] = useState(false);
  const [reportSubmit, setReportSumit] = useState(false);
  const handleShowReport = () => {
    setShowReport(!showReport);
  };
  const handleCloseReport = () => {
    setShowReport(false);
    setReportSumit(false);
  };
  return (
    <main className="font-k2d">
      {showReport ? null : (
        <ReportFloatBtn
          showReport={showReport}
          handleShowReport={handleShowReport}
        />
      )}

      {reportSubmit && showReport ? (
        <Reported handleCloseReport={handleCloseReport} />
      ) : (
        <ReportPopUp
          handleShowReport={handleShowReport}
          setReportSumit={setReportSumit}
          showReport={showReport}
        />
      )}
    </main>
  );
};

export default App;
