//modal box
//header (navbar)
//tabs
//text container (body)
import ModalBox from "views/GameView/components/InfoModal/ModalBox";
import Body from "views/GameView/components/InfoModal/Body";
import Header from "views/GameView/components/InfoModal/Header";



export default function InfoModal() {
  return <ModalBox>
    <Header/>
   <Body/>
  </ModalBox>;
}
 