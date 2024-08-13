import img from '../../assets/pro2.png';

const HotDeal = () => {
  return (
    <div id="hot-deal" className="section  py-12 discount__home-banner bg-cover" >
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-md-12">
            <div className="hot-deal  p-8  rounded-lg text-center" >
              <ul className="hot-deal-countdown flex justify-center space-x-4 mb-6">
                <li>
                  <div className="text-center ml-4 bg-red-500 rounded-full  px-7 py-5">
                    <h3 className="text-2xl font-bold text-white">02</h3>
                    <span className="text-gray-200">Days</span>
                  </div>
                </li>
                <li>
                  <div className="text-center  bg-red-500 rounded-full  px-7 py-5">
                    <h3 className="text-2xl font-bold text-white">10</h3>
                    <span className="text-gray-200">Hours</span>
                  </div>
                </li>
                <li>
                  <div className="text-center bg-red-500 rounded-full  px-7 py-5">
                    <h3 className="text-2xl font-bold text-white">34</h3>
                    <span className="text-gray-200">Mins</span>
                  </div>
                </li>
                <li>
                  <div className="text-center bg-red-500 rounded-full  px-7 py-5">
                    <h3 className="text-2xl font-bold text-white">60</h3>
                    <span className="text-gray-200">Secs</span>
                  </div>
                </li>
              </ul>
              <h2 className="text-3xl text-gray-900 font-semibold uppercase mb-4">Hot deal this week</h2>
              <p className="text-gray-700 mb-6">New Collection Up to 50% OFF</p>
              <a className="primary-btn cta-btn bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600" href="#">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeal;
