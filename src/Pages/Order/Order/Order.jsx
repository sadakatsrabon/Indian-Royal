import orderImg from '../../../assets/shop/Order.jpg'
import Cover from '../../../Shared/Cover/Cover';
import useMenu from '../../../hoocks/useMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Order = () => {
    // ToDo: Need to change Menu Catagories
    const categories = ['popular', 'meat', 'fish', 'egg', 'prawns', 'rice', 'roti_pastaa', 'complete_meal', 'salad_raita', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.includes(category.toLocaleLowerCase()) ? categories.indexOf(category.toLocaleLowerCase()) : 0;
    const [tabIndex, setTabIndex] = useState(initialIndex);
    console.log(tabIndex, category);


    const [menuItems] = useMenu();
    const popular = menuItems.filter(item => item.category === 'popular');
    const meat = menuItems.filter(item => item.category === 'meat');
    const fish = menuItems.filter(item => item.category === 'fish');
    const egg = menuItems.filter(item => item.category === 'egg');
    const praun = menuItems.filter(item => item.category === 'praun');
    const rice = menuItems.filter(item => item.category === 'rice');
    const roti_pasta = menuItems.filter(item => item.category === 'roti_pasta');
    const complete_meal = menuItems.filter(item => item.category === 'complete_meal');
    const salad_raita = menuItems.filter(item => item.category === 'salad_raita');
    const soup = menuItems.filter(item => item.category === 'soup');
    const dessert = menuItems.filter(item => item.category === 'dessert');
    const drinks = menuItems.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Indian Royal || Order Food</title>
            </Helmet>

            <Cover bgImage={orderImg} title="Order from Royal"></Cover>
            <div className='px-8 my-10'>
                <SectionTitle
                    heading={"menu tab"}
                ></SectionTitle>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center text-xl">
                        <Tab>Popular</Tab>
                        <Tab>Meat</Tab>
                        <Tab>Fish</Tab>
                        <Tab>Eggs</Tab>
                        <Tab>Praun</Tab>
                        <Tab>Rice</Tab>
                        <Tab>Roti_pasta</Tab>
                        <Tab>Complete Meals</Tab>
                        <Tab>Salad & Raitas</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={popular}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={meat}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={fish}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={egg}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={praun}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={rice}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={roti_pasta}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={complete_meal}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={salad_raita}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;