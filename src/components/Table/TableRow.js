import React from "react";

function TableRow({ item }) {
  return (
    <>
      <tr>
        <th>{item.platform}</th>
        <th>{item.maker}</th>
        <th>{item.divices}</th>
        <th>{item.divicesActive}</th>
        <th>{item.activeNotInUse}</th>
        <th>{item.noActive}</th>
      </tr>
    </>
  );
}

export default TableRow;
