import React, { useState } from "react";
import TableRow from "./TableRow";
import { TableData } from "./TableData";
import "bootstrap/dist/css/bootstrap.min.css";

function Table() {
  const tableColumns = [
    {
      title: "Платформа",
      sort: "platform",
    },
    {
      title: "Производитель",
      sort: "maker",
    },
    {
      title: "Всего устройств",
      sort: "divices",
    },
    {
      title: "Активных",
      sort: "divicesActive",
    },
    {
      title: "Активных (not inUse)",
      sort: "activeNotInUse",
    },
    {
      title: "Неактивных",
      sort: "noActive",
    },
  ];
  const [tableRow, setTableData] = useState(TableData);
  function sort(id) {
    tableRow.sort((prev, next) => {
      if (prev[id] < next[id]) return -1;
      if (prev[id] < next[id]) return 1;
    });
    setTableData([...tableRow]);
  }

  return (
    <>
      <div className="container">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              {tableColumns.map((head, index) => {
                return (
                  <th scope="col" onClick={() => sort(head.sort)} key={index}>
                    {head.title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableRow.map((item, index) => {
              return <TableRow item={item} key={index} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
