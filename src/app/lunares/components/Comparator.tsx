export const Comparator = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-6 h-auto md:h-96">
        <div className="w-full md:w-1/2 flex flex-col">
          <img
            src="/images/lunares/antes.png"
            alt="antes"
            className="w-full h-64 md:h-full object-cover rounded-t-xl md:rounded-t-xl md:rounded-tr-none"
          />
          <div className="bg-in-pink rounded-b-xl py-2">
            <p className="text-center font-semibold text-in-title-base/85">Antes</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <img
            src="/images/lunares/despues.png"
            alt="después"
            className="w-full h-64 md:h-full object-cover rounded-t-xl md:rounded-t-xl md:rounded-tl-none"
          />
          <div className="bg-in-pink rounded-b-xl py-2">
            <p className="text-center font-semibold text-in-title-base/85">Después</p>
          </div>
        </div>
      </div>
    </div>
  );
};