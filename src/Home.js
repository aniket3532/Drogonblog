import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isPending : isLoading, Error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { Error && <div>{ Error }</div> }
            { Error === null && isLoading && <h3>Loading blogs...</h3>}
            { blogs && <BlogList blogs={blogs} title = "All Blogs!"/>}
        </div>
    );
}
    
export default Home;
