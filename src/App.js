import { useState } from 'react';
import './App.css';
import SubmitMessage from './components/SubmitMessage';


function App() {
	// Initial state
	const [errorMessage, seterrorMessage] = useState(null);
	const [SubmitMessageVisibility, setSubmitMessageVisibility] = useState(false)
	const [inputValue, setInputValue] = useState({
		name: '',
		number: '',
		age: '',
		employee: false,
		salary: '0-50000'
	});
	let isButtonDisabled = inputValue.name === '' || inputValue.number === '' || inputValue.age === '';
	const handleSubmit = (event) => {
		inputValue.number.length < 10 || inputValue.number.length > 12 ?
			seterrorMessage("Phone Number format is not correct")
			: inputValue.age < 18 || inputValue.age > 100 ? seterrorMessage("age is not allowed")
			: seterrorMessage(null)
		event.preventDefault();
		setSubmitMessageVisibility(true)
	};

	// Function to handle input changes
	const handleChange = (event) => {
		const { id, value, checked } = event.target;
		switch (id) {
			case 'name':
				setInputValue({ ...inputValue, name: value });
				break;
			case 'number':
				setInputValue({ ...inputValue, number: value });
				break;
			case 'age':
				setInputValue({ ...inputValue, age: value });
				break;
			case 'isEmployee':
				setInputValue({ ...inputValue, employee: checked });
				break;
			case 'salary':
				setInputValue({ ...inputValue, salary: value });
				break;
			default: ;

		}
	}
	//rendering
	return (
		<div className="App" onClick={() => {
			SubmitMessageVisibility && setSubmitMessageVisibility(false);
		}}>
			<div className='form-box'>
				<h1>Requesting a Loan</h1>
				
				<hr></hr>

				<label for='name'>Name :</label>
				<input onChange={handleChange} value={inputValue.name} type='text' id='name'></input>

				<label for='number'>Phone Number :</label>
				<input onChange={handleChange} value={inputValue.number} type='number' id='number'></input>

				<label for='age'>Age :</label>
				<input onChange={handleChange} value={inputValue.age} type='number' id='age'></input>

				<label for="isEmployee">Are you an employee ?</label>
				<input type='checkbox' onChange={handleChange} checked={inputValue.employee} id='isEmployee'></input>

				<label for='salary'>Salary</label>
				<select id='salary' onChange={handleChange} value={inputValue.salary}>
					<option value='0-50000'>Below 50,000</option>
					<option value='50001-100000'>50,001-100,000</option>
					<option value='100001-200000'>Above 100,000</option>
				</select>
				<button className={isButtonDisabled && 'disabled'} disabled={isButtonDisabled} type='submit' onClick={handleSubmit}>Submit</button>
			</div>
			<SubmitMessage isVisibale={SubmitMessageVisibility} errorMessage={errorMessage} />
		</div>
	);

}
export default App;
