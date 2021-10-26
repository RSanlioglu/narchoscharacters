import styles from '../styles/characters.module.css'

const Character = ({character}) => {
    return (
        <>
            <section className={styles.character}>
                <h1>{character.name}</h1>
                <h5>Associated with: {character.cartel}</h5>
                <p>{character.description}</p>
            </section>
        </>
    )
}

export default Character