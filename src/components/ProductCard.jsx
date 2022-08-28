const ProductCard = ({ name, description, thumbnail }) => {
  return (
    <div>
      <img width="200" src={thumbnail} alt={name} />
      <div>
        <div>{name}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ProductCard;
