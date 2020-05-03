import React from 'react';
import ServicesItem from './ServicesItem';
import adjust from '../../images/icons/service-icon-1.png';
import mount from '../../images/icons/service-icon-2.png';
import protect from '../../images/icons/service-icon-3.png';
import orderProject from '../../images/icons/service-icon-4.png';
import '../SCSS/Services.scss';
const Services = () => {
    return (
        <section className="services">
            <ServicesItem
                photo={adjust}
                header={"Adjust fence"}
                text="Using our web service you can easly check our offer and choose which type of fence is the best for you."
            />
            <ServicesItem
                photo={mount}
                header={"Mount"}
                text="We also offer professional assembly. Our experienced crew will come directly to your mansion, house, garden and do everything what is needed. You don't have to do it by yourself!"
            />
            <ServicesItem
                photo={protect}
                header={"Conservation"}
                text="One of the most important factor for high endurance is conservation. We offer regular reviews and conservation to make your fences live longer."
            />
            <ServicesItem
                photo={orderProject}
                header={"Custom made"}
                text="If you didn't find anything that can work for you in our offer, you can always contact us and take the matters into your own hands explaining us what type/kind of fence would you like to have."
            />
        </section>
    );
}

export default Services;