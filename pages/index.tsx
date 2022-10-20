import Layout from "../components/Layout";
import WeatherIcon from "../components/WeatherIcon";
import erikflowers from "../maps/erikflowers.json";
import makeThings from "../maps/make-things.json";

const IndexPage = () => (
  <Layout title="Weatherstack Icons">
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mb-2">
        <h1 className="text-3xl font-bold">erikflowers</h1>
        <a href="https://erikflowers.github.io/weather-icons/">
          https://erikflowers.github.io/weather-icons/
        </a>
      </div>
      <div className="xl:grid-cols- grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {Object.keys(erikflowers).map((key, index) => {
          const value = erikflowers[key];
          return (
            <WeatherIcon
              src={`https://raw.githubusercontent.com/erikflowers/weather-icons/bb80982bf1f43f2d57f9dd753e7413bf88beb9ed/svg/wi-${value.slug}.svg`}
              key={key}
              weatherCode={key}
              slug={value.slug}
              description={value.description}
            />
          );
        })}
      </div>
      <div className="my-2">
        <h1 className="text-3xl font-bold">Make-Things</h1>
        <a href="https://github.com/Makin-Things/weather-icons">
          https://github.com/Makin-Things/weather-icons
        </a>
      </div>
      <div className="xl:grid-cols- grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {Object.keys(makeThings).map((key, index) => {
          const value = makeThings[key];
          return (
            <WeatherIcon
              src={`https://raw.githubusercontent.com/Makin-Things/weather-icons/master/animated/${value.slug}.svg`}
              key={key}
              weatherCode={key}
              slug={value.slug}
              description={value.description}
            />
          );
        })}
      </div>
    </div>
  </Layout>
);

export default IndexPage;
