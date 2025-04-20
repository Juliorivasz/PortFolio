import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useTheme } from "../../context/useTheme";

interface Props {
  totalPages: number;
  currentPage: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export default function PaginationGeneric({ totalPages, currentPage, onChange }: Props) {
  const { themeState } = useTheme();
  const isDark = themeState.theme === "DarkTheme";

  return (
    <Stack
      spacing={2}
      className="mt-4 items-center w-full">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onChange}
        color="primary"
        variant="outlined"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            color: isDark ? "#333" : "#fff",
            borderColor: isDark ? "#cbd5e1" : "#555",
            backgroundColor: isDark ? "#fff" : "#1f2937",
            "&.Mui-selected": {
              backgroundColor: isDark ? "#2563eb" : "#3b82f6",
              color: "#fff",
              borderColor: isDark ? "#2563eb" : "#3b82f6",
            },
            "&:hover": {
              backgroundColor: isDark ? "#e0e7ff" : "#374151",
            },
          },
        }}
      />
    </Stack>
  );
}
