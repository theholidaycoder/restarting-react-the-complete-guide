import './Expense.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';


function Expense(props)
{

	  const expenses =  [
	      {
	      id: 'el',
	      title: 'Pens',
	      amount: 45.3, 
	      thedate: new Date(2023, 3, 20 )      
	    },
	    {
	      id: 'ep',
	      title: 'Pencil',
	      amount: 55.3, 
	      thedate: new Date(2023, 12, 20 )      
	    },    
	    {
	      id: 'et',
	      title: 'Pens',
	      amount: 43, 
	      thedate: new Date(2023, 3, 10 )      
	    } ,       
	  ];

	return ( <Card>
			      <ExpenseItem className="default-item" 
			      title={expenses[0].title}  
			      amount={expenses[0].amount}  
			      thedate={expenses[0].thedate}  
			      ><
			      /ExpenseItem>
			      <ExpenseItem
			        title={expenses[1].title}  
			        amount={expenses[1].amount}  
			        thedate={expenses[1].thedate}        
			      ></ExpenseItem>
			      <ExpenseItem
			        title={expenses[2].title}  
			        amount={expenses[2].amount}  
			        thedate={expenses[2].thedate}              
			      ></ExpenseItem>
		    </Card>
	 );

}

export default Expense;