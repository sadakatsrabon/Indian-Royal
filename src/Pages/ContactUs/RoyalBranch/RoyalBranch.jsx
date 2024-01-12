import branchImg1 from "../../../assets/hotel/roual_branch/phnompenh.jpg"
import branchImg2 from "../../../assets/hotel/roual_branch/sihanoukville.webp"
import branchImg3 from "../../../assets/hotel/roual_branch/phnompenh2.jpg"
const RoyalBranch = () => {
  return (
    <div className="flex">
      {/* Sihanoukville */}
      <div className="pt-20 mx-auto">
        <div className="card w-96 h-52 bg-base-100 shadow-xl image-full">
          <figure><img src={branchImg1} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Sihanoukville</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Location</button>
            </div>
          </div>
        </div>
      </div>
      {/* Phom Penh */}
      <div className="pt-20 mx-auto">
        <div className="card w-96 h-52 bg-base-100 shadow-xl image-full">
          <figure><img src={branchImg2} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Phom Penh</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Location</button>
            </div>
          </div>
        </div>
      </div>
      {/* Siem Reap */}
      <div className="pt-20 mx-auto">
        <div className="card w-96 h-52 bg-base-100 shadow-xl image-full">
          <figure><img src={branchImg3} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Siem Reap</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Location</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalBranch;