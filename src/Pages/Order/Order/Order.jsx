import orderImg from '../../../assets/shop/Order.jpg'
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hoocks/useMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.includes(category) ? categories.indexOf(category) : 0;
    const [tabIndex, setTabIndex] = useState(initialIndex);
    console.log(tabIndex);


    const [menuItems] = useMenu();
    const salad = menuItems.filter(item => item.category === 'salad');
    const pizza = menuItems.filter(item => item.category === 'pizza');
    const soup = menuItems.filter(item => item.category === 'soup');
    const dessert = menuItems.filter(item => item.category === 'dessert');
    const drinks = menuItems.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Indian Royal || Order Food</title>
            </Helmet>

            <Cover bgImage={orderImg} title="Order from Royal"></Cover>
            <div className='px-8 my-10'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center text-xl font-semibold">
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
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