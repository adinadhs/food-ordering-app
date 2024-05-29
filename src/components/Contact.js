const Contact = () => {
    return (
        <div>
            <h1 className=" text-blue-300 font-bold text-3xl p-4 my-4 mx-1">Contact us Page</h1>
            <form>
                <input type = "text" className="border border-black m-2 p-1 rounded-lg my-1" placeholder="name"/>
                <input type = "text" className="border border-black m-2 p-1 rounded-lg my-1" placeholder="message"/>
                <button className="border border-black m-2 p-1 bg-gray-100 rounded-lg">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default Contact;