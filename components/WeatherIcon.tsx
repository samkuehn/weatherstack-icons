const WeatherIcon = ({ src, key, slug, description }) => (
  <div className="flex flex-col items-center rounded border border-slate-400 bg-slate-100 py-2 px-1">
    <div>
      <img className="h-16 w-16" src={src} />
    </div>
    <div className="text-sm font-thin">{key}</div>
    <div className="text-xs font-light">{slug}</div>
    <div className="text-xs">{description}</div>
  </div>
);
export default WeatherIcon;
