import { hydrateRoot } from 'react-dom/client'
import App from './src/app.tsx'
import { useDehydrateReactQuery } from './src/react-query/useDehydrateReactQuery.tsx'

// Twind
import { TwindProvider } from './src/twind/TwindProvider.tsx'
import './src/twind/twind.ts'

// React Query
import { Hydrate, QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './src/react-query/query-client.ts'
declare const __REACT_QUERY_DEHYDRATED_STATE: unknown

function ClientApp() {
	useDehydrateReactQuery(queryClient)
	return (
		<TwindProvider>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={__REACT_QUERY_DEHYDRATED_STATE}>
					<App />
				</Hydrate>
			</QueryClientProvider>
		</TwindProvider>
	)
}

hydrateRoot(document, <ClientApp />)
