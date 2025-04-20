import { useState } from "react";
import { certificates } from "../../../helpers/certificates";
import NavCategory from "./Certificate/NavCategory";
import { ListCertificate } from "./Certificate/ListCertificate";
import PaginationGeneric from "../PaginationGeneric";
import { useResponsiveItemsPerPage } from "../../hooks/useResponsiveItemsPerPage";

export type Category = keyof typeof certificates;

export const Certificates = () => {
  const [value, setValue] = useState<Category>("careers");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = useResponsiveItemsPerPage(2, 4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCertificates = certificates[value]?.slice(indexOfFirstItem, indexOfLastItem) || [];

  const totalPages = Math.ceil(certificates[value]?.length / itemsPerPage || 1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const handleCategoryChange = (newValue: Category) => {
    setValue(newValue);
    setCurrentPage(1);
  };

  return (
    <section className="w-full md:w-1/2">
      <div className="flex justify-center mb-8 items-center flex-col gap-6 overflow-hidden px-4">
        <NavCategory
          value={value}
          setValue={handleCategoryChange}
        />
        <ListCertificate currentCertificates={currentCertificates} />
        <PaginationGeneric
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </section>
  );
};
