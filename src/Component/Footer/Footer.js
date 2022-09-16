import React from 'react'

export default function Footer() {
  return (
    <div>
    <section class="footer">
    <hr></hr>
        <div className="box-container">
    
            <div className="box">
                <h3>locations</h3>
                <a href="/">
                <strong>Inglewood</strong><br/>
                840 Beaufort Street Inglewood</a>
                <a href="/">
                <strong>Victoria Park</strong><br/>
                419 Albany Highway Victoria Park </a>
                <a href="/"><strong>Mosman Park</strong><br/>
                1/634 Stirling Highway Mosman Park</a>
  
            </div>
    
            <div className="box">
                <h3>quick links</h3>
                <a href="#">home</a>
                <a href="#">dishes</a>
                <a href="#">about</a>
                <a href="#">menu</a>
                <a href="#">reivew</a>
                <a href="#">order</a>
            </div>
    
            <div className="box">
                <h3>contact info</h3>
                <a href="#">+61 8 6161 9509<br></br>
                Inglewood</a>
                <a href="#">+61 8 6161 8645<br></br>
                Victoria Park</a>
                <a href="#">+61 8 6161 2290 <br></br>Mosman Park</a>
       
            </div>
    
            <div className="box">
                <h3>follow us</h3>
                <a href="#">facebook</a>
                <a href="#">twitter</a>
                <a href="#">instagram</a>
                <a href="#">linkedin</a>
            </div>
    
        </div>
    
        <div className="credit"> copyright @ 2021 <span></span> </div>
    
    </section>
    
    </div>
  )
}
