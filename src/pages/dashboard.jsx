import Charts from "../components/dashboard/charts";
import SummaryCards from "../components/dashboard/summarycard";

export default function Dashboard() {
  return (
    <div className="h-full w-full bg-gray-50">
      <SummaryCards />
      <Charts />
    </div>
  );
}
