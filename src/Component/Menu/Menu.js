import React from 'react'

export default function Menu() {
  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-lg-3 ">
                <aside className="sidebar col-lg-3 ml-auto">
                    <p className="border-top pt-3 d-block d-lg-none"><strong>Category</strong></p>
                    <select className="subMenuSelect form-control d-block d-lg-none bimesh" aria-label="Sidebar page navigation">
                      <option value="#"><span>Bagels</span></option>
                      <option value="#"><span className="subMenuHighlight">Veg Wrap</span></option>
                      <option value="#"><span>Chicken Wrap</span></option>
                      <option value="#"><span>Veg Burgers</span></option>
                      <option value="#"><span>Chicken Sandwiches(Burgers)</span></option>
                      <option value="#"><span>Chicken Wrap</span></option>
                      <option value="#"><span>Veg Burgers</span></option>
                      <option value="#"><span>Chicken Sandwiches(Burgers)</span></option>
                      <option value="#"><span>Chicken Wrap</span></option>
                      <option value="#"><span>Veg Burgers</span></option>
                      <option value="#"><span>Chicken Sandwiches(Burgers)</span></option>
                    </select>


                </aside>
                <div id="subMenu" className="d-none d-lg-block">
                    <a href="#list-item-1">Categories</a>
                    <li><a className="list-item-1" href="#list-item-2">My Favourites</a></li>

                   
                </div>



            </div>
            <div className="col-md-12 col-lg-6  ">

                <table cellpadding="5px" style="width: 100%; background-color: antiquewhite;">

                    <script>
                            for (i = 0; i <= newproduct.length; i++) {
                            document.write(`
                            <tr data-toggle="modal" data-target="#exampleModalCenter">
                        <td style=" width: 83%; ">
                            <p className="table_p1 ">${newproduct[i].Title}</p>
                            <p className="table_p2 ">${newproduct[i].Description}</p>
                        </td>
                        <td style="width: 13%; " className="table_totop ">

                            <span className="logo_middle ">Rs ${newproduct[i].Price} </span>

                        </td>
                        <td style="width: 5%; " className="table_totop ">


                            <span className="material-symbols-outlined ">
                                add_circle
                                </span>
                        </td>

                    </tr>`)
                            }

                        </script>
               




                </table>
            </div>
            <div className="col-md-3 ">
                One of the three column
            </div>
        </div>
    </div>
    </div>
  )
}
