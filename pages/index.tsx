import Layout from "../components/Layout";
import weatherIcons from "../maps/weather-icons.json";

const IndexPage = () => (
  <Layout title="Weatherstack Icons">
    <div className="flex items-center justify-center">
      <h1 className="mb-2 text-3xl font-bold">Weatherstack Icons</h1>
    </div>
    <div className="xl:grid-cols- grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
      {Object.keys(weatherIcons).map((key, index) => {
        const value = weatherIcons[key];
        return (
          <div className="flex flex-col items-center bg-slate-100 py-2 px-1">
            <div>
              <img
                className="h-16 w-16"
                src={`https://raw.githubusercontent.com/erikflowers/weather-icons/bb80982bf1f43f2d57f9dd753e7413bf88beb9ed/svg/wi-${value.slug}.svg`}
              />
            </div>
            <div>
              {key} - {value.slug}
            </div>
            <div>{value.description}</div>
          </div>
        );
      })}
    </div>
  </Layout>
);

export default IndexPage;
