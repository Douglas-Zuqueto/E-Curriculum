import style from './Sidebar.module.css'
import mural from '../assets/img/mural.avif'
import avatar from '../assets/img/avatar.webp'

export function Sidebar() {
    return (
        <div>
            <aside className={style.sidebar}>

                <img className={style.cover} src={mural} alt='https://images.unsplash.com/photo-1625535069654-cfeb8f829088?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&authuser=1' />
                <div className={style.profile}>
                    <img className={style.avatar} src={avatar} alt='https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png?authuser=1' />
                    <strong>Seu Nome</strong>
                    <span>Profissão</span>
                </div>

                <footer>
                    <a href="">@seuGitHub</a>
                </footer>


            </aside>

            <aside className={style.contato}>
                <strong>Contato:</strong>
                <p>Telefone: (99) 9 9999-9999</p>
                <p>Email: seuemail@email.com.br</p>
            </aside>
        </div>

    )
}