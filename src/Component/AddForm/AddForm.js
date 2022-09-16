import React from 'react';


const AddForm = () => {
    return (
        <div>
        <form>
  <div className="form-row">
  <div className="form-group col-md-6" >
      <label for="First_name" id="label">First Name</label>
      <input type="text" className="form-control" id="" placeholder="First Name"/>
    </div>
    <div className="form-group col-md-6">
    <label for="First_name" id="label">Second Name</label>
    <input type="text" className="form-control" id="" placeholder="Second Name"/>
  </div>
    <div className="form-group col-md-6">
      <label for="inputEmail4" id="label">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    
    <div className="form-group">
    <label for="Date and Time" id="label">Date and Time</label>
    <input type="datetime-local" className="form-control" id="bookingtime" />
  </div>

  <div className="form-group col-md-4" >
      <label for="No_Gue" id="label">No. of Guest</label>
      <select id="No_Gue" className="form-control">
        <option selected>Choose...</option>
        <option>1 Person</option>
        <option>2 Persons</option>
        <option>3 Persons</option>
        <option>4 Persons</option>
        <option>5 Persons</option>
        <option>6 Persons</option>
        <option>7 Persons</option>
        <option>8 Persons</option>
        <option>9 Persons</option>
        <option>10 Persons</option>
        <option>11 Persons</option>
        <option>12 Persons</option>
        <option>13 Persons</option>
        <option>14 Persons</option>
        <option>15 Persons</option>
        <option>16 Persons</option>
        <option>17 Persons</option>
        <option>18 Persons</option>
        <option>19 Persons</option>
        <option>20 Persons</option>

      </select>
    </div>
  <div className="form-group">
    <label for="phone" id="label">Phone Number</label>
    <input type="text" className="form-control" id="phone" placeholder="Phone No."/>
  </div>
  
    
 </div>

  <button type="submit" className="btn" id='book_table' >Book a table</button>
</form>


        </div>
    );
}

export default AddForm;
