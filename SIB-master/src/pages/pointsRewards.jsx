import React from "react";
import Navbar from "../components/Navbar";
import Points from "../components/points";
import Hero from "../components/hero";
import Rewards from "../components/reward";
function PointsRewards() {
  return (
    <div>
        <Navbar/>
        <Hero
          cName="points-hero"
          heroImage="https://media.istockphoto.com/id/1398938786/vector/cash-back-money-saving-vector-concept-with-dollar-coins-wallet-arrows-credit-card-guarantee.jpg?s=1024x1024&w=is&k=20&c=YWrzOzzWiGHdbFFUCzeOBmVAw_9OQ1--0w11EncPLA0="
        />
        <Points/>
        <Rewards/>
    </div>
  );
}
export default PointsRewards;