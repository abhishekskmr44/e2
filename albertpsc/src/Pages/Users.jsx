import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

function Users() {
    
    const[data,setData] = useState([]);
    const [SearchParams,setSearchParams] = useSearchParams()
    const[page, setPage] = useState(Number(searchParams.get("page"))||1);



  useEffect(()=>{
    setSearchParams({
        page
    });
      axios({
      url:"https://reqres.in/api/users",
      method: "GET",
      params:{
          page
      }
      })
      .then((res)=>{
       setData( res.data.data);
      })
      .catch((err)=>{});
  },[page]);

 
  
    return (
    <div>
    <div>
    <button disabled={page === 1} onClick={()=>setPage(1)}>1</button>
    <button disabled={page === 2} onClick={()=>setPage(1)}>2</button>
    </div>
    {data.map((item)=>(
        <div key={item.id}>
        <img src={item.avatar} width="100px" alt={item.email}/>
         <div>Name: {item.first_name}</div>
         <Link to={"/users/${item.id}"}>See More</Link>
         </div>
    ))};
</div>
);
    }


export default Users