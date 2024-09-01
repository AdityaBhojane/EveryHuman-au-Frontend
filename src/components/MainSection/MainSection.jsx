import heroImage from '../../assets/HeroImage.png'

function MainSection() {
  return (
    <>
        <div className="flex justify-between items-center w-[90%] mx-auto mt-16 max-lg:flex-wrap select-none"> 
            <div className="text-xl w-1/2 m-5 max-lg:w-full max-lg:text-center ">
                <h1 className='text-5xl leading-snug max-md:text-3xl font-bold'>Special Collection of Online Shopping Find Your Perfect Match</h1>
                <p className='my-5'>Best and popular brands and crazy discounts</p>
                <button className="btn btn-active border border-white">Shop Now</button>
            </div>
            <div className="w-1/2 max-md:w-full max-lg:w-full">
                <img src={heroImage} alt="model image" />
            </div>
        </div>
    </>
  )
}

export default MainSection