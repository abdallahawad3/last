const Mobile = () => {
  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">الموبايل</div>
        <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
          <span className="material-icons">menu</span>
        </button>
      </div>
    </div>
  );
};

export default Mobile;
