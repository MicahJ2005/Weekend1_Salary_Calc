console.log('JS');

let employeeList = [];

class EmployeeInfo {
    constructor(firstName, lastName, ID, title, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.ID = ID;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}


$('document').ready(onReady);

function onReady(){
    console.log('JQ');
    
    $('#submitButton').on('click', addEmployee);
    $('#tableBody').on('click', '.deleteEmployee', deleteEmployee);
    $('#submitButton').on('click', totalAmount);


    function addEmployee(){
        event.preventDefault();
        console.log('button click');
        let fNameIn = $('#firstName').val();
        let lNameIn = $('#lastName').val();
        let idIn = $('#ids').val();
        let titleIn = $('#title').val();
        let salaryIn = $('#annualSalary').val();
        let newEmployee = new EmployeeInfo(fNameIn, lNameIn, idIn, titleIn, salaryIn);
        employeeList.push(newEmployee);
        console.log(employeeList);
        appendEmployeeList();
        
        $('#firstName').val('');
        $('#lastName').val('');
        $('#ids').val('');
        $('#title').val('');
        $('#annualSalary').val('');
       
    }


    function appendEmployeeList(){
        let inputElement = $('#tableBody');
        inputElement.empty();
        for(let employee of employeeList){
            console.log(employee);
            inputElement.append(`<tr>`+`<td>` + employee.firstName + `</td>` + `` + `<td>` + employee.lastName + `</td>` + `` + `<td>` + employee.ID + `</td>`+ `` + `<td>` + employee.title + `</td>` + `` + `<td>` + employee.annualSalary + `<td class="textCenter"><button type="button" class="deleteEmployee">Delete</button></td>`+`<tr>`)
            
        }
    }

    function deleteEmployee(){
        console.log('delete Employees');
        let selectedEmployees = $(this).closest('tr').find('td').text();
        console.log(selectedEmployees);
        for(let i=0; i<employeeList.length; i++){
            if(selectedEmployees.includes(employeeList[i].title)){
                console.log('delete me'); /// not logging??
                employeeList.splice(i, 1);
                $(this).closest('tr').find('td').remove();
                
            }
        }
        
    }

    function totalAmount(){
        console.log('total amount');

        let totalSalary = 0;

        for(let i=0; i<employeeList.length; i++){
        
        totalSalary = parseInt(totalSalary + employeeList[i].annualSalary);
        
        newTotal = parseInt(totalSalary);

        }
        console.log(newTotal);
    }
    

}








