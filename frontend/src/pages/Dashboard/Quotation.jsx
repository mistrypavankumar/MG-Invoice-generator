const generateRandomHexChar = () => {
  return "Q-" + Math.random().toString(16).slice(2, 8).toUpperCase();
};

export default function Quotation() {
  const quotationData = {
    quotationNo: generateRandomHexChar(),
    date: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),

    validity: "15 days",
    items: [
      {
        description: "Plywood - 19mm (Century / Greenply)",
        quantity: "-",
        rate: "-",
        amount: "-",
      },
      {
        description: "Laminate (Greenlam / Virgo)",
        quantity: "-",
        rate: "-",
        amount: "-",
      },
      {
        description: "Hinges (Godrej / Hitachi)",
        quantity: "-",
        rate: "-",
        amount: "-",
      },
      {
        description: "Drawer Channel (Godrej / Hitachi)",
        quantity: "-",
        rate: "-",
        amount: "-",
      },
      {
        description: "Kitchen Basket - SS (Godrej / Hitachi)",
        quantity: "-",
        rate: "-",
        amount: "-",
      },
      {
        description: "Edge Beading (Rehau)",
        quantity: "-",
        rate: "-",
        amount: "-",
      },
    ],
    total: "-",
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow h-screen">
      <header className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-xl font-bold">BHOLE SHANKAR FURNITURE</h1>
          <p>H NO 12-1-511, PLOT NO 159, ANAND NAGAR</p>
          <p>BANDLAGUDA, NAGOLE, HYD, TS – 500068</p>
          <p>GSTIN/UIN: 36BMCPM5653E1Z3</p>
          <p>State Name: Telangana, Code: 36</p>
          <p>E-Mail: bholeshankarfurniture@gmail.com</p>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-bold">QUOTATION</h2>
          <p>No: {quotationData.quotationNo}</p>
          <p>Date: {quotationData.date}</p>
        </div>
      </header>

      <section className="mb-4">
        <p>
          <strong>To:</strong> M. Dayakar Gupta, Hyderabad, Telangana
        </p>
      </section>

      <table className="w-full border border-collapse mb-4 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">S/N</th>
            <th className="border px-2 py-1">Description</th>
            <th className="border px-2 py-1">Qty</th>
            <th className="border px-2 py-1">Rate</th>
            <th className="border px-2 py-1">Amount</th>
          </tr>
        </thead>
        <tbody>
          {quotationData.items.map((item, i) => (
            <tr key={i}>
              <td className="border px-2 py-1">{i + 1}</td>
              <td className="border px-2 py-1">{item.description}</td>
              <td className="border px-2 py-1">{item.quantity}</td>
              <td className="border px-2 py-1">₹{item.rate}</td>
              <td className="border px-2 py-1">₹{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right mb-4">
        <p className="font-bold">
          Total Estimate: ₹{quotationData.total.toLocaleString()}
        </p>
        <p className="text-sm italic mt-1"></p>
      </div>
      <div className="mt-4 text-sm bg-gray-100 p-3 rounded">
        <p>
          <strong>Note:</strong>
        </p>
        <ul className="list-disc pl-6">
          <li>Frame work ₹800/-</li>
          <li>Box type work ₹1100/-</li>
        </ul>
      </div>

      <footer className="text-sm mt-7">
        <p>
          <strong>Bank:</strong> HDFC Bank, A/C No: 50200028131641, IFSC:
          HDFC0006839
        </p>
        <p>
          <strong>Branch:</strong> Nagole, Hyderabad
        </p>
        <p className="mt-4 text-right">Authorised Signatory</p>
      </footer>
    </div>
  );
}
