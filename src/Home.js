import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
        return (
          <div className="home">
              <div className="home__constainer">
              <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
              />

          <div className="home__row">
                <Product 
                  id="1"
                  title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                  price={29.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                  rating={4}
                />
                <Product 
                 id="2"
                  title="Kask Mojito X Unisex Road Helmet, unisex"
                  price={122.94}
                  image="https://m.media-amazon.com/images/I/91tl1wMvoTL._AC_UL320_.jpg"
                  rating={5}
                />
            </div>

          <div className="home__row">
                <Product 
                 id="3"
                  title="Fitbit Inspire 2 Health & Fitness Tracker with a Free 1-Year Fitbit Premium Trial, 24/7 Heart Rate & up to 10 Days Battery "
                  price={83.49}
                  image="https://m.media-amazon.com/images/I/61GjVzv-reL._AC_UY218_.jpg"
                  rating={4}
                />
                <Product 
                 id="4"
                  title="Shark Corded Stick Vacuum Cleaner [HV390UK]"
                  price={149.99}
                  image="https://images-eu.ssl-images-amazon.com/images/I/618XS0kVyeL.__AC_SX300_SY300_QL70_ML2_.jpg"
                  rating={3}
                />
                <Product 
                 id="5"
                  title="VonShef Personal Blender Multifunctional Powerful Smoothie Maker and Mixer for Fruit, Vegetables Shakes and Ice Includes 800ml and 500ml Portable Cups – 1000W"
                  price={54.99}
                  image="https://m.media-amazon.com/images/I/510OOQMrHPL._AC_SR320,320_.jpg"
                  rating={5}
                />
          </div>

           <div className="home__row">
              <Product 
                 id="5"
                  title="Samsung GQ32Q50RGUXZG TV 81.3 cm 4K Ultra HD Smart TV Wi-Fi Silver GQ32Q50RGUXZG, 81.3 cm , 3840 x 2160 pixels, QLED, Smart TV, Wi-Fi, Silver
                  "
                  price={616.64}
                  image="https://m.media-amazon.com/images/I/61ifRN1QZDL._AC_UY218_.jpg"
                  rating={5}
                />
          </div>
        </div>
    </div>
  )
}

export default Home
