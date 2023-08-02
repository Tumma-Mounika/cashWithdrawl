// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawAmount = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <div className="profile-logo">S</div>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="side-text">Your Balance</p>
            <div className="">
              <p className="withdraw-balance">{balance}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="side-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-items-cont">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationItem={eachItem}
                withdrawAmount={this.withdrawAmount}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
