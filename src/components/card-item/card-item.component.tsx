import './card-item.styles.scss';

export const CardItem = ({ image }: { image: string }) => (
  <div className="card-item col">
    <div className="card border-primary mx-auto p-2">
      <img src={image} alt="cat" className="img-fluid my-auto" />
      <div className="card-img-overlay"></div>
    </div>
  </div>
);
