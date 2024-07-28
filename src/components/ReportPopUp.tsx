import { Radio } from "@mui/material";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

type RadioValue =
  | "incorrect_information"
  | "duplicate_listing"
  | "inappropriate_content"
  | "fraudulent_listing"
  | "other";

type OtherReasonValue = string;

const reportReasons = [
  {
    reason: "Incorrect Information",
    description: "The listing contains false or misleading information",
    value: "incorrect_information",
  },
  {
    reason: "Duplicate Listing",
    description: "This property is listed more than once",
    value: "duplicate_listing",
  },
  {
    reason: "Inappropriate Content",
    description: "The listing contains inappropriate or offensive content",
    value: "inappropriate_content",
  },
  {
    reason: "Fraudulent Listing",
    description: "I suspect this listing is a scam or fraudulent",
    value: "fraudulent_listing",
  },
  {
    reason: "Other",
    description: "(Please specify)",
    value: "other",
  },
];

interface ReportPopUpProps {
  showReport: boolean;
  setReportSumit: (value: boolean) => void;
  handleShowReport: () => void;
}

const ReportPopUp: React.FC<ReportPopUpProps> = ({
  showReport,
  setReportSumit,
  handleShowReport,
}) => {
  const [selectedValue, setSelectedValue] = useState<RadioValue | "">("");
  const [otherReason, setOtherReason] = useState<OtherReasonValue>("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value as RadioValue);
    setShowErrorMessage(false);
  };

  const handleOtherReasonText = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setOtherReason(event.target.value);
  };

  const handleSummit = () => {
    if (selectedValue === "other") {
      console.log(
        `Selected reason for the report : ${selectedValue} ${otherReason}`
      );
      setReportSumit(true);
    } else if (selectedValue.length === 0) {
      setShowErrorMessage(true);
    } else {
      console.log("Selected reason for the report : ", selectedValue);
      setReportSumit(true);
    }
  };
  return (
    <section
      className={`${
        showReport && "opacity-100"
      } opacity-0 -z-10 bg-white w-[90%] md:w-[60%] lg:w-[50%] mx-auto my-9 p-5 rounded-[19px] shadow-lg transition-opacity duration-300`}
    >
      <header className="text-[#202020] text-center pb-4 border-b-[0.5px] border-gray-300 relative">
        <div className="text-md md:text-lg lg:text-xl font-bold">
          Report an Issue
        </div>
        <div className="text-sm md:text-md lg:text-lg font-semibold mt-4">
          Help us maintain a high-quality listing
        </div>
        <IoCloseOutline
          onClick={handleShowReport}
          className="absolute right-5 top-0 cursor-pointer text-3xl"
        />
      </header>
      <main className="w-[90%] lg:w-[80%] mx-auto">
        <div className="text-xs md:text-sm lg:text-md mt-2 font-normal text-black text-center">
          Please select the reason for reporting this property. Your feedback is
          important to us.
        </div>
        <div className="md:ml-4 lg:ml-10">
          {reportReasons.map((report) => (
            <div
              onClick={() => setSelectedValue(report.value as RadioValue)}
              className="flex mt-6 cursor-pointer"
              key={report.value}
            >
              <>
                <Radio
                  value={report.value}
                  checked={selectedValue === report.value}
                  onChange={handleRadioChange}
                  sx={{
                    color: "#80848E",
                    "&.Mui-checked": { color: "#2E368F" },
                    "& svg": {
                      fontSize: 20,
                    },
                    marginLeft: 2,
                  }}
                />
                <div className="ml-8">
                  <h3 className="font-bold text-sm md:text-md lg:text-lg">
                    {report.reason}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-md font-normal">
                    {report.description}
                  </p>
                </div>
              </>
            </div>
          ))}
        </div>
        <div
          className={`${
            selectedValue === "other"
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          } transition-all duration-700 my-4 overflow-hidden`}
        >
          <textarea
            onChange={handleOtherReasonText}
            placeholder="Describe the issue in detail"
            className="rounded-lg border-2 transition-colors duration-100 w-full h-[150px] border-gray-300 focus:border-gray-400 outline-none p-2"
          ></textarea>
        </div>
        <div
          className={`${
            showErrorMessage && "opacity-100 max-h-8"
          } opacity-0 max-h-0 overflow-hidden text-red-600 text-sm text-center font-semibold transition-opacity duration-200`}
        >
          Please select any reason
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSummit}
            className="bg-[#2E368F] hover:bg-opacity-95 active:bg-opacity-90 text-[#f5f5f5] py-1 w-[90%] lg:w-[75%]  mx-auto rounded-full"
          >
            Submit Report
          </button>
        </div>
      </main>
    </section>
  );
};

export default ReportPopUp;
