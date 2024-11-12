export default function ProductPage() {
  return (
    <section className="py-5 container max-w-[1020px]">
      <div className="w-full grid grid-cols-2 items-center gap-10">
        <div className="product-page-img"></div>
        <div className="border border-solid border-black py-8 px-5 space-y-6 h-fit">
          <h1 className="text-2xl tracking-wide">Denim Skirt</h1>
          <div className="flex items-center gap-2">
            <p className="text-black opacity-50 text-xl tracking-wide">
              $139.90
            </p>
            <p className="text-black text-xl tracking-wide">$70.00</p>
          </div>
          <div className="space-y-2 product-page">
            <p className="text-black text-base">Options:</p>
            <ul className="flex items-center gap-2">
              <li>
                <button className="color-btn"></button>
              </li>
              <li>
                <button className="color-btn"></button>
              </li>
            </ul>
          </div>
          <div className="space-y-2 product-page">
            <p className="text-black text-base">Size:</p>
            <ul className="flex items-center gap-2">
              <li>
                <button className="size-btn">S</button>
              </li>
              <li>
                <button className="size-btn">M</button>
              </li>
            </ul>
          </div>
          <div className="space-y-2 product-page">
            <p className="text-black text-base">Quantity:</p>
            <div className="flex items-stretch border border-solid border-black w-fit">
                <button>-</button>
                <input type="number" className="bg-transparent" />
                <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
