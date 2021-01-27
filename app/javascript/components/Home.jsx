import React from "react"
import '../../assets/stylesheets/home.css'
import I18n from 'i18n-js'
import '../../javascript/bundles/i18n/en.js'
import '../../javascript/bundles/i18n/ru.js'
import '../../javascript/bundles/i18n/uk.js'

class Home extends React.Component {
    
    render () {

        return (
        <>  
            <div className="left_up">
               <h1>
                    <a className="link_online" href="#" title="Online Recording">{I18n.t('home.healthbook')}</a>
                </h1>
                <p className="describe">
                    {I18n.t('home.describe_1')}
                    <br/>
                    {I18n.t('home.describe_2')}
                    <br/>
                    {I18n.t('home.describe_3')}
                </p>

            </div>

            <hr className="line" align="left" />

            <div className="rigth_up">

        
                <div className="rigth_up_first">
                    <p>
                        {I18n.t('home.rigth_up_first')} 
                    </p>
                </div>

                <div className="rigth_up_second">
                    <p className="p1">
                        {I18n.t('home.rigth_up_second_p1')}
                    </p>

                    <p className="p2">
                        <img src="/assets/hospital.png" alt="hospital.png" width="125" height="125" className="img" />
                        {I18n.t('home.rigth_up_second_p2')}
                    </p>
                </div>
        
        

                <div className="rigth_up_third">
                    <p>
                        {I18n.t('home.rigth_up_third_p1')} <a href="mailto:healthbookcv@gmail.com">healthbookcv@gmail.com</a>
                        {I18n.t('home.rigth_up_third_p2')}
                    </p>
                    <form action="/send_tel" method="post">
                        <li>
                            <input className="input_tel" type="tel" name="tel" id="phone" autoComplete="off" />
                            <input className="input_submit" type="submit" value="Submit" />
                        </li>
                    </form>

        
                </div>
            </div>


            <div className="left_down">
                <p>
                    <img src="/assets/discount-card.png" alt="discount-card.png" width="250" height="200" className="img_discount" />
                    <h2 align="center">{I18n.t('home.left_down_h2')}</h2>
                    <h4>
                        {I18n.t('home.left_down_h4_1')}<br/>
                        {I18n.t('home.left_down_h4_2')}<br/>
                        {I18n.t('home.left_down_h4_3')}
                    </h4>
                </p>     
            </div>
        </>    
        );
    }
}

export default Home