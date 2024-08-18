import './Card.css'




export const Card = ({
    imgSrc, 
    imgAlt, 
    title, 
    info, 
    buttonText, 
    link, 
}) => {
  return (
    <div className='card-container'> 
        <div className='card-inside'>
        
        <img className='card-img' src={imgSrc}></img>
        </div>
        <div className='card-desc'>
        <h1 className='card-title'>{title}</h1>
        <p className='card-info'>{info}</p>
        <a className='card-btn' href={link} target='blank'>{buttonText}</a>
        </div>


        </div>

)
}