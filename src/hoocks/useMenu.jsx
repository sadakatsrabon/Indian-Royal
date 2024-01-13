import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    const { data: menuItems = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://server-indian-royal-52pijzpld-sadakatsrabon.vercel.app/menu');
            return res.json();
        }
    });
    return [menuItems, loading, refetch]
}
export default useMenu;