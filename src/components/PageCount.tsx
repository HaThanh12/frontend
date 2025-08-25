type PageCountProps = {
  totalTemplates: number;
  templatesPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
};

const PageCount = ({
  totalTemplates,
  templatesPerPage,
  currentPage,
  setCurrentPage,
}: PageCountProps) => {
  const totalPages = Math.ceil(totalTemplates / templatesPerPage);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="page-count">
      {/* Prev Button */}
      <button
        className="page-count-btn"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          className={`page-count-btn ${currentPage === page ? "active" : ""}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="page-count-btn"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default PageCount;
