import ProductBox from "../components/custom/ProductBox";

export default function Home() {
  return (
    <section className="container py-5 space-y-10">
      <h3 className="section-title">Payday Deals</h3>
      <div className="space-y-10">
        <ul className="grid grid-cols-4">
          <li>
            <ProductBox />
          </li>
        </ul>
        <div className="flex items-center justify-center">
          <button className="btn">View All</button>
        </div>
      </div>
    </section>
  );
}
