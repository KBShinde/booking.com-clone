import "./featured.css"

const Featured = () => {
  return (
    <div  className="featured">

      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" 
        alt="" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>New Delhi</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" 
        alt="" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Bangalore</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
         alt="" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Mumbai</h1>
        </div>
      </div>

      
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" 
        alt="" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Chennai</h1>
        </div>
      </div>

      
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=" alt="" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Jaipur</h1>
        </div>
      </div>
      


      

    </div>
  )
}

export default Featured
