import './index.css'

const PlanetItem = props => {
  const {itemData} = props
  const {imageUrl, name, description} = itemData

  return (
    <div className="planet-item-container">
      <img className="planet-item-img" src={imageUrl} alt={name} />
      <h1 className="planet-item-name">{name}</h1>
      <p className="planet-item-description">{description}</p>
    </div>
  )
}

export default PlanetItem
