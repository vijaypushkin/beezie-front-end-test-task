import Image from "next/image";

type CardItemProps = {
  image: string;
  title: string;
  price: string | null;
  onBuy?: () => void;
  disabled?: boolean;
};

const CardItem: React.FC<CardItemProps> = ({
  image,
  title,
  price,
  onBuy,
  disabled,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden flex flex-col p-2">
      {/* Image */}
      <div className="aspect-square rounded-lg overflow-hidden bg-white mb-4">
        <Image
          src={image}
          alt={title}
          width={300}
          height={400}
          unoptimized
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <div className="text-sm font-medium leading-tight mb-2 line-clamp-3 min-h-[2.5rem] whitespace-pre-line">
        {title.split("#").join("\n#")}
      </div>

      {/* Price */}
      {price ? (
        <div className="text-lg font-semibold justify-self-end">${price}</div>
      ) : (
        <div className="h-6 w-20 bg-gray-300 rounded-md animate-pulse  justify-self-end" />
      )}
    </div>
  );
};

export { CardItem };
