import React from 'react'
import Title from '../components/global/Title'
import Layout from '../components/layout'




export default function contact() {
    return (
        <Layout>
      <section className="contact py-5">
          <Title title="napíšte nám"/>
          <div className="row">
              <div className="col-10 col-sm-8 col-md-6 mx-auto">
                  <form action="https://formspree.io/stefan@hancar.sk" method= "POST" >
                      <div className="form-gorup">
                          <label htmlFor="name">Name</label>
                          <input type="text" className="form-control" name="name" id="name" placeholder="your name"/>
                      </div>
                      <div className="form-gorup">
                          <label htmlFor="name">Email</label>
                          <input type="text" className="form-control" name="email" id="email" placeholder="email@email"/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <textarea name="description" id="description" className="form-control" rows="5" placeholder="your description here..."></textarea>

                      </div>
                      <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5" >submit</button>

                  </form>
              </div>
          </div>
      </section>
      </Layout>
    )
}
