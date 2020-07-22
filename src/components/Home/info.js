import React from 'react'
import {Link} from 'gatsby'
import Title from '../global/Title'
export default function info() {
    return (
       <section className="py-5">
           <div className="container">
               <Title title="our story"/>
               <div className="row">
                   <div className="col-10 col-sm-8 mx-auto text-center">
                       <p className="lead  text-muted mb-5">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium non nibh ut posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere dolor eu justo tristique, ac molestie urna gravida. Pellentesque blandit facilisis arcu sit amet venenatis. Proin nec augue eget tellus egestas molestie. Curabitur at urna eros. Donec id magna sodales, lacinia metus eu, rutrum mi. Donec nibh odio, tincidunt sit amet ullamcorper a, semper eget orci.
                       </p>
                       <Link to="/about">
                           <button className="btn  text-uppercase btn-yellow">About</button>
                       </Link>

                   
                     </div>
                   </div>
               </div>
           </section>
    )
}
