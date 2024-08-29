/* eslint-disable react/prop-types */


function Card({Title,Description,image}) {
  return (
    <>
      <div className="card glass w-96">
        <figure>
          <img
            src={image}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Title}</h2>
          <p>{Description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
