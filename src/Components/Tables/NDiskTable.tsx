import { useEffect, useMemo, useState } from "react";
import { useTable, usePagination } from "react-table"; // highlight-line
import ImageCell from "./Cells/ImageCell";
import {
  ChevronDoubleDownIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Pagination from "@mui/material/Pagination";
import TablePagination from "./TablePagination";
import api from "../../api/api";

export default function NDiskTable() {

const [channelHasBeenUpdated, setChannelHasBeenUpdated] = useState(false);

  const [pageData, setPageData] = useState({
    perpage: localStorage.getItem("perpage") ?? 10,
    page: localStorage.getItem("page") ?? 0,
    sortby: localStorage.getItem("sortby") ?? "id",
    sortdir: localStorage.getItem("sortdir") ?? "asc",
    filters: localStorage.getItem("filters") ?? null,
    pagecount: null,
  });

  const [data, setData] = useState([]);

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
        Cell: ({ row }) => {
          return (
            <ImageCell
            metadata={row.original.metadata}
            extension={row.original.extension}
            size={row.original.original_file_size}
              name={row.original.name}
              id={row.original.id}
              image={row.original.url_original_file_path}
            />
          );
        },
      },
      {
        Header: "Сжатое представление",
        accessor: "compressed_file_path",
        Cell: ({ row }) => {
          return (
            <ImageCell
            metadata={row.original.metadata}
            extension={row.original.extension}
            size={row.original.compressed_file_size}
              name={row.original.name}
              id={row.original.id}
              image={row.original.url_compressed_file_path}
            />
          );
        },
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
        id: 'status',
        Cell: ({row, value }) => {
          return (<span
            className={
              row.original.status === 1
                ? "text-green-600 font-semibold"
                :  row.original.status === 2
                ? "text-red-600 font-semibold"
                : "text-yellow-600 font-semibold"
            }
          >
            {value}
          </span>
        )},
      },
      {
        Header: "Пользователь",
        accessor: "author.name",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data});


  const updateTableData = async () => {
    return await api
      .get("/ndisk/compressed-images", {
        params: pageData,
      })
      .then((response) => {
        setData(response.data.data);
        setPageData({...pageData, pagecount:response.data.last_page})
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    updateTableData();
  }, [pageData.page, pageData.perpage, channelHasBeenUpdated]); // следим за изменениями

  const gotoPage = (value) => {
    localStorage.setItem("page", value + 1);
     setPageData((prev) => ({ ...prev, page: value + 1 }));
    // updateTableData();
  };

  const setPageSize = (value) => {
    localStorage.setItem("perpage", value);
      setPageData((prev) => ({ ...prev, perpage: value }));
    // updateTableData();
  };

useEffect(() => {
  const channel = window.Echo.channel('ndisk-compression')
    .listen('.ndisk.compression', (e) => {
      setChannelHasBeenUpdated(p => !p);
    });

  return () => {
    channel.stopListening('.ndisk.compression');
    window.Echo.leave('ndisk-compression');
  };
}, []); // только один раз при монтировании

  return (
    <div className="w-full h-full relative flex flex-col">
        <div className="border-2 border-blue-500 flex flex-col max-h-[calc(100vh-8rem)] h-[calc(100vh-8rem)] overflow-y-scroll custom-scroll">
      <table
        {...getTableProps()}
        className="bg-blue-500 min-w-full"
      >
        <thead
            className="sticky top-0 bg-blue-500 z-10"
        >
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
        </div>
      <TablePagination
        pageIndex={pageData.page-1}
        pageSize={pageData.perpage}
        setPageSize={setPageSize}
        gotoPage={gotoPage}
        pageCount={pageData.pagecount}
      />
    </div>
  );
}
