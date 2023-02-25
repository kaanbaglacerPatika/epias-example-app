const HomeTopRightPanel = (props) => {

   const splitPercentages = useSelector((state) => state.ui.splitPercentages);

   const [topLeftPerc, topRightPerc] = splitPercentages.homeTopHorizontal;
   const [bottomLeftPerc, bottomRightPerc] = splitPercentages.homeBottomHorizontal;
   const [topPerc, bottomPerc] = splitPercentages.homeVertical;

   return (
      <div>
         <Card>
            <div>
               <h4>Ayarlar</h4>
            </div>
            <div>
               <h4>Üst Dikey Pencere Değerleri:</h4>
               <p>%{topPerc}, %{bottomPerc}</p>
            </div>
            <div>
               <h4>Üst Dikey Pencere Değerleri:</h4>
               <p>%{topLeftPerc}, %{topRightPerc}</p>
            </div>
            <div>
               <h4>Alt Dikey Pencere Değerleri:</h4>
               <p>%{bottomLeftPerc}, %{bottomRightPerc}</p>
            </div>
         </Card>
      </div>
   );
};

export default HomeTopRightPanel;
