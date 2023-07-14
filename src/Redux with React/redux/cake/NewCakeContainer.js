import { useState } from 'react'
import { buyCake } from './cakeActions'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
  return (
    <div className='store__container'>
        <h2>New Cake Container</h2>
        <p>Number of cakes - {props.numOfCakes}</p>
        <form onSubmit={e => e.preventDefault()}>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
            <button type='submit' onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </form>
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
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
