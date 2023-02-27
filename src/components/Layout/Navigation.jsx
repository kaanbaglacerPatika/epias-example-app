import React, {useEffect} from "react";
import styles from "./Navigation.module.scss"
import {AiOutlineLayout, AiOutlineSave, CgProfile} from "react-icons/all.js";
import OutlinedIconButton from "../UI/OutlinedIconButton.jsx";
import {useDispatch, useSelector} from "react-redux";
import {localStorageKeys} from "../../utils/constants.js";
import {uiActions} from "../../store/ui-slice.js";

const Navigation = (props) => {

   const dispatch = useDispatch();

   const splitPercentages = useSelector((state) => state.ui.splitPercentages);
   const initialSplitPercentages = useSelector((state) => state.ui.initialSplitPercentages);

   const handleOnSaveLayoutClicked = () => {
      if (JSON.stringify(initialSplitPercentages) !== JSON.stringify(splitPercentages)) {
         localStorage.setItem(localStorageKeys.LayoutSplitPercentages, JSON.stringify(splitPercentages));
         dispatch(uiActions.setInitialLayoutSplit(splitPercentages));
      }
   }

   return <header>
      <nav className={styles.nav}>
         <div className={styles.logo}>
            <img src="./src/assets/epias-beyaz.svg" alt="Epiaş Beyaz Logo"/>
         </div>
         <div className={styles.profileAndSaveLayout}>
            {
               (JSON.stringify(initialSplitPercentages) === JSON.stringify(splitPercentages)) ?
                  <OutlinedIconButton iconSize={'40px'} iconColor={'white'} onClick={handleOnSaveLayoutClicked}>
                     <AiOutlineLayout/>
                  </OutlinedIconButton> :
                  <OutlinedIconButton iconSize={'40px'} iconColor={'white'} buttonBackground={'green'}
                                      onClick={handleOnSaveLayoutClicked}>
                     <AiOutlineSave/>
                  </OutlinedIconButton>
            }
            <span>Çalışma Alanı 1</span>
            <OutlinedIconButton iconSize={'40px'} iconColor={'white'}>
               <CgProfile/>
            </OutlinedIconButton>
            <span>Merhaba, Ayhan</span>
         </div>
      </nav>
   </header>
}

export default Navigation;
