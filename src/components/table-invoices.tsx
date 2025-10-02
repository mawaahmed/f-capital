"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowDown,
  Eye,
  Edit,
  Trash,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "./ui/button";

export default function TableInvoices() {
  const invoiceData = [
    {
      id: "INV_001",
      date: "2025-09-15",
      invoice: "INV-2025-001",
      beneficiary: "Ahmed Hassan",
      amount: 150000,
      currency: "FCFA",
      status: "Paid",
    },
    {
      id: "INV_002", 
      date: "2025-09-10",
      invoice: "INV-2025-002",
      beneficiary: "Mawa Johnson",
      amount: 250000,
      currency: "FCFA",
      status: "Pending",
    },
    {
      id: "INV_003",
      date: "2025-09-08",
      invoice: "INV-2025-003", 
      beneficiary: "Sarah Wilson",
      amount: 75000,
      currency: "FCFA",
      status: "Overdue",
    },
  ];

  const rowsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [statuses, setStatuses] = useState<string[]>(
    invoiceData.map((invoice) => invoice.status)
  );

  const totalPages = Math.ceil(invoiceData.length / rowsPerPage);
  const currentData = invoiceData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

 

  const handleStatusChange = (index: number, newStatus: string) => {
    const updated = [...statuses];
    updated[index] = newStatus;
    setStatuses(updated);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "text-green-600 font-semibold";
      case "Pending":
        return "text-yellow-600 font-semibold";
      case "Overdue":
        return "text-red-600 font-semibold";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-3">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold mb-4 text-black">
            Latest Invoices
          </h2>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="items-center flex gap-3">
                Date
                <span>
                  <ArrowDown className="w-4 h-4 text-gray-400" />
                </span>
              </TableHead>
              <TableHead>Invoice</TableHead>
              <TableHead>Beneficiary</TableHead>
              <TableHead>Amount (FCFA)</TableHead>
              <TableHead>Currency</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Quick Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentData.map((invoice, index) => (
              <TableRow
                key={invoice.id}
                className="hover:bg-transparent"
              >
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.invoice}</TableCell>
                <TableCell>{invoice.beneficiary}</TableCell>
                <TableCell>{invoice.amount.toLocaleString()}</TableCell>
                <TableCell>{invoice.currency}</TableCell>
                <TableCell>
                  <div className="relative inline-block">
                    <select
                      value={statuses[index]}
                      onChange={(e) =>
                        handleStatusChange(index, e.target.value)
                      }
                      className={`appearance-none bg-gray-100 border border-gray-300 rounded-full px-3 py-1 pr-6 text-sm focus:outline-none ${getStatusColor(
                        statuses[index]
                      )}`}
                    >
                      <option value="Paid">Paid</option>
                      <option value="Pending">Pending</option>
                      <option value="Overdue">Overdue</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </TableCell>
                <TableCell className="flex gap-2">
                  <Eye className="w-4 h-4 cursor-pointer hover:text-blue-700" />
                  <Edit className="w-4 h-4 cursor-pointer hover:text-green-700" />
                  <Trash className="w-4 h-4 cursor-pointer hover:text-red-700" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Previous
          </Button>
          <span className="text-sm text-gray-600">
            {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
