import "../styles/globals.css";
import PortfolioSlider from "../../src/app/components/HomePortfolio/PortfolioSlider.jsx";
import HomeService from "../../src/app/components/HomePortfolio/HomeService.jsx";
import HomeSchedual from "../../src/app/components/HomePortfolio/HomeSchedual.jsx";
import HomeStack from "../../src/app/components/HomePortfolio/HomeStack.jsx";
import HomeDeliverInfo from "../../src/app/components/HomePortfolio/HomeDeliverInfo.jsx";
import HomeDashboard from "../../src/app/components/HomePortfolio/HomeDashboard.jsx";
import HomePortfolio from "../../src/app/components/HomePortfolio/HomePortfolio.jsx";
import HomeECard from "../../src/app/components/HomePortfolio/HomeECard.jsx";
import HomeJobBoard from "../../src/app/components/HomePortfolio/HomeJobBoard.jsx";
import HomeCoverDashboard from "../../src/app/components/HomePortfolio/HomeCoverDashboard.jsx";
import HomeMyColor from "../../src/app/components/HomePortfolio/HomeMyColor.jsx";
import HomePortfolioWebsiteDemo from "../../src/app/components/HomePortfolio/HomePortfolioWebsiteDemo.jsx";
import HomeResponsive from "../../src/app/components/HomePortfolio/HomeResponsive.jsx";
import HomeCrm from "../../src/app/components/HomePortfolio/HomeCrm.jsx";
import HomeGaming from "../../src/app/components/HomePortfolio/HomeGaming.jsx";
import HomeContact from "../../src/app/components/HomePortfolio/HomeContact.jsx";
import HomeUiUx from "../../src/app/components/HomePortfolio/HomeUiUx.jsx";
import Approch from "../../src/app/components/HomePortfolio/Approch.jsx";
import HomeBlog from "../../src/app/components/HomePortfolio/HomeBlog.jsx";
import HomeHeroTwo from "../../src/app/components/HomePortfolio/HomeHeroTwo.jsx";

export default function Home() {
  return (
    <div className="">
      <PortfolioSlider></PortfolioSlider>
      <HomeService></HomeService>

      {/* <HomeUiUx></HomeUiUx> */}
      <Approch></Approch>

      <HomeECard></HomeECard>
      <HomeJobBoard></HomeJobBoard>
      <HomePortfolioWebsiteDemo></HomePortfolioWebsiteDemo>
      <HomeGaming></HomeGaming>
      <HomeResponsive></HomeResponsive>
      <HomeCrm></HomeCrm>

      <HomeDeliverInfo></HomeDeliverInfo>

      <HomeContact></HomeContact>
      <HomeBlog></HomeBlog>
    </div>
  );
}
