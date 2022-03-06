import React from "react";

const InvoiceCard = ({ fontSize, cardTitle, cardBody, cardBodyStyle }) => {
  return (
    <div className="h-[110px] w-full md:w-[250px] border-2 bordre-slate-400 rounded-md p-4">
      <div
        className="w-full h-full flex flex-col
      justify-between"
      >
        <h3 className={`text-slate-500 text-[14px] md:text-base`}>
          {cardTitle}
        </h3>
        <p className={`text-[15px] font-medium ${cardBodyStyle}`}>{cardBody}</p>
      </div>
    </div>
  );
};

export default InvoiceCard;
