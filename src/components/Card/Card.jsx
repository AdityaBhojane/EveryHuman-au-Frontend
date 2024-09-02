/* eslint-disable react/prop-types */


function Card({Title,Description,image}) {
  return (
    <>
      <div className="card glass w-3/2 rounded-xl">
        <div className="w-full max-sm:h-[500px]">
          <img
            src={image}
            alt="car!"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{Title}</h2>
          <p>{Description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy now !</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
