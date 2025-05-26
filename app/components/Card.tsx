"use client";

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};
export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer border-2 border-[#00f2ff] rounded-xl p-6 bg-black bg-opacity-40 transition-shadow hover:shadow-[0_0_24px_#00f2ff] text-[#00f2ff] hover:text-[#ffffff] max-w-sm"
    >
      <div className="relative z-10">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 tracking-wider">{title}</h3>
        <p className="text-sm text-[#00f2ff]/80 group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};
