import'./Styles/query.css'
import Container from "react-bootstrap/Container";
import { FaWhatsapp } from 'react-icons/fa';


function Query() {
  return (
    <>
            <section id="query">
                <Container>
                    <div className="q-contents">
                        <h1>Frequently Asked Questions</h1>
                        <div className="questions  ">
                            <div className="quest-left">
                                <p>How to order medicines from Aster Pharmacy?</p>
                            </div>
                            <div className="quest-right">
                               <div className="bot"><h3>+</h3></div>
                            </div>
                        </div>
                        <div className="questions">
                            <div className="quest-left">
                                <p>Can I buy all kinds of medicines from Aster Pharmacy?</p>
                            </div>
                            <div className="quest-right">
                               <div className="bot"><h3>+</h3></div>
                            </div>
                        </div>
                        <div className="questions">
                            <div className="quest-left">
                                <p>How can I buy Aster Pharmacy products?</p>
                            </div>
                            <div className="quest-right">
                               <div className="bot"><h3>+</h3></div>
                            </div>
                        </div>
                        <div className="questions">
                            <div className="quest-left">
                                <p>Can I track the delivery status of my order?</p>
                            </div>
                            <div className="quest-right">
                               <div className="bot"><h3>+</h3></div>
                            </div>
                        </div>
                        <div className="questions">
                            <div className="quest-left">
                                <p>How can I buy Aster Pharmacy products?</p>
                            </div>
                            <div className="quest-right">
                               <div className="bot"><h3>+</h3></div>
                            </div>
                        </div>
                        <div className="questions">
                            <div className="quest-left">
                                <p>Can I track the delivery status of my order?</p>
                            </div>
                            <div className="quest-right">
                               <div className="bot"><h3>+</h3></div>
                            </div>
                        </div>
                        <div className="questions">
                            <div className="quest-left">
                                <p>How to order medicines from Aster Pharmacy?</p>
                            </div>
                            <div className="quest-right ">
                           <div className="bot"><h3>+</h3></div>
                            </div>
                        </div>
                    </div>
                    <div className="watsapp">
                       
                            <FaWhatsapp style={{marginBottom:"7px"}} />

                       
                    </div>
                </Container>
            </section>
    </>
  )
}

export default Query