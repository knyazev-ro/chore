import { useMemo } from "react";
import { useTable } from "react-table";

export default function NDiskTable() {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: <div className="">Col 1</div>,
        accessor: "col1", // accessor is the "key" in the data
        Cell: ({row}) => <div className="px-2">{row.original.col1}</div>
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="bg-blue-500 border-blue-700 border-2 overflow-hidden rounded-xs">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="text-stone-100 comfortaa p-2 border-blue-700 border-b-2 border-r-2 text-sm text-center"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
          
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="px-2 py-1 text-center comfortaa text-sm bg-stone-100"
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
