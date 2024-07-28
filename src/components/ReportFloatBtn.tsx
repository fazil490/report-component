import React from "react";
interface ReportFloatBtnProps {
  handleShowReport: () => void;
  showReport: boolean;
}

const ReportFloatBtn: React.FC<ReportFloatBtnProps> = ({
  handleShowReport,
  showReport,
}) => {
  return (
    <button
      onClick={handleShowReport}
      className={`${
        showReport && "bg-opacity-0"
      } transition-opacity duration-200 fixed bottom-8 z-10 right-4 bg-white rounded-[19px] shadow-lg hover:shadow-xl active:shadow-inner text-center flex items-center p-4 font-semibold text-md lg:text-lg leading-6`}
    >
      <div className="">Report</div>
    </button>
  );
};

export default ReportFloatBtn;
