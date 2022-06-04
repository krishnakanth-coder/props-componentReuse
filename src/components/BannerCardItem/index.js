import './index.css'

const BannerCardItems = props => {
  const {item, className} = props
  const {headerText, description} = item

  return (
    <div className={className}>
      <h1 className="header">{headerText}</h1>
      <ul>
        <p className="para-text">{description}</p>
      </ul>
      <button type="button" className="button">
        Show More
      </button>
    </div>
  )
}

export default BannerCardItems
