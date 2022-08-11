
import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"


import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Advantages from './components/Advantages';
import Feature from './components/Feature';
import Carousel from "./components/Carousel"
import Team from "./components/Team";


function App() {
  return (
    <div className="bg-white h-screen font-lato">
      
      {/* Header */}
        <Navbar/>
      {/* End Header */}

      {/* Jumbotron */}
        <Jumbotron/>
      {/* End Jumbotron */}

      {/* advantages */}
        <Advantages/>
      {/* End advantages */}

      {/* Feature */}
        <Feature/>
      {/* End Feature */}

      {/* Gallery */}
      <div className="w-5/6 mx-auto py-10">
        <h1 className="font-bold text-center text-4xl pb-10">Gallery</h1>
        <div className="grid grid-cols-3 gap-1">
          <img className="col-span-2" src={image1} alt="" />
          <div className="space-y-1">
            <img src={image2} alt="" />
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
      {/* End Gallery */}


    {/* Carousel */}
      <Carousel/>
    {/* End Carousel */}

    {/* Team */}
     <Team/>
    {/* End Team */}

    {/* Maps */}
    <div>
      <h1 className='text-center uppercase text-3xl font-bold py-8'>Location</h1>
        <iframe
      className='w-5/6 mx-auto h-96'
      loading="lazy"
      title='maps'
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCBsWcQJiEmoNEY3XJZCTEfdxU-jkfyn4M
        &q=PT Syra International">
      </iframe>
    </div>

    {/* End Maps */}

    {/* Footer */}
    <div className='w-full bg-orange-600 py-7 mt-10'>
      <div className='text-center text-sm font-light text-white space-y-1'>
        <p>syra.idn@gmail.com</p>
        <p>+62 812-9710-8565 (Whatsapp)</p>
        <p>Indonesia, Bekasi. Medan Satria, Pejuang Jaya, Jalan Komando Raya.</p>
        <p className='pt-5'>&copy;2021 by PT Syra International.</p>
      </div>
    </div>
    {/* End Footer */}

    </div>
  );
}

export default App;
