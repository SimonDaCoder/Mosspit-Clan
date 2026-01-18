export const GalleryImage = ({ src }: { src: string }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
      <img
        src={src}
        alt={src}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
      />
    </div>
  );
};
