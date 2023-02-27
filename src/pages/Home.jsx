import React from "react";
import Split from "react-split";
import "./Home.scss";
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../store/ui-slice.js";
import HomeTopLeftPanel from "../components/Home/HomeTopLeftPanel.jsx";
import HomeTopRightPanel from "../components/Home/HomeTopRightPanel.jsx";
import HomeBottomLeftPanel from "../components/Home/HomeBottomLeftPanel.jsx";
import HomeBottomRightPanel from "../components/Home/HomeBottomRightPanel.jsx";


function Top() {
   const dispatch = useDispatch();

   const splitPercentages = useSelector((state) => state.ui.splitPercentages);

   const [topLeftPerc, topRightPerc] = splitPercentages.homeTopHorizontal;



   const onDragEnd = (sizes) => {
      dispatch(uiActions.setHomeTopHorizontalSplit(sizes))
   };

   return <Split
      sizes={[topLeftPerc ?? 70, topRightPerc ?? 30]}
      className="split"
      direction="horizontal"
      onDragEnd={onDragEnd}>
      <HomeTopLeftPanel/>
      <HomeTopRightPanel/>
   </Split>;
}

function Bottom() {
   const dispatch = useDispatch();

   const splitPercentages = useSelector((state) => state.ui.splitPercentages);

   const [bottomLeftPerc, bottomRightPerc] = splitPercentages.homeBottomHorizontal;

   const onDragEnd = (sizes) => {
      dispatch(uiActions.setHomeBottomHorizontalSplit(sizes))
   };

   return <Split
      sizes={[bottomLeftPerc ?? 70, bottomRightPerc ?? 30]}
      className="split"
      direction="horizontal"
      onDragEnd={onDragEnd}>
      <HomeBottomLeftPanel/>
      <HomeBottomRightPanel/>
   </Split>;
}

export default function HomePage() {
   const dispatch = useDispatch();

   const splitPercentages = useSelector((state) => state.ui.splitPercentages);
   const [topPerc, bottomPerc] = splitPercentages.homeVertical;

   const onDragEnd = (sizes) => {
      dispatch(uiActions.setHomeVerticalSplit(sizes))
   };

   return (
      <Split
         className="wrap"
         sizes={[topPerc ?? 65, bottomPerc ?? 35]}
         minSize={100}
         expandToMin={false}
         gutterSize={10}
         gutterAlign="center"
         snapOffset={30}
         dragInterval={1}
         direction="vertical"
         cursor="col-resize"
         onDragEnd={onDragEnd}>
         <Top/>
         <Bottom/>
      </Split>
   )
}

