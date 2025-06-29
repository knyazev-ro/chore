import { useMemo } from "react";
import { useTable, usePagination } from "react-table"; // highlight-line
import ImageCell from "./Cells/ImageCell";
import { ChevronDoubleDownIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Pagination from "@mui/material/Pagination";

export default function NDiskTable() {
  const data = useMemo(
    () => [
      {
        name: "image_001.png",
        extension: "png",
        original_file_size: "2.3 MB",
        compressed_file_size: "840 KB",
        compression_ratio: "0.35",
        status_label: "Сжато",
        author: {
          name: "Иван Петров",
        },
      },
      {
        name: "pic_final.jpeg",
        extension: "jpeg",
        original_file_size: "5.1 MB",
        compressed_file_size: "1.2 MB",
        compression_ratio: "0.24",
        status_label: "Сжато",
        author: {
          name: "Анна Смирнова",
        },
      },
      {
        name: "broken_upload.jpg",
        extension: "jpg",
        original_file_size: "3.0 MB",
        compressed_file_size: "-",
        compression_ratio: "-",
        status_label: "Ошибка",
        author: {
          name: "User X",
        },
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Файл",
        accessor: "name",
        Cell: ({ row }) => <span className="px-2">{row.original.name}</span>,
      },
      {
        Header: "Оригинал",
        accessor: "original_file_path",
        Cell: ({ row }) => (
          <ImageCell
            image={
              "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
            }
          />
        ),
      },
      {
        Header: "Сжатое представление",
        accessor: "compressed_file_path",
        Cell: ({ row }) => (
          <ImageCell
            image={
              "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
            }
          />
        ),
      },
      {
        Header: "Расширение",
        accessor: "extension",
      },
      {
        Header: "Размер (до)",
        accessor: "original_file_size",
      },
      {
        Header: "Размер (после)",
        accessor: "compressed_file_size",
      },
      {
        Header: "Сжатие",
        accessor: "compression_ratio",
      },
      {
        Header: "Статус",
        accessor: "status_label",
        Cell: ({ value }) => (
          <span
            className={
              value === "Сжато"
                ? "text-green-600 font-semibold"
                : value === "Ошибка"
                ? "text-red-600 font-semibold"
                : "text-yellow-600 font-semibold"
            }
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Пользователь",
        accessor: "author.name",
      },
    ],
    []
  );

  const initialState = {
    pageSize: 10,
    pageIndex: 0,
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data, initialState }, usePagination);

  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="w-full overflow-x-scroll custom-scroll relative">
      <table
        {...getTableProps()}
        className="bg-blue-500 border-blue-700 border-2 min-w-full"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="text-stone-100 comfortaa p-2 text-sm text-center"
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
      <div className="pagination comfortaa text-sm">
        <div className="flex items-center py-1 w-full justify-center gap-2">
            <Pagination count={10} variant="outlined" shape="rounded" />
          {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <ChevronDoubleDownIcon className="w-5 rotate-90"/>
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <ChevronDownIcon className="w-5 rotate-90"/>

          </button>{" "}
          <div className="flex items-center gap-1">
            {pages.map((e, idx) => (
              <div
                className={`p-2 w-8 h-8 text-center items-center justify-center flex cursor-pointer rounded-md comfortaa text-sm border bg-blue-500 text-stone-100`}
              >
                {e}
              </div>
            ))}
          </div>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
                        <ChevronDownIcon className="w-5 -rotate-90"/>

          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
                        <ChevronDoubleDownIcon className="w-5 -rotate-90"/>

          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span> */}
          <span>
            | Перейти к:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Показать {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
