import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import MovieList from '@/components/MovieList';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: '/auth',
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
}

export default function Home() {
	const { data: movies = [] } = useMovieList();
	const { data: Favorites = [] } = useFavorites();

	return (
		<>
			<Navbar />
			<Billboard />
			<div className="pb-40">
				<MovieList title="Bombando Agora" data={movies} />
				<MovieList title="Minha Lista" data={Favorites} />
			</div>
		</>
	);
}
