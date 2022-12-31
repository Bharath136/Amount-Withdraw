import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {totalAmount: 2000}

  onWithdraw = value => {
    this.setState(prevState => ({
      totalAmount: prevState.totalAmount - value,
    }))
    const {totalAmount} = this.state
    console.log(totalAmount)
  }

  render() {
    const {denominationsList} = this.props
    const {totalAmount} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <div className="profile-container">
            <h1 className="profile">S</h1>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="heading">Your Balance</p>
            <div className="amount-conatiner">
              <p className="amount">{totalAmount}</p>
              <p className="rupees">in Rupees</p>
            </div>
          </div>
          <p className="main-heading">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list">
            {denominationsList.map(eachVal => (
              <DenominationItem
                amount={eachVal}
                onWidthDraw={this.onWithdraw}
                key={eachVal.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
