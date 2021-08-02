import React, { useContext } from "react";
import { TransferContext } from "../Page/TransferPage";
import TableComponent from "../../table/Table.component";
import NoDataComp from "../../no-data/NoData.component";
import "./TransferList.style.css";

const TransferList = () => {
  const { headerData } = useContext(TransferContext);

  return (
    <div className="table-list">
      {headerData.tableBody.length === 0 ? (
        <NoDataComp
          msg={headerData.errMsg === "" ? "No Data Found" : headerData.errMsg}
        />
      ) : (
        <TableComponent
          tableHeaders={headerData[`${headerData.transferText}THead`]}
          tableBody={headerData.tableBody}
        />
      )}
    </div>
  );
};
export default TransferList;
