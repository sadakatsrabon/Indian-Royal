// import { Link } from 'react-router-dom';
import orderImg from '../../../../assets/shop/Order.jpg'
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../../hoocks/useMenu';
import FoodCard from '../../../../components/FoodCard/FoodCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';

const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const [menuItems] = useMenu();
    const desserts = menuItems.filter(item => item.category === 'dessert');
    const pizzas = menuItems.filter(item => item.category === 'pizza');
    const salads = menuItems.filter(item => item.category === 'salad');
    const soups = menuItems.filter(item => item.category === 'soup');
    const offered = menuItems.filter(item => item.category === 'offered');

    return (
        <div>
            <Cover bgImage={orderImg} title="Order from Royal"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pozza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10'>
                        {
                            salads.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>

            {/* <FoodCard></FoodCard> */}
        </div>
    );
};

export default Order;







// const [activeTab, setActiveTab] = useState(2);

// const handleTabClick = (tab) => {
//     setActiveTab(tab);
// }

{/* <div className="tabs justify-center my-4">
    <Link
        className={`tab tab-bordered ${activeTab === 1 ? 'tab-active' : ''}`}
        onClick={() => handleTabClick(1)}
    >
        Salad
    </Link>
    <Link
        className={`tab tab-bordered ${activeTab === 2 ? 'tab-active' : ''}`}
        onClick={() => handleTabClick(2)}
    >
        Pizza
    </Link>
    <Link
        className={`tab tab-bordered ${activeTab === 3 ? 'tab-active' : ''}`}
        onClick={() => handleTabClick(3)}
    >
        Soup
    </Link>
    <Link
        className={`tab tab-bordered ${activeTab === 4 ? 'tab-active' : ''}`}
        onClick={() => handleTabClick(4)}
    >
        Desserts
    </Link>
    <Link
        className={`tab tab-bordered ${activeTab === 5 ? 'tab-active' : ''}`}
        onClick={() => handleTabClick(5)}
    >
        Drinks
    </Link>
</div> */}