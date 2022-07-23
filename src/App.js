function App() {
  return (
    <div className="bg-white h-screen font-lato">
      {/* Header */}
      <div className="fixed top-0 w-full">      
        <div className="bg-orange-600 text-white py-5 px-10">
          <div className="flex justify-between">
            <div className="w-4/12">
              <div className="flex justify-center">
                Logo
              </div>
            </div>
            <div className="w-8/12">
              <div className="flex justify-end space-x-20">
                <div>
                  Menu
                </div>
                <div>
                  Menu
                </div>
                <div>
                  Menu
                </div>
                <div>
                  Menu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header */}

      {/* Jumbotron */}
      <div>
        <div className="text-white h-screen bg-no-repeat bg-cover " style={{backgroundImage: `url("https://charcoal.pro/info/wp-content/uploads/2020/05/trusted-coconut-shell-charcoal-briquettes-factory-1024x576.jpg")` }}>
          <div className="flex h-screen bg-black bg-opacity-40">
            <div className="m-auto ">
              <div className="font-bold text-6xl capitalize text-center leading-tight">
                  Get your premium briquettes <br></br> with quality raw materials
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Jumbotron */}

    </div>
  );
}

export default App;
