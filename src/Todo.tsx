import { useQuery } from '@tanstack/react-query'
import { tw } from 'twind'
export function Todo({ todo }: { todo: number }) {
	const query = useQuery(['todo', todo], async () => {
      await new Promise((resolve) => setTimeout(resolve, 10000))
		const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo}`)
		return res.json()
	})
	return <div className={tw`text-red-500`}>{JSON.stringify(query.data)}</div>
}
