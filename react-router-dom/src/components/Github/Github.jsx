import { useLoaderData } from 'react-router-dom'


export default function Github() {
    const data = useLoaderData()


    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} width={300} alt="" />
        </div>
    )
}


export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Oluwatos94')
    return response.json()
}