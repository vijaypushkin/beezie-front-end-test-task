import { cn } from "@/utils/tailwind.utils";
import Image from "next/image";
import { formatUnits } from "ethers";

type CardItemProps = {
  image: string;
  title: string;
  price: string | null;
  decimals: bigint | undefined;
  isDecimalsPending: boolean;
  decimalsError: Error | null;
  onBuy?: () => void;
  disabled?: boolean;
};

const CardItem: React.FC<CardItemProps> = ({
  image,
  title,
  price,
  onBuy,
  disabled,
  isDecimalsPending,
  decimalsError,
  decimals,
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

      <div className="flex flex-row justify-between">
        {/* Price */}
        {isDecimalsPending ? (
          <div className="h-6 w-20 bg-gray-300 rounded-md animate-pulse justify-self-end" />
        ) : decimalsError ? (
          <div className=" h-6 w-20 rounded-md bg-red-500" />
        ) : price && decimals !== undefined ? (
          <div className="text-[26px] font-semibold justify-self-end font-(family-name:--font-montserrat)">
            ${formatUnits(price, decimals)}
          </div>
        ) : null}

        {onBuy && (
          <button
            onClick={onBuy}
            disabled={disabled}
            className={cn(
              "mt-auto self-end border border-(--brand) text-(--brand) px-4 py-1.5 rounded-md transition disabled:opacity-50",
              !disabled && "hover:bg-(--brand) hover:text-black"
            )}
          >
            Buy
          </button>
        )}
      </div>
    </div>
  );
};

export { CardItem };
