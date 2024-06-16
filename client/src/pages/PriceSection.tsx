const PriceSection = () => {
  return (
    <>
      <div className="price-section">
        <h2 className="price-title">PRICELIST</h2>
        <div className="price-container">
          <div className="price-category">
            <h3>Cut</h3>
            <ul>
              <li>
                <span>Hair Cut and Style</span>
                <span>$25.00</span>
              </li>
              <li>
                <span>Hair Wash, Cut and Style</span>
                <span>$35.00</span>
              </li>
              <li>
                <span>Hair Trim</span>
                <span>$16.00</span>
              </li>
            </ul>
          </div>
          <div className="price-category">
            <h3>Waxing</h3>
            <ul>
              <li>
                <span>Full Body Waxing</span>
                <span>$120.00</span>
              </li>
              <li>
                <span>Half arms, half legs waxing</span>
                <span>$60.00</span>
              </li>
              <li>
                <span>Upper lip</span>
                <span>$10.00</span>
              </li>
              <li>
                <span>Eyebrow</span>
                <span>$15.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* second  */}
      <div className="price-section">
        {/* <h2 className="price-title">PRICELIST</h2> */}
        <div className="price-container">
          <div className="price-category">
            <h3>Manicure</h3>
            <ul>
              <li>
                <span>Nail painting</span>
                <span>$25.00</span>
              </li>
              <li>
                <span>Nail Trim and Paint</span>
                <span>$35.00</span>
              </li>
              <li>
                <span>Nail Trim, Paint and Nail art</span>
                <span>$50.00</span>
              </li>
            </ul>
          </div>
          <div className="price-category">
            <h3>Facials</h3>
            <ul>
              <li>
                <span>Basic facial</span>
                <span>$120.00</span>
              </li>
              <li>
                <span>Super skin rejuvenation</span>
                <span>$60.00</span>
              </li>
              <li>
                <span>Golden Facial</span>
                <span>$10.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceSection;
