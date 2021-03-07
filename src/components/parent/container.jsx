import './style.css'
import Card from '../card/card.jsx'
import data from '../data.js'


const Container = () => {

    return(
        <>
    <div className='Container'>
        <div className='vertical-line'>{' '}</div>
        {data.length > 0 && data.map((e,i) => (
        <Card key={e.id} index={i} dataElem={e}/> 
        ))}     
    </div>
        </>
    )
}

export default Container