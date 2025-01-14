
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function IngredientsList(props) {

  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <div key={ingredient} className="listItem">
      <FontAwesomeIcon className='icon-x'
        icon={faCircleXmark}
        onClick={() => props.removeItem(ingredient)}
      />
      <p>{ingredient}</p>

    </div>
  ));

  return (
    <section className="ingredientList">
      <h2 style={props.ingredientTitleStyle}>{props.ingredientTitle}</h2>
      <ul>
        {ingredientsListItems}
      </ul>
    </section>

  )
}