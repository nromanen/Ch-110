import React from "react"
import '../../assets/stylesheets/home.css'

class Home extends React.Component {
    

    render () {

        return (
        <>
            <div className="left_up">
                <h1>
                    <a className="link_online" href="#" title="Online Recording">HealthBook</a>
                </h1>
                <p className="describe">
                    Take a look at online doctors and record to them.
                    <br/>
                    Login is through an account created by you or through a consultant who will be happy to advise you.
                    <br/>
                    It is recommended that you provide reliable information about your chronic ailments and allergies, so that we can get more information to give you first medical aid.
                </p>

            </div>

            
                <hr className="line" align="left" />
            

            <div className="rigth_up">
        
                <div className="rigth_up_first">
                    <p>
                        Sincerely yours, we make every effort to provide quality medical services.
                    </p>
                </div>

                <div className="rigth_up_second">
                    <p className="p1">
                        CAN WE HELP YOU?
                    </p>

                    <p className="p2">

                        <img src="/assets/hospital.png" alt="hospital.png" width="125" height="125" className="img" />

                        We will be happy to answer any questions regarding the service of medical services
                        and provide actual information about your health.
                    </p>

                </div>
        
        
                <div className="rigth_up_third">
                    <p>
                        We are waiting for your messages at <a href="HealthBook@gmail.com">info@gmail.com</a>
                         or write your number here and we will call you.
                    </p>

                    {/*<form>*/}
                    {/*    <li>*/}
                    {/*        <input className="input_tel" type="tel" id="phone" size="30" autocomplete="off" />*/}

                    {/*        <input className="input_submit" type="submit" />*/}
                    {/*    </li>*/}
                    {/*</form>*/}
                </div>
            </div>


            <div className="left_down">
                <p>
                    <img src="/assets/discount-card.png" alt="discount-card.png" width="250" height="200" className="img_discount" />
                    {/*<h2 align="center">New!</h2>*/}
                    {/*<h4>We have created a loyalty program that provides -10% on all medical*/}
                    {/*    services in our clinic.<br/>*/}
                    {/*    Come in and get your card FOR FREE!<br/>*/}
                    {/*    We are waiting for you!*/}
                    {/*</h4>*/}
                </p>     
            </div>
        </>    
        );
    }
}

export default Home