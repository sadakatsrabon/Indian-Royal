
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-6/12 mx-auto my-8 pt-6">
            <p className="text-center">{subHeading}</p>
            <h3 className="text-3xl font-bold text-center uppercase border-b-4 pb-6 mb-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;