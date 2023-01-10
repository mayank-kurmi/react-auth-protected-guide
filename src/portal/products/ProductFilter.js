const ProductFilter = (props) => {
  return (
    <>
      <button
        className="btn btn-outline-dark m-1 btn-sm"
        onClick={props.filterProduct}
      >
        {props.title}
      </button>
    </>
  );
};

export default ProductFilter;
