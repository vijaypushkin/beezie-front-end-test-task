import Image from "next/image";

type CardItemProps = {
  image: string;
  title: string;
  price: string;
  onBuy?: () => void;
  disabled?: boolean;
};

const CardItem = ({ image, title, price, onBuy, disabled }: CardItemProps) => {
  return (
    <div className="rounded-2xl overflow-hidden flex flex-col">
      {/* Image */}
      <div className="aspect-[3/4] rounded-lg overflow-hidden bg-white mb-4">
        <Image
          src={image}
          alt={title}
          width={300}
          height={400}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <div className="text-sm font-medium leading-tight mb-2">{title}</div>

      {/* Price */}
      <div className="text-lg font-semibold">${price}</div>

      {/* Buy button (optional) */}
      {onBuy && (
        <button
          onClick={onBuy}
          disabled={disabled}
          className="mt-3 bg-yellow-brand hover:bg-yellow-400 text-black font-medium py-2 px-4 rounded-md disabled:opacity-40"
        >
          Buy
        </button>
      )}
    </div>
  );
};

export { CardItem };
