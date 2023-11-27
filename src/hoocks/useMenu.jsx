import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useMenu = () => {
    // const [menuItems, setMenuItems] = useState([]);
    // const [loading, setLoading] = useState(true);
    // console.log(menuItems)

    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenuItems(data);
    //             setLoading(false);
    //         })
    // }, [])

    const { data: menuItems = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/menu');
            return res.json();
        }
    });
    return [menuItems, loading, refetch]
}
export default useMenu;