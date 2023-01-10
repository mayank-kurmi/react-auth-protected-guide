import React from "react";

const AllProducts = (props) => {
  return (
    <>
      <div className="col-6 col-md-6 col-lg-3 mb-3" key={props.id}>
        <div className="card h-100">
          <img
            src={props.thumbnail}
            className="m-3"
            style={{
              height: "300px",
              width: "auto",
              objectFit: "contain",
            }}
            alt={props.title}
          />
          <div className="m-3 mb-0">
            <small className="card-title">
              {props.title.substring(0, 50)}...
            </small>
          </div>
          <div style={{ marginTop: "auto" }}>
            <div className="d-flex  align-items-center">
              <div className="m-3">
                <b>${props.price}</b>
              </div>
              {/* <NavLink className="stretched-link" to={`/product/${props.id}`}>
               
              </NavLink> */}
              <div className="ms-auto">
                <button className="btn btn-sm  " onClick={props.handleBuyNow}>
                  <i className="bi bi-bag-heart-fill"></i>
                </button>
                <button
                  className="btn btn-sm m-2 "
                  onClick={props.handleAddToCart}
                >
                  <i className="bi bi-cart-plus-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
