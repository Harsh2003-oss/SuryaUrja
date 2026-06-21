export default function SolarStory() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Go Solar?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-red-50 p-6 rounded-xl">
            <h3 className="font-bold">
              Step 1
            </h3>
            <p>
              Electricity usage increases.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl">
            <h3 className="font-bold">
              Step 2
            </h3>
            <p>
              Monthly bills keep rising.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="font-bold">
              Step 3
            </h3>
            <p>
              Install rooftop solar.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="font-bold">
              Step 4
            </h3>
            <p>
              Enjoy long-term savings.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}