import style from './Graduations.module.css'

export function Graduations () {
    return (
        <div className={style.cursos}>
            <div className={style.cursosBox}>
                <div className={style.cursosContent1}>
                    <header>
                        <div>
                            <strong>Graduação 1</strong>
                        </div>
                    </header>
                    <p>Instituição</p>
                </div>

                <div className={style.cursosContent2}>
                    <header>
                        <div>
                            <strong>Graduação 2</strong>
                        </div>
                    </header>
                    <p>Instituição</p>
                </div>

                <div className={style.cursosContent3}>
                    <header>
                        <div>
                            <strong>Graduação 3</strong>
                        </div>
                    </header>
                    <p>Instituição</p>
                </div>
            </div>

        </div>
    )
}