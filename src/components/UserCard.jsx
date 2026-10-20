{/* style é um alias = apelido, ou seja, aplicamos um subtítulo para variável que vai receber os atributos de css, observe cada situação no código abaixo */}
import style from './UserCard.module.css';

const UserCard = ({
    name,
    age,
    profession,
    avatarUrl,
    isMentor = false,
    children
}) => {
    return (
        <article className={style.card}>
            <img 
                src={avatarUrl} 
                alt={`Foto de ${name}`}
                className={style.avatar}/>
            <div className={style.content}>
                <div className={style.heading}>
                    <h2>{name}</h2>
                    {isMentor && <span className={style.badge}>Mentor</span>}
                </div>
                <p className={style.profession}>{profession}</p>
                <p className={style.age}>{age} anos</p>
                {children}
            </div>
        </article>
    );
}
export default UserCard;
{/* Observe que os atributos {style.'''} refere-se a importações dinâmicas de estilos CSS. A importação deve ser apontada na primeira linha (neste caso) */}