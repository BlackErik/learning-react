import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>November 21st 2022</div>
      <div className="expense-item-description">
        <h2>Car Insurance</h2>
        <div className="expense-item-price">$294.68</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
