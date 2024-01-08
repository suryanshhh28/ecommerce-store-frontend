const Loader = () => {
  return (
    <section className="loader">
      <div></div>
    </section>
  );
};

interface SkeletonProps {
  width?: string;
  count?: number;
}

export const Skeleton = ({ width = "unset", count = 3 }: SkeletonProps) => {
  const skeletions = Array.from({ length: count }, (_, idx) => (
    <div key={idx} className="skeleton-shape"></div>
  ));

  return (
    <div className="skeleton-loader" style={{ width: width }}>
      {skeletions}
    </div>
  );
};

export default Loader;
