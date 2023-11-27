import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ManageItems = () => {
    return (
        <div className='w-full'>
            <Helmet>Indian Royal || Manage Items</Helmet>
            <SectionTitle
            subHeading="Hello Boss"
            heading="Manage Your Item"
            ></SectionTitle>
        </div>
    );
};

export default ManageItems;