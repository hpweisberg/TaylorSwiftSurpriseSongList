/* eslint-disable react/prop-types */
const SongBtn = ({handleSelectChange}) => {
  return (
    <div className="flex gap-6">
      <button className="w-[100px] h-10 border-2 border-slate-600 text-lg font-bold hover:bg-slate-700 hover:text-slate-100 transition-colors duration-300"
      onClick={() => handleSelectChange('played')}>Played</button>
      <button className="w-[100px] h-10 border-2 border-slate-600 text-lg font-bold hover:bg-slate-700 hover:text-slate-100 transition-colors duration-300"
      onClick={() => handleSelectChange('unplayed')}>Unplayed</button>
    </div>
  );
}

export default SongBtn;