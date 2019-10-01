import React, { Component } from 'react'
import { connect } from 'react-redux';
import Learn from "../../img/learn.png"
import { Modal } from 'react-bootstrap'
import { createClass } from '../../../actions';

class classList extends Component {
    state = {
        lgShow: false,
        value: ''
    }

    setLgShow() {
        this.setState({
            lgShow: !this.state.lgShow
        })
    }

    handleChange(event) {
         this.setState({value: event.target.value});
         console.log(this.state.value)
    }

    render() {
        return (
            <div>
                 <section className="classList">
                <div className="container">
                    <h5 className="classListh5">
                        <span className="classListh5l">Your classes</span>
                        <span className="classListh5r" onClick={this.setLgShow.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i> Add class</span>
                    </h5>

                    <div className="classRender">
                        <div className="classImage">
                            <img src={Learn} className="wide" alt="" />
                        </div>
                        <div className="classtitle">
                            <span className="classtitle1">Mathematics</span>
                            <span className="clatitle2">1 student</span>
                        </div>
                    </div>

                    <div className="classRender">
                        <div className="classImage">
                            <img src={Learn} className="wide" alt="" />
                        </div>
                        <div className="classtitle">
                            <span className="classtitle1">English</span>
                            <span className="claatitle2">2 students</span>
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                size="lg"
                show={this.state.lgShow}
                onHide={this.setLgShow.bind(this)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5> Add new class</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modalData">
                     
                    <form>
                         <h5 style={{paddingLeft: 10}} >Select class below</h5>
                      <hr/>                      
                        <select style={{marginRight: 10}} value={this.state.value} onChange={this.handleChange.bind(this)}>
                            <option style={{textTransform: 'uppercase', fontSize: 15}} value=""></option>                            
                            <option style={{textTransform: 'uppercase', fontSize: 15}} value="Mathemathetics">Mathemathetics</option>
                            <option style={{textTransform: 'uppercase', fontSize: 15}} value="English">English</option>
                            <option style={{textTransform: 'uppercase', fontSize: 15}} value="Physics">Physics</option>
                            <option style={{textTransform: 'uppercase', fontSize: 15}} value="Computer Science">Computer Science</option>
                        </select> 

                        
                        <input type="submit" value="Create" />
                    </form>
                      
                    </div>
                </Modal.Body>
            </Modal>
        </div>
           
        )
    }
}

export default connect(null, {
    createClass
})(classList)


