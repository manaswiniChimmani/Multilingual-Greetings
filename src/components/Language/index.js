import './index.css'

const Language = props => {
  const {details, updateActiveId, isActive} = props

  const {id, buttonText, imageUrl, imageAltText} = details

  const btnClassName = isActive ? 'active' : 'inactive'

  const onClickLang = () => {
    updateActiveId(id, imageUrl, imageAltText)
  }

  return (
    <li>
      <button type="button" onClick={onClickLang} className={btnClassName}>
        {buttonText}
      </button>
    </li>
  )
}
export default Language
