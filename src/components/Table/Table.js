import React, { useState } from "react";
import TableRow from "./TableRow";
import { TableData } from "./TableData";
import * as BsIcons from "react-icons/bs";
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
  const [sortBy, setSortBy] = useState({ state: false, field: "" });
  function sort(id) {
    tableRow.sort((prev, next) => {
      if (sortBy.state) {
        if (prev[id] < next[id]) return 1;
        if (prev[id] > next[id]) return -1;
      } else {
        if (prev[id] < next[id]) return -1;
        if (prev[id] < next[id]) return 1;
      }
    });
    setSortBy({ state: !sortBy.state, field: id });
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
                    {sortBy.state && sortBy.field == head.sort ? (
                      <BsIcons.BsArrowDown />
                    ) : (
                      <BsIcons.BsArrowUp />
                    )}
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
