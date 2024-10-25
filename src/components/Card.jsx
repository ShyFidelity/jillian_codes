import './Card.css'




export const Card = ({
  imgSrc, 
  imgAlt, 
  title, 
  info, 
  buttonText, 
  link, 
  backgroundImg, 
  backgroundColor, 
  insideColor,
  titleStyle, // new prop for dynamic title styles
  infoStyle   // new prop for dynamic paragraph styles
}) => {

  const backgroundStyle = backgroundImg 
    ? { backgroundImage: `url(${backgroundImg})` } 
    : { backgroundColor: backgroundColor };

return (
  <div 
  style={backgroundStyle}    className='card-container'> 
   <div className='card-inside' >        <img className='card-img' src={imgSrc} alt={imgAlt}></img>
      </div>
      <div className='card-desc' style={{ backgroundColor: insideColor }}>
      <h1 className='card-title' style={titleStyle}>{title}</h1> {/* dynamic title styles */}
      <p className='card-info' style={infoStyle}>{info}</p> {/* dynamic paragraph styles */}
        <a className='card-btn' href={link} target='_blank' rel="noreferrer">{buttonText}</a>
      </div>
  </div>
)
}
