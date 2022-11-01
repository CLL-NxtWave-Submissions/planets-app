import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const sliderProps = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="planets-slider-bg-container">
      <h1 className="planets-slider-header">PLANETS</h1>
      <Slider {...sliderProps}>
        {planetsList.map(planetsListItem => (
          <PlanetItem itemData={planetsListItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
