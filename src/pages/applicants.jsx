import ApplicantCards from "../components/applicants/applicantcard";
import ApplicantTable from "../components/applicants/applicanttable";

export default function Applicants() {
  return (
    <div className="h-full w-full bg-gray-50">
      <ApplicantCards />
      <ApplicantTable />
    </div>
  );
}
