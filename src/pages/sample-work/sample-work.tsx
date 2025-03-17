import { useEffect, useState } from "react";
import Container from "../../components/container/container";
import { getSample } from "../../service/api";
import { ISampleWork } from "../../type/type";
import SampleCardItem from "../../components/sample-card-item/sample-card-item";
import { Fade } from "react-awesome-reveal";
import CardSkeleton from "../../components/card-skeleton/card-skeleton";
import ReactPaginate from "react-paginate";

const SampleWork = () => {
  const [sample, setSample] = useState<ISampleWork[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const result = await getSample();
        setSample(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const totalPages = Math.ceil(sample.length / itemsPerPage);

  const currentProducts = sample.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <h1 className="mt-10 text-3xl text-neutral-700">
        نمونه کارهای <span className="text-[#018181]">سریر نیرو</span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-6">
        {isLoading
          ? [...Array(itemsPerPage)].map((_, i) => (
              <Fade key={i} duration={650}>
                <CardSkeleton />
              </Fade>
            ))
          : currentProducts.map((item) => (
              <Fade key={item.id} duration={650}>
                <SampleCardItem {...item} />
              </Fade>
            ))}
      </div>

      <div className="mt-10 flex justify-center">
        <ReactPaginate
          previousLabel={"قبلی"}
          nextLabel={"بعدی"}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={"flex gap-2"}
          activeClassName={"bg-blue-500 text-white rounded px-3 py-1"}
          pageClassName={"border rounded px-3 py-1 cursor-pointer"}
          previousClassName={"border rounded px-3 py-1 cursor-pointer"}
          nextClassName={"border rounded px-3 py-1 cursor-pointer"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
        />
      </div>
    </Container>
  );
};

export default SampleWork;
