import { serve } from 'https://deno.land/std@0.153.0/http/server.ts'
import { createRouter, createServer } from 'ultra/server.ts'
import App from './src/app.tsx'

// Twind
import { TwindProvider } from './src/twind/TwindProvider.tsx'
import './src/twind/twind.ts'

// React Query
import { QueryClientProvider } from '@tanstack/react-query'
import { useDehydrateReactQuery } from './src/react-query/useDehydrateReactQuery.tsx'
import { queryClient } from './src/react-query/query-client.ts'

const server = await createServer({
	importMapPath: import.meta.resolve('./importMap.json'),
	browserEntrypoint: import.meta.resolve('./client.tsx'),
})

function ServerApp({ context }: any) {
	useDehydrateReactQuery(queryClient)

	const requestUrl = new URL(context.req.url)

	return (
		<TwindProvider>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</TwindProvider>
	)
}

server.get('*', async context => {
	// clear query cache
	queryClient.clear()

	/**
	 * Render the request
	 */
	const result = await server.render(<ServerApp context={context} />)

	return context.body(result, 200, {
		'content-type': 'text/html',
	})
})

serve(server.fetch)
