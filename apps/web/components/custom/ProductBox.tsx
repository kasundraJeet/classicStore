import Link from "next/link";

export default function ProductBox() {
  return (
    <div className="product-box">
      <div className="product-img"></div>
      <div className="space-y-3">
        <ul className="flex items-center gap-2">
          <li>
            <Link href="/" className="color-btn"></Link>
          </li>
          <li>
            <Link href="/" className="color-btn"></Link>
          </li>
        </ul>
        <div className="space-y-1">
          <h5 className="text-xl text-black tracking-wide">Denim Skirt</h5>
          <div className="flex items-center gap-2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1229_17)">
                <path
                  d="M7.49934 11.4529L3.49562 13.5041L4.26122 9.16009L1.02173 6.08261L5.49816 5.448L7.49934 1.49561L9.50189 5.448L13.9783 6.08261L10.7388 9.16009L11.5031 13.5041L7.49934 11.4529Z"
                  fill="#EF9854"
                />
                <path
                  d="M11.5028 14.5C11.3407 14.5 11.1772 14.4628 11.0273 14.3858L7.49905 12.5776L3.97076 14.3858C3.62611 14.5624 3.20925 14.5332 2.89456 14.3101C2.57988 14.0871 2.42186 13.7101 2.48861 13.337L3.16293 9.50806L0.307606 6.79569C0.0297022 6.53148 -0.071106 6.13585 0.0487741 5.77473C0.168654 5.41361 0.488789 5.15206 0.87295 5.09763L4.8181 4.53869L6.5836 1.05496C6.75525 0.715078 7.1108 0.5 7.50041 0.5C7.89002 0.5 8.24422 0.715078 8.41722 1.05496L10.1814 4.53869L14.1265 5.09763C14.512 5.15206 14.8308 5.41494 14.9507 5.77473C15.0706 6.13452 14.9711 6.53148 14.6919 6.79569L11.8379 9.50673L12.5122 13.3357C12.5776 13.7087 12.4209 14.0871 12.1063 14.3088C11.9278 14.4349 11.718 14.4987 11.5055 14.4987L11.5028 14.5ZM7.49905 10.4573C7.66252 10.4573 7.826 10.4958 7.97448 10.5715L10.1459 11.6841L9.73182 9.3275C9.6746 9.00488 9.78495 8.6743 10.0261 8.44595L11.782 6.7771L9.35447 6.43324C9.02207 6.38677 8.73463 6.18231 8.58478 5.88891L7.49905 3.74476L6.41332 5.88891C6.26483 6.18231 5.97739 6.38677 5.64363 6.43324L3.21606 6.7771L4.97203 8.44595C5.21315 8.6743 5.32214 9.00488 5.26628 9.3275L4.85215 11.6841L7.02362 10.5715C7.1721 10.4958 7.33558 10.4573 7.49905 10.4573Z"
                  fill="#060707"
                />
              </g>
              <defs>
                <clipPath id="clip0_1229_17">
                  <rect
                    width="15"
                    height="14"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="text-sm">(10)</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-black opacity-50 text-xl tracking-wide">$139.90</p>
          <p className="text-black text-xl tracking-wide">$70.00</p>
        </div>
      </div>
    </div>
  );
}
