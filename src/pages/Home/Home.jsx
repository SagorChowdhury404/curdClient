
const Home = () => {

    const handleOnUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { email, name }
        console.log(user);

    }


    return (
        <div className="font-extrabold text-center py-20">
            <h1 className="text-3xl mb-5 ">Simple Curd</h1>
            <form onSubmit={handleOnUser} >
                <input className="bg-white" type="text" name="name" id="" />
                <br />
                <br />
                <input className="bg-white my-5 " type="email" name="email" id="" /> <br />
                <button className="bg-white py-2  px-8  rounded-xl" type="submit">Add user</button>
            </form>

        </div >
    );
};

export default Home;