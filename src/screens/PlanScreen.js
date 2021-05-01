import React from 'react';
import  "./PlanScreen.css";

function PlanScreen () {
    return (
        <div className="">
        <div className="plansScreen__info">
          <h5 className="product__name">Netflix Standard</h5>
          <h6 className="product__desc">Netflix Basic</h6>
          <h3 className="product__price">Netflix Premium</h3>
        </div>
        

        <button className="plansScreen__plan">
         Subscribe
        </button>
      </div>
    )
}

export default PlanScreen ;
