import ReactMarkdown from 'react-markdown'

export default function Recipe(props){
  return(
    <section className='generatedRecipe'>
    <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  )
}