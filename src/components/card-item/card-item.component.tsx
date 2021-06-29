import './card-item.styles.scss';

export const CardItem = ({
  id,
  image,
  handleCardClick,
}: {
  id: string;
  image: string;
  handleCardClick(id: string): void;
}) => (
  <div className="card-item col">
    <div
      className="card border-2 border-primary mx-auto shadow-lg p-3 mb-5 bg-body rounded"
      onClick={() => {
        handleCardClick(id);
      }}
    >
      <img src={image} alt="cat" className="img-fluid my-auto" onClick={() => console.log(id)} />
      <div className="card-img-overlay"></div>
    </div>
  </div>
);
