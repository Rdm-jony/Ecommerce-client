
const AdminBaredCrumb = ({ children,title }) => {
    return (
        <div className="lg:flex justify-between items-center  dark:bg-dark py-5 px-3 rounded-xl drop-shadow-lg">
            <h2 className="font-semibold text-4xl">{title}</h2>
            <div className="breadcrumbs text-sm">
                <ul className="font-medium space-x-3">
                    {children}
                </ul>
            </div>
        </div>
    );
};

export default AdminBaredCrumb;