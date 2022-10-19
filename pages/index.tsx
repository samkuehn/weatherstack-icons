import Layout from "../components/Layout";
import weatherIcons from "../maps/weather-icons.json";

const IndexPage = () => (
  <Layout title="Weatherstack Icons">
    <div className="flex items-center justify-center">
      <h1 className="mb-2 text-3xl font-bold">Weatherstack Icons</h1>
    </div>
    {Object.keys(weatherIcons).map((key, index) => {
      const value = weatherIcons[key];
      return (
        <div className="flex">
          {key} - {value.slug} - {value.description}
          <img
            className="h-8 w-8"
            src={`https://raw.githubusercontent.com/erikflowers/weather-icons/bb80982bf1f43f2d57f9dd753e7413bf88beb9ed/svg/wi-${value.slug}.svg`}
          />
        </div>
      );
    })}
  </Layout>
);

export default IndexPage;
