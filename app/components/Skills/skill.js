export default function Skill({ Icon, title, discription, persent }) {
  return (
    <div className="flex flex-col justify-between  rounded-2xl shadow-md p-3 hover:cursor-pointer hover:bg-white transition-colors duration-300 bg-[#f0f1f2]">
      <div className="flex flex-col gap-3 w-full items-start">
        <div className="flex items-center gap-2">
          <Icon className="font-bold text-xl" />
          <p className="font-bold text-lg">{title}</p>
        </div>
        <p>{discription}</p>
      </div>
      <div className="flex flex-col">
        <div className="w-full flex justify-end">
          <p>{`${persent}%`}</p>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-1.5 overflow-hidden">
          <div
            className="h-1.5 bg-[#8487bf] rounded-full transition-all duration-700"
            style={{ width: `${persent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
