import { buyCake } from './cakeActions'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div className='store__container'>
        <h2>Cake Container</h2>
        <p>Number of cakes - {props.numOfCakes}</p>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
