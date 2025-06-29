import Pagination from "@mui/material/Pagination";

export default function TablePagination({
  pageIndex,
  pageSize,
  gotoPage,
  setPageSize,
  pageCount,
}) {
  return (
    <div className="pagination comfortaa text-sm">
      <div className="flex items-center py-1 w-full justify-center gap-4">
        <Pagination
          showFirstButton
          showLastButton
          count={pageCount}
          variant="outlined"
          shape="rounded"
          page={pageIndex + 1}
          onChange={(event, value) => gotoPage(value-1)}
        />

        <div className="flex items-center gap-1">
          <span>Перейти к:</span>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            min={1}
            max={pageCount}
            onChange={(e) => {
              const page = Number(e.target.value) - 1;
              if (!isNaN(page) && page >= 0 && page < pageCount) {
                gotoPage(page);
              }
            }}
            className="border px-1 rounded w-16"
          />
        </div>

        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="border px-2 py-1 rounded"
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Показать {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
