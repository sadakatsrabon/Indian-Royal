
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-6/12 mx-auto my-8">
            <p>{subHeading}</p>
            <h3 className="text-3xl font-bold text-center uppercase border-y-4 py-6 mb-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;