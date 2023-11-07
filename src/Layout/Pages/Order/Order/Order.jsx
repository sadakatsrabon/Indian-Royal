import { Link } from 'react-router-dom';
import orderImg from '../../../../assets/shop/Order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';

const Order = () => {
    const [activeTab, setActiveTab] = useState(2);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div>
            <Cover bgImage={orderImg} title="Order from Royal"></Cover>
            <div className="tabs justify-center my-4">
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
            </div>
        </div>
    );
};

export default Order;
