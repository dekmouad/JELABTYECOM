import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    // Function to fetch income data
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        console.log(res.data)
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  

  return (
    <div className="featured">
      <div className="featuredItem">
         {/* Title */}
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
           {/* Display income amount */}
          <span className="featuredMoney">${income[1]?.total}</span>
           {/* Display percentage change and arrow icon */}
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
         {/* Subtext */}
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
