import './card-style.css'
import DotLine from '../dotLine/dotLine.jsx'
const Card = ({index,dataElem}) => {
    return(

        <div className={index%2 === 0 ?'card card-right':'card card-left'} 
        style={{marginTop:`${10*index}em`}}>
        <div className='card-container'>
            <h5>{dataElem.name}</h5>
            <h5>{dataElem.email}</h5>
            <h5>{dataElem.phone}</h5>
        </div>
            <div className= {index%2 === 0 ?'dot-line dot-line-right':'dot-line dot-line-left'} >
            <DotLine/>
            </div>
        
        </div>
    )
}

export default Card