import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="responsive">
      <div className="shadow-xl p-6 rounded-lg bg-white animate-pulse">
        <Skeleton className="aspect-square w-full" />
        <div className="mt-4">
          <Skeleton width="60%" height={20} />
          <Skeleton className="my-4" height={12} count={2} />
          <div className="flex items-center">
            <Skeleton width={90} height={30} />
            {/* <Skeleton circle width={23} height={23} className="ml-2" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;