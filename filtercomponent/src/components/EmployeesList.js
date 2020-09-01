import React from 'react';

class EmployeesList extends React.Component {

 
   state ={
      employees: this.props.employees,
      input: '',
    }


    onChangeHandler=(e)=>{
      this.setState({
        input: e.target.value,
      })
    }

  render() {
    //const { employees } = this.props;
    let list = this.state.employees;

    let employeelist = list.filter(employee => this.state.input === '' || employee.name. toLowerCase().includes(this.state.input.toLowerCase()))
    .map((filteredemployee, index) => <li key={index} data-testid="employee">{filteredemployee.name}</li>);

    console.log(employeelist);
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" 
          onChange={this.onChangeHandler.bind(this)}/>
        </div>
        <ul className="employees-list">
          {/* { employees.map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))} */}
          {employeelist}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
