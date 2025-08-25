import React from "react";
import { TemplateHolder, type Template } from "../components/TemplateHolder";
import templates from "../datas/mockTemplates";
import PageCount from "../components/PageCount";

const Pagination = ({
  perPage,
  categoryNumber,
}: {
  perPage: number;
  categoryNumber: number;
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [templatesPerPage] = React.useState(perPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
  const currentTemplates: Template[] = templates.slice(
    indexOfFirstTemplate,
    indexOfLastTemplate
  );

  let cols: number;
  if (templatesPerPage <= 4) {
    cols = templatesPerPage; // all in one row
  } else if (templatesPerPage % 2 === 0) {
    cols = templatesPerPage / 2; // even split across 2 rows
  } else {
    cols = Math.ceil(templatesPerPage / 2); // odd → first row longer
  }

  const gap =
    templatesPerPage <= 4 ? "4rem" : templatesPerPage <= 8 ? "1.5rem" : "1rem";

  return (
    <div className="pagination-container">
      <h2 className="pagination-title">Category {categoryNumber}</h2>
      <TemplateHolder
        templateData={currentTemplates}
        style={
          { "--grid-cols": cols, "--grid-gap": gap } as React.CSSProperties
        }
      />

      <PageCount
        totalTemplates={templates.length}
        templatesPerPage={templatesPerPage}
        setCurrentPage={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Pagination;
