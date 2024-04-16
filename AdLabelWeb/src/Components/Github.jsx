
import {useLoaderData} from 'react-router-dom'

function GitHub(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    return(
        <div className="text-3xl text-center text-white m-4 bg-gray-400 p-4">Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
    )
}

export default GitHub

export const GitHubInfoLoader= async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}