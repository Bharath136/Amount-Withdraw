import './index.css'

const DenominationItem = props => {
  const {amount, onWidthDraw} = props
  const {value} = amount

  const onWithdraw = () => {
    onWidthDraw(value)
  }

  return (
    <li className="item">
      <button type="button" className="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
