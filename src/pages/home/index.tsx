import PokemonCard from '@/components/PokemonCard'
import { usePokemonListStore} from '@/store/pokemonList'
import SearchForm from '@/components/SearchForm';
import ReactLoading from 'react-loading'

const HomePage = () => {
    const { pokemon, fetchPokemon } = usePokemonListStore()

    return (
        <div className = 'w-[90%] m-[auto] max-w-[1100px]'>
            <div className = 'flex justify-center'>
                <img src='https://raw.githubusercontent.com/NakornKitk/pokedex-app-v2/refs/heads/main/public/images/logo.webp' className='max-h-[80px] mt-[20px]' alt=""></img>
            </div>
            <SearchForm/>
            {fetchPokemon.loading && <div className="h-[600px] flex justify-center items-center">
                <ReactLoading type="spin" color='#fff' />
            </div>}
            {!fetchPokemon.loading && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[40px] justify-center">
                {pokemon.data?.map((item) => {
                    return <PokemonCard key={item.id} image = {item.image || ''}
                    name = {item.name}
                    id = {item.id}
                    types = {item.types}/>
                })}
            </div>}
        </div>
    )
}

export default HomePage