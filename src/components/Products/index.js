// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import Header from '../Header'
import './index.css'

const Products = props => {
  // eslint-disable-next-line
  const {item} = props
  const jwtToken = Cookie.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="login" />
  }
  return (
    <>
      <Header />
      <div className="oneTwo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png "
          alt="products"
          className="img123"
        />
      </div>
    </>
  )
}
export default Products
