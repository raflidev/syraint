import React from 'react'

function Jumbotron() {
  return (
    <div>
    {/* Jumbotron */}
    <div>
        <div className="text-white h-screen bg-no-repeat bg-cover " style={{backgroundImage: `url("https://charcoal.pro/info/wp-content/uploads/2020/05/trusted-coconut-shell-charcoal-briquettes-factory-1024x576.jpg")` }}>
          <div className="flex h-screen bg-black bg-opacity-40">
            <div className="m-auto ">
              <div className="font-bold text-3xl lg:text-6xl capitalize text-center leading-tight">
                  Get your premium briquettes <br></br> with quality raw materials
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Jumbotron */}
    </div>
  )
}

export default Jumbotron