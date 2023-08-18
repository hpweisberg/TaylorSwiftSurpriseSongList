import { trackList, songsLeft } from "../Data/SongData";

const SongList = ({ tableSelect }) => {
  const repeatedTitles = {}
  for (let i = 0; i < trackList.length; i++) {
    const track = trackList[i];
    if (repeatedTitles[track.name]) {
      repeatedTitles[track.name] += 1;
    } else {
      repeatedTitles[track.name] = 1;
    }
  }

  const newestFirst = trackList.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  if (tableSelect === 'played') {


    return (
      <section className="w-full overflow-x-auto flex justify-center">
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] overflow-x-auto">
          <table className="w-full text-left bg-slate-800/20 rounded-lg shadow-xl">
            <thead className="text-lg">
              <tr>
                <th className="py-4 px-2">Date</th>
                <th className="px-2">Location</th>
                <th className="px-2">Song</th>
                <th className="px-2">Album</th>
                <th className="px-2">Repeated</th>
              </tr>
            </thead>
            <tbody className="bg-slate-600/25">
              {newestFirst.map((track, index) => (
                <tr key={index} className="odd:bg-slate-600/25">
                  <td className="py-4 px-2 md:w-[13%]">{track.date}</td>
                  <td className="w-[19%] px-2">{track.location}</td>
                  <td className="w-[40%] px-2">{track.name}</td>
                  <td className="px-2">{track.album}</td>
                  <td className="px-2">{repeatedTitles[track.name] > 1 ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full overflow-x-auto flex justify-center">
      <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] overflow-x-auto">
        <table className="w-full text-left bg-slate-800/20 rounded-lg shadow-xl">
          <thead className="text-lg">
            <tr>
              <th className="px-4 py-4">Song</th>
              <th className="px-4">Album</th>
            </tr>
          </thead>
          <tbody className="bg-slate-600/25">
            {songsLeft.map((track, index) => (
              <tr key={index} className="odd:bg-slate-600/25">
                <td className="w-[50%] px-4 py-2">{track.name}</td>
                <td className="px-4 py-4">{track.album}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default SongList;