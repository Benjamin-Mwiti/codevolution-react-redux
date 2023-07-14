import React from 'react'
import { connect } from 'react-redux';
import { buyCake } from './cake/cakeActions';
import { buyIceCream } from './iceCream/iceCreamActions';

function ItemContainer(props) {
  return (
    <div className='store__container'>
      <h2>Item Container</h2>
      {
        props.cake
          ? <p>Number of cakes</p>
          : <p>Number of ice creams</p>
      }
      <p>Item - {props.item}</p>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
  return {
    item: itemState
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
  return {
    buyItem: dispatchFunction
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
