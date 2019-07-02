import React from "react";
const ProductTabs = () => {
  return (
    <section className="tabs">
      <div className="tabs__headers">
        <div className="tabs__header active">Description</div>
        <div className="tabs__header">Additional Information</div>
        <div className="tabs__header">Reviews (2)</div>
      </div>
      <div className="tabs__bodies">
        <div className="tabs__body active">
          <div className="product-details__desc">
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce sagittis, massa fringilla consequat
              blandit, mauris ligula porta nisi, non tristique enim sapien vel
              nisl. Suspendisse vestibulum lobortis dapibus.
            </p>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce sagittis, massa fringilla consequat
              blandit, mauris ligula porta nisi, non tristique enim sapien vel
              nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae;
            </p>
          </div>
        </div>
        <div className="tabs__body ">tab2</div>
        <div className="tabs__body">tab3</div>
      </div>
    </section>
  );
};

export default ProductTabs;
