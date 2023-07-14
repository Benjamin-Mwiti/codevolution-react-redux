import { connect } from 'react-redux'
import { buyIceCream } from './iceCreamActions'

function IceCreamContainer(props) {
  return (
    <div className='store__container'>
        <h2>Ice Creams Container</h2>
        <p>Number of Ice Creams - {props.numOfIceCreams}</p>
        <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
