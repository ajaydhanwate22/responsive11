// import logo from './logo.svg';
import './App.css';
import g1 from "./g1.jpg";
import g2 from "./g2.png";
import g3 from "./g3.jpg";
import g4 from "./g4.jpg"
import g5 from "./g5.png"
import g6 from "./g6.png"

function App() {
  return (
    <div className="App">

      <div className="navbar  flex">
        <div className='dabang_nav w-1/5	 '>
          <li className="list-none cursor-pointer	text-xl font-medium	p-3	 dabang_resp">
            <a href="/">
              <i className="fa-solid fa-gauge "></i>
            </a>
            Dabang
          </li>
        </div>
        <div className="dashbord_nav w-4/5	 ">
          <div className="navigation top_side_nav_resp">
            <ul class="menu flex dashboard_headinggg_resp ">
              <h2 className='text-xl font-medium	'>DASHBORD</h2>
              <input className='' type="search" placeholder='Search' aria-label='Seach' />
              <div class=" us_icon us_icon_resp">
                {/* <i class="fa fa-us-icon"></i> */}
                <img src="" alt="" />
                <span className='text-sm'>Eng</span>
              </div>
              <div class="bell_icon us_icon_resp">
                {/* <img src="123.jpg.png" alt="" /> */}
                <span className='text-sm'>Musfiq</span>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex'>
        <div className="left_slider w-1/5	">
          <div className="left_slider_nav">
            <ul class="menu_left  ">
              <li className="list-none cursor-pointer	text-xl  mt-5	 menu_left_resp">
                <a href="/">
                  <i className="fa-solid fa-gauge "></i>
                </a>
                Dashbord
              </li>
              <li className="list-none cursor-pointer text-xl menu_left_resp">
                <a href="/">
                  <i className="fa-solid fa-chart-simple"></i>
                </a>
                Leaderboard
              </li>
              <li className="list-none cursor-pointer text-xl menu_left_resp">
                <a href="/">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
                Order
              </li>
              <li className="list-none cursor-pointer	text-xl menu_left_resp">
                <a href="/">
                  <i class="fa fa-bag-shopping"></i>
                </a>
                Products
              </li>
              <li className="list-none cursor-pointer	text-xl menu_left_resp">
                <a href="/">
                  <i class="fa-solid fa-chart-line"></i>
                </a>
                Sales Reports
              </li>
              <li className="list-none cursor-pointer	text-xl menu_left_resp">
                <a href="/">
                  <i class="fa-solid fa-message"></i>
                </a>
                Messages
              </li>
              <li className="list-none cursor-pointer	text-xl menu_left_resp">
                <a href="/">
                  <i class="fa fa-gear"></i>
                </a>
                Setting
              </li>
              <li className="list-none cursor-pointer	text-xl menu_left_resp">
                <a href="/">
                  <i class="fa fa-right-from-bracket"></i>
                </a>
                SignOut
              </li>
            </ul>

            <div class="card-item ml-2.5 mt-5	 card-item_resp rounded border ">
              <div class="card-details   card-details_resp">
                <div className="card_icon  text-center	 icon_card_resp">
                  <i className='text-2xl	' class="fa-brands fa-internet-explorer"></i>
                </div>
                <div className="card_head  text-center	 card_head_resp">
                  <h1 className='font-semibold	'>Dabang Pro</h1>
                </div>
                <div className="card_para  text-center	card_para_resp">
                  <p className='mt-2.5	'>get Access to all features on tetumbos</p>
                </div>
                <div className="btn_card text-center	mt-5	 btn_card_resp">
                  <a  className='' href="/" class="btn">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right_slider w-4/5	 right_slider_resp">

          <div className="main_sale flex	">

            <div className="sale ">
              <div className="sale_head">
                <h2 text-lg	font-medium	>Today's Sale</h2>
                <p className=''>Sale Summry</p>
              </div>
              <div class="card_sale  flex">
                <div className="sale_icon">
                  <i class="fa fa-chart-simple"></i>
                  <h4><b>$1k</b></h4>
                  <p>Total Sales</p>
                  <span>+8% form yesterday</span>
                </div>

                <div className="sale_icon ml-8">
                  <i class="fa-solid fa-folder"></i>
                  <h4><b>300</b></h4>
                  <p>Total Order</p>
                  <span>+5% form yesterday</span>
                </div>

                <div className="sale_icon ml-8">
                  <i class="fa fa-paperclip"></i>
                  <h4><b>5</b></h4>
                  <p>Product Sold</p>
                  <span>+1% form yesterday</span>
                </div>

                <div className="sale_icon ml-8 new_customer_resp">
                  <i class="fa fa-users"></i>
                  <h4><b>8</b></h4>
                  <p>New Costomers</p>
                  <span>+2% form yesterday</span>
                </div>


              </div>
            </div>
            <div className="visitor visitor_resp">
              <h2 className='text-lg font-bold'>Visitor Insight</h2>
              <img className="h-36 w-80 mt-6 img_resp" src={g6} alt="" />
            </div>
          </div>

          <div className="total_reven total_reven_resp flex mt-12 ">
            <div className="total total_resp">
              <h2>Total Revenue</h2>
              <img className="h-36 w-80 mt-6" src={g1} alt="" />
            </div>
            <div className="costemer_sat ml-10 total_resp">
            <h2>Costomer Satisfication</h2>
            <img className="h-36 w-80 mt-6" src={g2} alt="" />
            </div>
            <div className="targer_real ml-10 total_resp">
              <h2>Target VS Reality</h2>
              <img className="h-36 w-80 mt-6" src={g3} alt="" />
            </div>
          </div>


          <div className="top_product top_product_resp flex mt-12">
            <div className="top_pro top_pro_resp">
              <h2>Total Revenue</h2>
              <img className="h-36 w-80 mt-6" src={g4} alt="" />
            </div>
            <div className="sale_map ml-10 top_pro_resp">
            <h2>Costomer Satisfication</h2>
            <img className="h-36 w-80 mt-6" src={g5} alt="" />
            </div>
            <div className="vol_ser ml-10 top_pro_resp">
              <h2>Target VS Reality</h2>
              <img className="h-36 w-80 mt-6" src={g1} alt="" />
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
