import React from "react";
import Split from "react-split";
import "./Home.scss";
import {useDispatch} from "react-redux";
import {uiActions} from "../store/ui-slice.js";
import HomeTopLeftPanel from "../components/Home/HomeTopLeftPanel.jsx";
import HomeTopRightPanel from "../components/Home/HomeTopRightPanel.jsx";
import HomeBottomLeftPanel from "../components/Home/HomeBottomLeftPanel.jsx";
import HomeBottomRightPanel from "../components/Home/HomeBottomRightPanel.jsx";


function Top() {
   const dispatch = useDispatch();

   const onDragEnd = (sizes) => {
      dispatch(uiActions.setHomeTopHorizontalSplit(sizes))
   };

   return <Split
      sizes={[70, 30]}
      className="split"
      direction="horizontal"
      onDragEnd={onDragEnd}>
      <HomeTopLeftPanel/>
      <HomeTopRightPanel/>
   </Split>;
}

function Bottom() {
   const dispatch = useDispatch();

   const onDragEnd = (sizes) => {
      dispatch(uiActions.setHomeBottomHorizontalSplit(sizes))
   };

   return <Split
      sizes={[70, 30]}
      className="split"
      direction="horizontal"
      onDragEnd={onDragEnd}>
      <HomeBottomLeftPanel/>
      <HomeBottomRightPanel/>
   </Split>;
}

export default function HomePage() {
   const dispatch = useDispatch();

   const onDragEnd = (sizes) => {
      dispatch(uiActions.setHomeVerticalSplit(sizes))
   };

   return (
      <Split
         className="wrap"
         sizes={[65, 35]}
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

