import { useEffect, useState } from "react";
import Container from "../../components/container/container";
import { getSample } from "../../service/api";
import { ISampleWork } from "../../type/type";
import SampleCardItem from "../../components/sample-card-item/sample-card-item";
import { Fade } from "react-awesome-reveal";
import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import CardSkeleton from "../../components/card-skeleton/card-skeleton";

const SampleWork = () => {
  const [sample, setSample] = useState<ISampleWork[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
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

    axios("https://sarirniroo.ir/sarir/cards.php").then((result) =>
      console.log(result.data)
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const totalPages = Math.ceil(sample.length / itemsPerPage);

  const currentProducts = sample.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event: any, page: number) => {
    setCurrentPage(page);
    console.log(event);
    window.scrollTo({ top: 0, behavior: "smooth" }); // اسکرول به بالای صفحه هنگام تغییر صفحه
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

      <Stack
        spacing={2}
        direction="row-reverse"
        justifyContent="center"
        marginTop={10}
      >
        <Pagination
          count={totalPages} // تعداد کل صفحات
          page={currentPage} // صفحه فعلی
          onChange={handlePageChange} // تغییر صفحه
          color="primary"
        />
      </Stack>
    </Container>
  );
};

export default SampleWork;