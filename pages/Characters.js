import {useEffect, useState} from 'react';
import axios from 'axios';
import Navigation from "./Navigation";
import Character from './Character';
import styles from '../styles/characters.module.css'

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [name, setName] = useState('');
    const [cartel, setCartel] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleCartelChange = (event) => {
        setCartel(event.target.value);
    }

    const handleDescritpionChange = (event) => {
        setDescription(event.target.value);
    }

    const addCharacter = async () => {
        try {
            const response = await axios.post('/api/characters', {name, cartel, description});

            if(response?.data?.success) { 
                setCharacters(response.data.data);
            }
        } catch (err) {
            setError(err?.response?.data?.error);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addCharacter();
        await getCharacters();
    }

    if(error) {
        return <p>Noe gikk galt: {error}</p>
    }

    const getCharacters = async () => {
        try {
            const response = await axios.get('api/characters');

            if(response?.data?.success) {
                setCharacters(response.data.data);
            }
        } catch (error) {
            console.log(error?.response?.data);
        }
    }

    useEffect(() => {
        getCharacters();
    }, []);

    return (
    <>
    <Navigation />
        <h1>Characters from the show</h1>
        <p>Note: The characters are based on true people</p>
        <hr />
        <section className={styles.characters}>
            {characters?.length > 0 ? characters.map(character => <Character character={character} />): null}
        </section>
        <br />
        <section className={styles.addCharacter}>
            <label htmlFor="character">Add a new character</label>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input id="name" type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange} /> <br/>
                <input id="cartel" type="text" name="cartel" placeholder="Associated with" value={cartel} onChange={handleCartelChange} /> <br/>
                <input id="description" type="text" name="description" placeholder="Description" value={description} onChange={handleDescritpionChange} /> <br/>
                <button type="submit">Send</button>
            </form>
        </section>
    </>
    )
}
export default Characters