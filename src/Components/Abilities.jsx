import style from './Abilities.module.css'

export function Abilities () {
    return (
        <div className={style.abilities}>
            <div className={style.abilitiesBox}>

                <ul className={style.abilitiesList}>
                    <li>Habilidade 1</li>
                    <li>Habilidade 2</li>
                    <li>Habilidade 3</li>
                    <li>Habilidade 4</li>
                </ul>
            </div>

        </div>
    )
}