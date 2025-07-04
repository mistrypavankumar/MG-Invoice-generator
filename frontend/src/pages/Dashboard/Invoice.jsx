import { numToWords } from "num-to-words";

import "./Invoice.css";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

export default function Invoice() {
  const companyDetails = {
    name: "Bhole Shankar Furnitures",
    address:
      "H NO 12-1-511, PLOT NO 159, ANAND NAGAR, BANDLAGUDA, NAGOLE, HYD, TS - 500068",
    gstin: "36BMCPM5653E1Z3",
    stateName: "Telangana",
    stateCode: "36",
    email: "bholeshankarfurniture@gmail.com",

    bankDetails: {
      accountName: "BHOLE SHANKAR FURNITURE",
      bankName: "HDFC Bank",
      accountNumber: "50200028131641",
      branch: "NAGOLE, HYDERABAD",
      ifscCode: "HDFC0006839",
      swiftCode: "",
    },
  };

  const customerDetails = {
    name: "Srinivasa Furnitures",
    address:
      "H NO 2-3-554, SIDDALA SHIVA SAI COMPLEX, SAI NAGAR, Alkapuri, Nagole, HYD, TS - 500068",
    gstin: "36ACXFS8111M1ZB",
  };

  const invoiceData = {
    invoiceNo: "206",
    date: "28-June-2025",
    items: [
      {
        description: "Deewan",
        quantity: 1,
        rate: 7161.017,
        per: "",
        discount: "0%",
        amount: 7161.017,
      },
    ],
    cgst: 644.4915,
    sgst: 644.4915,
    total: 8450,
  };

  const invoiceRef = useRef(null);

  const generateFiveDigitInvoiceNo = () => {
    const timePart = Date.now().toString().slice(-4); // last 4 digits
    const randomDigit = Math.floor(Math.random() * 10); // single digit
    return `INV-${timePart}${randomDigit}`; // e.g., "INV-72834"
  };

  const invoiceNo = 300 + 6;

  const downloadPDF = () => {
    const opt = {
      margin: [0, 0.2, 0, 0.2],
      filename: `Bhole-Shankar-Furnitures--Invoice-${
        invoiceNo ?? invoiceData.invoiceNo
      }.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        scrollY: 0, // Important for Next.js layout shift prevention
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    html2pdf().from(invoiceRef.current).set(opt).save();
  };

  return (
    <>
      <button
        onClick={downloadPDF}
        className="fixed top-7 right-7 mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download PDF
      </button>

      <div ref={invoiceRef} className="max-w-4xl mx-auto bg-white shadow">
        <h1 className="text-center font-bold text-xl py-2">Invoice</h1>
        <header className="justify-between items-start">
          <div className="grid grid-cols-4">
            <div className="col-span-2 border border-gray-900">
              <div className="flex flex-col items-start border-b border-gray-900 px-2 py-1">
                <h1 className="text-sm font-bold uppercase">
                  {companyDetails.name}
                </h1>
                <p className="text-sm">{companyDetails.address}</p>
                <p className="text-sm">GSTIN: {companyDetails.gstin}</p>
                <p className="text-sm">
                  State: {companyDetails.stateName}, Code:{" "}
                  {companyDetails.stateCode}
                </p>
                <p className="text-sm">Email: {companyDetails.email}</p>
              </div>
              <div className="flex flex-col items-start px-2 border-b border-gray-900 py-1">
                <h2 className="text-sm">Consignee (Ship to)</h2>
                <p className="text-sm font-bold">{customerDetails.name}</p>
                <p className="text-sm">{customerDetails.address}</p>
                <p className="text-sm">GSTIN: {customerDetails.gstin}</p>
              </div>
              <div className="flex flex-col items-start px-2 py-1">
                <h2 className="text-sm">Buyer (Bill to)</h2>
                <p className="text-sm font-bold">{customerDetails.name}</p>
                <p className="text-sm">{customerDetails.address}</p>
                <p className="text-sm">GSTIN: {customerDetails.gstin}</p>
              </div>
            </div>
            <div className="col-span-2 border-t border-r border-b border-gray-900">
              <div className="grid grid-cols-2">
                <div className="px-2 py-1">
                  <h2 className="text-sm">Invoice No</h2>
                  <p className="font-bold text-sm">
                    {invoiceNo ?? invoiceData.invoiceNo}
                  </p>
                </div>
                <div className="px-2 py-1 border-l border-gray-900">
                  <h2 className="text-sm">Date</h2>
                  <p className="font-bold text-sm">{invoiceData.date}</p>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-2 py-1 border-t border-gray-900">
                  <h2 className="text-sm">Delivery Note</h2>
                  <p className={invoiceData.deliveryNote ? "h-2" : ""}>
                    {invoiceData.deliveryNote}
                  </p>
                </div>
                <div className="px-2 py-1 border-t border-l border-gray-900">
                  <h2 className="text-sm">Mode/Terms of Payment</h2>
                  <p className={invoiceData.paymentTerms ? "h-2" : ""}>
                    {invoiceData.paymentTerms}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-2 py-1 border-t border-gray-900">
                  <h2 className="text-sm">Buyer's Ref./Order No.</h2>
                  <p className={invoiceData.orderNo ? "h-2" : ""}>
                    {invoiceData.orderNo}
                  </p>
                </div>
                <div className="px-2 py-1 border-t border-l border-gray-900">
                  <h2 className="text-sm">Other Reference</h2>
                  <p className={invoiceData.otherRef ? "h-2" : ""}>
                    {invoiceData.otherRef}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-2 py-1 border-t border-gray-900">
                  <h2 className="text-sm">Dispatched through</h2>
                  <p className={invoiceData.dispatchThrough ? "h-2" : ""}>
                    {invoiceData.dispatchThrough}
                  </p>
                </div>
                <div className="px-2 py-1 border-t border-l border-gray-900">
                  <h2 className="text-sm">Destination</h2>
                  <p className={invoiceData.destination ? "h-2" : ""}>
                    {invoiceData.destination}
                  </p>
                </div>
              </div>
              <div className="px-2 py-1 border-t border-gray-900 grid-cols-1">
                <h2 className="text-sm">Teams of Delivery</h2>
                <p className={invoiceData.deliveryTerms ? "h-2" : ""}>
                  {invoiceData.deliveryTerms}
                </p>
              </div>
            </div>
          </div>
        </header>

        <table className="w-full border border-t-0 border-collapse border-gray-900 text-sm">
          <thead>
            <tr>
              <th className="border text-left border-t-0 border-gray-900 px-2 py-1">
                S/N
              </th>
              <th className="border text-left border-t-0 border-gray-900 px-2 py-1">
                Description
              </th>
              <th className="border text-left border-t-0 border-gray-900 px-2 py-1">
                Qty
              </th>
              <th className="border text-left border-t-0 border-gray-900 px-2 py-1">
                Rate
              </th>
              <th className="border text-left border-t-0 border-gray-900 px-2 py-1">
                Per
              </th>
              <th className="border text-left border-t-0 border-gray-900 px-2 py-1">
                Disc%
              </th>
              <th className="border text-left border-t-0 border-gray-900 px-2 py-1">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, i) => (
              <tr key={i}>
                <td className="border border-t-0 border-gray-900 px-2 py-1">
                  {i + 1}
                </td>
                <td className="border border-t-0 border-gray-900 px-2 py-1">
                  {item.description}
                </td>
                <td className="border border-t-0 border-gray-900 px-2 py-1">
                  {item.quantity}
                </td>
                <td className="border border-t-0 border-gray-900 px-2 py-1">
                  ₹{item.rate.toFixed(2)}
                </td>
                <td className="border border-t-0 border-gray-900 px-2 py-1">
                  {item.per}
                </td>
                <td className="border border-t-0 border-gray-900 px-2 py-1">
                  {item.discount || "0%"}
                </td>
                <td className="text-right border border-t-0 border-gray-900 px-2 py-1">
                  ₹{item.amount.toFixed(2)}
                </td>
              </tr>
            ))}

            {invoiceData.items.length < 4 &&
              Array.from({ length: 4 - invoiceData.items.length }).map(
                (_, i) => (
                  <tr key={i}>
                    <td className="border border-t-0 border-gray-900 px-2 py-3.5"></td>
                    <td className="border border-t-0 border-gray-900 px-2 py-3.5"></td>
                    <td className="border border-t-0 border-gray-900 px-2 py-3.5"></td>
                    <td className="border border-t-0 border-gray-900 px-2 py-3.5"></td>
                    <td className="border border-t-0 border-gray-900 px-2 py-3.5"></td>
                    <td className="border border-t-0 border-gray-900 px-2 py-3.5"></td>
                    <td className="border border-t-0 border-gray-900 px-2 py-3.5"></td>
                  </tr>
                )
              )}

            <tr>
              <td className="border border-t-0 border-gray-900 px-2 py-1"></td>
              <td className="border border-t-0 border-gray-900 px-2 py-1 text-right font-semibold">
                CGST 9%
                <br />
                SGST 9%
              </td>
              <td className="border border-t-0 border-gray-900 px-2 py-1"></td>
              <td className="border border-t-0 border-gray-900 px-2 py-1"></td>
              <td className="border border-t-0 border-gray-900 px-2 py-1"></td>
              <td className="border border-t-0 border-gray-900 px-2 py-1"></td>

              <td className="text-right border border-t-0 border-gray-900 px-2 py-1 font-semibold">
                ₹{invoiceData.cgst.toFixed(2)}
                <br />₹{invoiceData.sgst.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="border border-t-0 border-gray-900 px-2 py-1"></td>
              <td className="border border-t-0 border-gray-900 px-2 py-1 text-right font-bold text-sm">
                Total Amount
              </td>
              <td className="border border-t-0 border-gray-900 px-2 py-1"></td>
              <td className="border border-t-0 border-gray-900 px-2 py-1"></td>
              <td className="border border-t-0 border-gray-900 px-2 py-1"></td>
              <td className="border border-t-0 border-gray-900 px-2 py-1"></td>

              <td className="text-right border border-t-0 border-gray-900 px-2 py-1 font-bold">
                ₹{invoiceData.total.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="border border-t-0 border-b-0 border-gray-900 p-2 pt-7">
          <p className="text-sm">Amount Chargeable (in words):</p>
          <p className="text-[16px] italic mt-1 font-bold">
            INR{" "}
            {numToWords(invoiceData.total).replace(/^./, (str) =>
              str.toUpperCase()
            )}{" "}
            only
          </p>
        </div>

        <footer className="text-sm pt-7 grid grid-cols-2 grid-rows-[300px_1fr] border border-t-0 border-gray-900 p-2">
          <div className="col-span-2 place-items-end">
            <div>
              <h3 className="text-[16px] mb-2">Company's Bank Details</h3>
              <div className="space-y-1">
                <div className="grid grid-cols-[150px_1fr] gap-2">
                  <span className="font-normal text-[13px]">
                    A/c Holder's Name
                  </span>
                  <span className="font-semibold uppercase text-[13px]">
                    : {companyDetails.bankDetails.accountName}
                  </span>
                </div>
                <div className="grid grid-cols-[150px_1fr] gap-2">
                  <span className="font-normal text-[13px]">Bank Name</span>
                  <span className="font-semibold uppercase text-[13px]">
                    : {companyDetails.bankDetails.bankName}
                  </span>
                </div>
                <div className="grid grid-cols-[150px_1fr] gap-2">
                  <span className="font-normal text-[13px]">A/c No</span>
                  <span className="font-semibold uppercase text-[13px]">
                    : {companyDetails.bankDetails.accountNumber}
                  </span>
                </div>
                <div className="grid grid-cols-[150px_1fr] gap-2">
                  <span className="font-normal text-[13px]">
                    Branch & IFSC Code
                  </span>
                  <span className="font-semibold uppercase text-[13px]">
                    : {companyDetails.bankDetails.branch} &{" "}
                    {companyDetails.bankDetails.ifscCode}
                  </span>
                </div>
                <div className="grid grid-cols-[150px_1fr] gap-2">
                  <span className="font-normal text-[13px]">SWIFT Code</span>
                  <span className="font-semibold uppercase text-[13px]">
                    : {companyDetails.bankDetails.swiftCode}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-end"></div>
          <div className="col-start-2 flex flex-col items-end justify-end w-full">
            <p>Authorised Signatory</p>
          </div>
        </footer>
      </div>
    </>
  );
}
