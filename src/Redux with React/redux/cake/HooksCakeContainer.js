import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from './cakeActions'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div className='store__container'>
        <h2>Hooks Cake Container</h2>
        <p>Number of cakes - {numOfCakes}</p>
        <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer
