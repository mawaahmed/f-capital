import Filter from "@/components/filter";
import RevenueChart from "@/components/filter-graph";
import SeasonalityComparison from "@/components/graph-seasonality";
import DashboardWrapper from "@/components/layouts/distributor-dashboard-wraper";
import SalesByLocation from "@/components/sales-by-location";
import TableTopSaleParts from "@/components/table-top-sale-region";

export default function Sales() {
  return (
    <DashboardWrapper
      title="Reports & Analytics"
      description="Stay on top of claims, parts inventory, and performance analytics."
    >
      {/* Exemple de tableau */}
      <div className="">
        <Filter title="Sales Over time" />
      </div>
      <div className="pb-5">
        <RevenueChart />
      </div>
      <div className="">
        <Filter title="Seasonality Comparison" filters={["This Month"]} />
      </div>
      <div className="pb-5">
        <SeasonalityComparison />  
      </div>
       <div className="">
        <Filter title="Sales by Location" />
      </div>
      <div className="flex gap-2 pb-5">
        <SalesByLocation />
        <TableTopSaleParts />
      </div>
    </DashboardWrapper>
  );
}
