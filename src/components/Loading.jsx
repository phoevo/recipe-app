import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch} from '@fortawesome/free-solid-svg-icons';

export default function Loading(){
  return(

    <section className="loading">

      <p>Generating recipe</p>
      <FontAwesomeIcon className="icon-loading"
      icon={faCircleNotch}/>

</section>


  )
}
