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
    <div className="overflow-hidden flex flex-col mb-[30px] md:mb-0">
      {/* Image */}
      <div className="aspect-square rounded-2xl overflow-hidden bg-white mb-4">
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
      <div className=" font-normal leading-tight mb-2 line-clamp-3 min-h-[2.5rem] whitespace-pre-line">
        {title.split("#").join("\n#")}
      </div>

      {/* Price */}
      {price ? (
        <div className="text-[26px] font-semibold justify-self-end font-(family-name:--font-montserrat)">
          ${price}
        </div>
      ) : (
        <div className="h-6 w-20 bg-gray-300 rounded-md animate-pulse  justify-self-end" />
      )}
    </div>
  );
};

export { CardItem };
